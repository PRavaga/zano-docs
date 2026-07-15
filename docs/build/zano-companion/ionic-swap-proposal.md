# Ionic Swap proposal

Creates Ionic Swap proposal.

In your web app, call extension Ionic Swap proposal method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.initializeIonicSwap(
	{
		destinationAssetID,
		destinationAssetAmount,
		currentAssetID,
		currentAssetAmount,
		destinationAddress
	}, 
	{
		timeoutMs: 60_000
	}
);
```

where:

- destinationAddress - Proposal destination address
- destinationAssetID - The ID of asset that proposal creator would receive
- destinationAssetAmount - Amount of asset that proposal creator would receive
- currentAssetID - The ID of asset that proposal creator would send
- currentAssetAmount - Amount of asset that proposal creator would send
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
	"data": "" // hex_raw_proposal
}
```

where:

- data - Hex Raw Proposal. Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finalize and sign transaction

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request(
	'IONIC_SWAP', 
	{
		destinationAddress: "",
		destinationAssetID: "",
		destinationAssetAmount: "1",
		currentAssetID: "",
		currentAssetAmount: "1"
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
	"data": {
		"result": {
			"hex_raw_proposal": ""
		}
	}
}
```

where:

- hex_raw_proposal - Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finalize and sign transaction