---
sidebar_position: 2
---

# Server-Side Auth Integration Guide

Practical server auth integration guide via Zano Companion message sign is provided here.

The flow consists of three steps, split across two server endpoints:

1. **Message Generation** (`requestAuth`) — the server builds a secure, single-use
   message bound to the user's wallet address and returns it to the client.
2. **Message Signing** — the client signs that message with the Zano Companion
   extension, producing a signature and the public key it was signed with.
3. **Sign Validation** (`auth`) — the server re-validates the signature against the
   original message, and issues a session token.

Code provided in this guide is abstract and intentionally lacks of implementation of DB interaction methods, framework-specific code, ect.

## Requirements

Platform: `Node.js >= 18`

Libraries:

```text
zano_web3: ^9.8.0
```

The integration uses two `zano_web3` submodules:

- `zano_web3/shared` — `generateSecureMessageForSigning` for building the message.
- `zano_web3/server` — `ServerWallet` for validating the signature.

## Message Generation

Server should have an endpoint that initializes the auth session and generates the message to be signed. In our example let it be `/request-auth`.

The client sends its wallet address and the path it is authenticating from.
The server turns these into a structured, secure message using
`generateSecureMessageForSigning`, persists it together with an expiry, and returns it.

The message is bound to the origin (`domain` / `uri`), the signing address, a single-use
`nonce`, and a short `expirationTime` — so it cannot be replayed against another origin or
reused after it expires.

```js
import { generateSecureMessageForSigning } from 'zano_web3/shared';

async function requestAuth(req, res) {
  const { address, path } = req.body;

  const baseUrl = new URL(FRONTEND_URL);
  const uri = new URL(path, baseUrl).toString();

  const statement = `Sign this message to authenticate in ${baseUrl.host}.`;
  const expirationTime = new Date(Date.now() + MESSAGE_TTL_MS);

  const result = generateSecureMessageForSigning({
    domain: baseUrl.host,
    address,
    statement,
    uri,
    nonce: crypto.randomUUID(), // You may generate nonce any other way
    expirationTime,
  });

  if (!result.success) {
    throw new Error('MESSAGE_SIGN_UNKNOWN_ERROR');
  }

  // Persist the message so it can be looked up and validated later.
  // Storing it lets you reject signatures for messages you never issued
  // and enforce single use by deleting the record once consumed.
  // You may identify the auth session any way you need (e. g. auth session random ID).
  await saveAuthMessage({ address, message: result.message, expirationTime });

  return res.status(200).send({ success: true, data: result.message });
}
```

The returned data is the exact message string the client must present to the wallet
for signing.

## Message Signing

Signing happens entirely on the client with the Zano Companion extension — the server
never sees the private key. The client passes the message returned from the
Message Generation step to the wallet, which returns the signature and the pkey
(the public key the signature was produced with). These are then sent back to the
Sign Validation endpoint.

For the client-side signing API, see the Zano Companion documentation:
[Zano Companion — message signing](https://docs.zano.org/docs/build/zano-companion/message-sign/message-sign-companion-guide).

## Signature Validation

Server should have an endpoint that finishes auth session, validates message and its signature and issues user session token. In our example let it be `/auth`.

The client submits `address`, `message`, `signature`, and `pkey`. The server validates in two stages and only then issues a session token:

- Message authenticity — the submitted message must match a record the server issued and must not be expired (single-use, time-bound).
- Signature validity — `ServerWallet.validateSecureMessageSignature` cryptographically verifies the signature against the original message and address.

```js
import { ServerWallet } from 'zano_web3/server';

async function auth(req, res) {
  const { address, message, signature, pkey } = req.body.data;

  // 1. The message must have been issued by us and must not be expired.
  const authMessage = await findAuthMessage({ address, message });
  const isMessageValid = !!authMessage && authMessage.expiresAt.getTime() > Date.now();

  if (!isMessageValid) {
    return res.status(400).send({ success: false, data: 'Invalid auth message' });
  }

  const wallet = new ServerWallet({ daemonUrl: DAEMON_URL, walletUrl: '' });

  // 2. Verify the cryptographic signature against the original message.
  const isValidSignature = await wallet.validateSecureMessageSignature({
    originalMessage: authMessage.message,
    signedMessage: message,
    signature,
    address,
    pkeyFromSignature: pkey,
  });

  if (!isValidSignature) {
    return res.status(400).send({ success: false, data: 'Invalid auth data' });
  }

  const token = await issueSession({ address });
  await deleteAuthMessage({ address, message });

  return res.status(200).send({ success: true, data: token });
}
```

Security notes:
- Single use: delete the stored message once validated so the same signature cannot be replayed.
- Expiry: keep the message lifetime short and always re-check expiry server-side at validation time.
- Bind to origin: always pass real `domain`/`uri` values so a signature obtained for one app cannot be reused against another.