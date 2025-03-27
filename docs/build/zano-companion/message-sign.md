# Message Sign

Usage of Zano Extension message sign.

1.  In your web app, call extension sign method, while extension is on.

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
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
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