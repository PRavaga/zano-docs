# Get Whitelist

Returns [whitelisted assets](https://api.zano.org/assets_whitelist.json).

In your web app, call extension Get Whitelist method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.getWhitelist({ timeoutMs: 60_000 });
```

### Response

```json
{
    "success": true,
    "data": [{
        "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
        "decimal_point": 12,
        "full_name": "Zano",
        "ticker": "ZANO",
        "logo": ""
    }]
}
```

where:

- asset_id - ID of the asset
- decimal_point - Decimal point of the asset
- full_name - Full Name of the asset
- ticker - Ticker of the asset
- logo - [Optional] Asset logo SVG

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request('GET_WHITELIST', {}, timeout);
```

where:

- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
    "data": [{
        "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
        "decimal_point": 12,
        "full_name": "Zano",
        "ticker": "ZANO",
        "logo": ""
    }]
}
```

where:

- asset_id - ID of the asset
- decimal_point - Decimal point of the asset
- full_name - Full Name of the asset
- ticker - Ticker of the asset
- logo - [Optional] Asset logo SVG