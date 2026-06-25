---
namespace-identifier: zano-caip122
title: Zano Ecosystem - SIWx
author: Zano Team
status: Draft
type: Standard
created: 2026-06-18
updated: 2026-06-18
requires: ["CAIP-122", "CAIP-2", "CAIP-10"]
---

## CAIP-122

This is a technical standard written at a low level of abstraction. If you only need to know how to build an integration with our service, please refer to the [Server-Side Auth Integration Guide](https://docs.zano.org/docs/build/zano-companion/message-sign/server-side-authentication-integration-guide) instead.

For context, see the [CAIP-122](CAIP-122) specification.

## Rationale

On Ethereum, [EIP-4361](EIP-4361) Sign-in with Ethereum already exists, which was the inspiration for CAIP-122. This document specifies the SIWX standard implementation for Zano Ecosystem.

## Specification

### Signing Algorithm

Zano uses the Schnorr signature scheme for signing and verifying messages. The signing key is the wallet's spend key, and the corresponding public spend key (`pkey`) is used for verification. For the exact cryptographic primitives, see the [Zano Repository](https://github.com/hyle-team/zano).

Messages are signed through the wallet RPC method [`sign_message`](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/sign_message):

```json
// Request
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "sign_message",
  "params": {
    "buff": "aGVsbG8gd29ybGQ="
  }
}
```

```json
// Response
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": {
    "pkey": "9f5e...",
    "sig": "a1b2..."
  }
}
```

Signatures are verified through the daemon RPC method [`validate_signature`](https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/validate_signature):

```json
// Request
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "validate_signature",
  "params": {
    "buff": "aGVsbG8gd29ybGQ=",
    "pkey": "9f5e...",
    "sig": "a1b2..."
  }
}
```

```json
// Response
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": {
    "status": "OK"
  }
}
```

For the full parameter reference, see the [Zano Docs](https://docs.zano.org/docs/build/rpc-api).

### Signature Type

We use the signature type `zano-schnorr` when referring to a Schnorr signature produced by a Zano wallet's spend key, as returned by the `sign_message` wallet RPC method and validated by the `validate_signature` daemon RPC method.

### Signature Creation

In addition to the fields REQUIRED by `CAIP-122`, this implementation elevates the following OPTIONAL fields in abstract data model to REQUIRED:

- `nonce` — MUST be present. It MUST be a randomized token of at least 8 characters, used to prevent replay attacks.
- `statement` — MUST be present.
- `expiration-time` — MUST be present.

Verifiers MUST reject any message that omits a field marked REQUIRED by this specification.

The abstract data model must be converted into a string representation in an unambigious format. We use the format as defined in [`EIP-4361`](https://eips.ethereum.org/EIPS/eip-4361). Note that lines should be divided with `LF` (`'\n'`, `0x0A`) character ONLY. `CRLF` (`"\r\n"`) strings are not acceptable by this standard. String representation according to [`EIP-4361`](https://eips.ethereum.org/EIPS/eip-4361) is shown below:


```
${domain} wants you to sign in with your Zano account:
${account_address(address)}

${statement}

URI: ${uri}
Version: ${version}
Chain ID: ${chain-id}
Nonce: ${nonce}
Expiration Time: ${expiration-time}
```

An example of a fully populated valid message:

```
example.com wants you to sign in with your Zano account:
ZxD4n8Kp2Rj7Wm9Tv5Yx3aB6cE1fH4gJ7kL2mN5pQ8rS3tU6vW9xY2zA5bC8dE1fH4gJ7kL2mN5pQ8rS3tU6vW9xY2zA5b

Sign in to Example App with your Zano account.

URI: https://example.com/login
Version: 1
Chain ID: zano:mainnet
Nonce: f47ac10b-58cc-4372-a567-0e02b2c3d479
Expiration Time: 2026-06-18T12:30:00Z
```

### Signature Verification

To verify a signature, the message is reconstructed into its string representation, encoded as a Base64 string, and passed to the daemon RPC method [`validate_signature`](https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/validate_signature) together with the signer's public spend key (`pkey`) and the signature (`sig`):

```json
// Request
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "validate_signature",
  "params": {
    "buff": "aGVsbG8gd29ybGQ=",
    "pkey": "9f5e...",
    "sig": "a1b2..."
  }
}
```

```json
// Response
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": {
    "status": "OK"
  }
}
```

Verifiers MUST treat the message as valid only when `status` reports success. For the full parameter reference, see the [Zano Docs](https://docs.zano.org/docs/build/rpc-api).

## References

[eip-4361]: https://eips.ethereum.org/EIPS/eip-4361
[caip-10]: https://github.com/ChainAgnostic/CAIPs/blob/8fdb5bfd1bdf15c9daf8aacfbcc423533764dfe9/CAIPs/caip-10.md
[caip-2]: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
[caip-122]: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-122.md

- [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361): Sign-In with Ethereum
- [CAIP-10](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md): Account ID Specification
- [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md): Blockchain ID Specification
- [CAIP-122](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-122.md): Sign in With X Specification
- [Zano Documentation](https://docs.zano.org/docs/build/rpc-api): Zano RPC API Reference
- [Zano Repository](https://github.com/hyle-team/zano): Zano Repository