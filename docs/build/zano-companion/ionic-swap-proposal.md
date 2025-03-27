# Ionic Swap proposal

Creates Ionic Swap proposal.

In your web app, call extension Ionic Swap proposal method, while extension is on.

### Request

```jsx
window.zano.request(
	'IONIC_SWAP', 
	{
		destinationAddress: "",
		destinationAssetID: "",
		destinationAssetAmount: 1,
		currentAssetID: "",
		currentAssetAmount: 1
	}, 
	timeout
);
```

where:

- destinationAddress - Proposal destination address
- destinationAssetID - The ID of asset that proposal creator would receive
- destinationAssetAmount - Amount of asset that proposal creator would receive
- currentAssetID - The ID of asset that proposal creator would send
- currentAssetAmount - Amount of asset that proposal creator would send
- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"hex_raw_proposal": ""
	}
}
```

where:

- hex_raw_proposal - Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finialize and sign transaction