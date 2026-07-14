# Add Whitelist Asset

Adds given asset id to local whitelist. This whitelist is stored with the wallet file and reset in case of wallet resync or restoring wallet from seed phrase. Proxy of [assets_whitelist_add](/docs/build/rpc-api/wallet-rpc-api/assets_whitelist_add/) method.

In your web app, call extension Add Whitelist Asset method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const assetId = "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8";

const response = await zanoWallet.addWhitelistAsset(assetId, { timeoutMs: 60_000 });
```

where:

- assetId - Asset id that needed to be added to local whitelist, asset_id must exist in the network
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "current_supply": 500000000000000000,
        "decimal_point": 12,
        "full_name": "Zano wrapped ABC",
        "hidden_supply": false,
        "meta_info": "{ \"some_arbitrary_field_name\": \"some arbitrary value\"}",
        "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
        "owner_eth_pub_key": "",
        "ticker": "ZABC",
        "total_max_supply": 1000000000000000000
    }
}
```

where:

- data - Details of the asset, received from node
- current_supply - Currently emitted supply for the given asset
- decimal_point - Decimal point
- full_name - Full name of the asset
- hidden_supply - This field is reserved for future use and will be documented later
- meta_info - Any other information associated with the asset, by default in a json format
- owner - Owner's key, used only for EMIT and UPDATE validation, can be changed by transferring asset ownership
- owner_eth_pub_key - [Optional] Owner's key in the case when ETH signature is used
- ticker - Ticker associated with the asset
- total_max_supply - Maximum possible supply for a given asset, cannot be changed after deployment
