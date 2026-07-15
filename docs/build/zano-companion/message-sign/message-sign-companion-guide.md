---
sidebar_position: 1
---

# Message Sign Companion Guide

Usage of Zano Extension message sign.

1.  In your web app, call extension sign method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const message = "";

const response = await zanoWallet.requestMessageSign(
	message, 
	{
		timeoutMs: 60_000
	}
);
```

where:

- message - Any message you want to sign (it could be one-time text (nonce) that is used for wallet sign)
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
	"success": true,
	"data": {
		"pkey": "",
		"sig": ""
	}
}
```

where:

- pkey - Wallet's public key represented as a hexadecimal string
- sig - Signature represented as a hexadecimal string

2. As the result of method call, get signature and public key.

3.  Validate signature with validate_signature daemon method (either pkey or alias can be passed to daemon method alternatively). validate_signature method description: [https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/validate_signature](https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/validate_signature). You might also need to use get_alias_by_address method: [https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/get_alias_by_address](https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/get_alias_by_address).

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request('REQUEST_MESSAGE_SIGN', {message}, timeout);
```

where:

- message - Any message you want to sign (it could be one-time text (nonce) that is used for wallet sign)
- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
	"data": {
		"result": {
			"pkey": "",
			"sig": ""
		}
	}
}
```

where:

- pkey - Wallet's public key represented as a hexadecimal string
- sig - Signature represented as a hexadecimal string