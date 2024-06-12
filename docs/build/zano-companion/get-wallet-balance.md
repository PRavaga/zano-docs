# Get Wallet Balance

Gets balance of current wallet

In your web app, call extension Get Wallet Balance method, while extension is on.

### Request

```jsx
window.zano.request('GET_WALLET_BALANCE');
```

### Response

```json
{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
        "balance": 10000000000,
        "balances": [{
            "asset_info": {
                "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
                "current_supply": 500000000000000000,
                "decimal_point": 12,
                "full_name": "Zano wrapped USD",
                "hidden_supply": false,
                "meta_info": "Stable and private",
                "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
                "ticker": "ZUSD",
                "total_max_supply": 1000000000000000000
            },
            "awaiting_in": 1000000000000,
            "awaiting_out": 2000000000000,
            "total": 100000000000000,
            "unlocked": 50000000000000
        }],
        "unlocked_balance": 11000000000
    }
}
```

where:

- "balance": Native coins total amount
- "balances": Balances groupped by it's asset_id
- "asset_info": Asset info details
- "asset_id": Asset ID
- "current_supply": Currently emitted supply for given asset
- "decimal_point": Decimal point
- "full_name": Full name of the asset
- "hidden_supply": This one reserved for future use, will be documented later
- "meta_info": Any other information assetiaded with asset in a free form
- "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
- "ticker": Ticker associated with asset
- "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
- "awaiting_in": Unconfirmed amount for receive
- "awaiting_out": Unconfirmed amount for send
- "total": Total coins available(including locked)
- "unlocked": Unlocked coins available(the ones that could be used right now)
- "unlocked_balance": Native coins total unlocked amount