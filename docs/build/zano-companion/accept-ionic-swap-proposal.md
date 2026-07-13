# Accept Ionic Swap proposal

Accepts Ionic Swap proposal

In your web app, call extension Ionic Swap proposal method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const hexRawProposal = "";

const response = await zanoWallet.acceptIonicSwap(hexRawProposal, { timeoutMs: 60_000 });
```

where:

- hexRawProposal - Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finalize and sign transaction
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
	"success": true,
	"data": {
		"result_tx_id": ""
	}
}
```

where:

- result_tx_id - Result transaction ID