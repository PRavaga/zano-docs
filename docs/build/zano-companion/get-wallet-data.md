# Get Wallet Data

Gets common info of this wallet

In your web app, call extension Get Wallet Data method, while extension is on.

### Request

```jsx
window.zano.request('GET_WALLET_DATA');
```

### Response

```json
{
    "data": {
        "address": "",
        "alias": "",
        "balance": 0,
        "transactions": [{
            "isConfirmed": true,
            "txHash": "",
            "blobSize": 0,
            "timestamp": 1700000000,
            "height": 0,
            "paymentId": "",
            "comment": "",
            "fee": "0.01",
            "addresses": [""],
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