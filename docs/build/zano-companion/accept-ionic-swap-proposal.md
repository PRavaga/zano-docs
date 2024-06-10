# Accept Ionic Swap proposal

Accepts Ionic Swap proposal

In your web app, call extension Ionic Swap proposal method, while extension is on.

### Request

```jsx
window.zano.request(
	'IONIC_SWAP_ACCEPT', 
	{
		hex_raw_proposal: ""
	}, 
	timeout
);
```

where:

- hex_raw_proposal - Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finialize and sign transaction
- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"result_tx_id": ""
	}
}
```

where:

- result_tx_id - Result transaction ID