# Get Wallet Data

Gets common info of this wallet

In your web app, call extension Get Wallet Data method, while extension is on. The response won't be complete if some permissions are not granted.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.getWallet({ timeoutMs: 60_000 });
```

### Response

```json
{
    "success": true,
    "data": {
        "address": "",
        "alias": "",
        "balance": "0",
        "transactions": [{
            "isConfirmed": true,
            "txHash": "",
            "blobSize": 0,
            "timestamp": 1700000000,
            "height": 0,
            "paymentId": "",
            "comment": "",
            "fee": "0.01",
            "isInitiator": true,
            "transfers": [{
                "amount": "",
                "assetId": "",
                "incoming": false
            }]
        }],
        "assets": [{
            "name": "",
            "ticker": "",
            "assetId": "",
            "decimalPoint": 12,
            "balance": "",
            "unlockedBalance": ""
        }]
    }
}
```

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request('GET_WALLET_DATA', {}, timeout);
```

where:

- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
    "data": {
        "address": "",
        "alias": "",
        "balance": "0",
        "transactions": [{
            "isConfirmed": true,
            "txHash": "",
            "blobSize": 0,
            "timestamp": 1700000000,
            "height": 0,
            "paymentId": "",
            "comment": "",
            "fee": "0.01",
            "isInitiator": true,
            "transfers": [{
                "amount": "",
                "assetId": "",
                "incoming": false
            }]
        }],
        "assets": [{
            "name": "",
            "ticker": "",
            "assetId": "",
            "decimalPoint": 12,
            "balance": "",
            "unlockedBalance": ""
        }]
    }
}
```
