[Multiassets] Fetches the list of wallets

### Request

```json
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "mw_get_wallets",
  "params": {}
  }
}' \
 'http://127.0.0.1:12111/json_rpc'
```

---

### Response

```json
{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
        "wallets": [
            {
                "wallet_id": 0,
                "wi": {
                    "address": "ZxDA4mkxiiNPjBRyr2TcQCJNHTVSMt8s34snHJPoUxUwR9wMWad7cXDNGyBDKFjnpd16thHdmmBPpMhyCBjLXbDC1FTYpyrWs",
                    "balances": [
                        {
                            "asset_info": {
                                "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
                                "current_supply": 0,
                                "decimal_point": 12,
                                "full_name": "Zano",
                                "meta_info": "",
                                "owner": "0000000000000000000000000000000000000000000000000000000000000000",
                                "ticker": "ZANO",
                                "total_max_supply": 0
                            },
                            "awaiting_in": 0,
                            "awaiting_out": 0,
                            "total": 0,
                            "unlocked": 0
                        }
                    ],
                    "is_auditable": false,
                    "is_watch_only": false,
                    "mined_total": 0,
                    "path": "E:/home/projects/temp/testnet_wallet.zan",
                    "view_sec_key": "2fae8c8472b43443ba06cdcef456d9b27822e2650d11eb572204663556330b0d"
                }
            },
            {
                "wallet_id": 1,
                "wi": {
                    "address": "ZxDrfTQcvsfiGccJWMTyiUHh9HTuQQffKTRaKgYGMkyrQq2hz4e9GXfiKt6PRLrsr4CPqhF1m6pEpYHTiPcm2Myj1bfXdhkw7",
                    "balances": [
                        {
                            "asset_info": {
                                "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
                                "current_supply": 0,
                                "decimal_point": 12,
                                "full_name": "Zano",
                                "meta_info": "",
                                "owner": "0000000000000000000000000000000000000000000000000000000000000000",
                                "ticker": "ZANO",
                                "total_max_supply": 0
                            },
                            "awaiting_in": 0,
                            "awaiting_out": 0,
                            "total": 0,
                            "unlocked": 0
                        }
                    ],
                    "is_auditable": false,
                    "is_watch_only": false,
                    "mined_total": 0,
                    "path": "E:/home/projects/temp/testnet_wallet2.zan",
                    "view_sec_key": "8651f48f90282d147a7e142c0b3a9cef49fa4a27fad9d69d5c37898ee6af2d0c"
                }
            },
            {
                "wallet_id": 2,
                "wi": {
                    "address": "ZxC3q9Zd6xDKBq8ZrCDiZBap2yLW6FT8g8yxJEkcfYx7Y7GMDKF9g2QAHLNASbmBKS45w5fFa7dmQe67d1UJn9Xp14y51a3Gh",
                    "balances": [
                        {
                            "asset_info": {
                                "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
                                "current_supply": 0,
                                "decimal_point": 12,
                                "full_name": "Zano",
                                "meta_info": "",
                                "owner": "0000000000000000000000000000000000000000000000000000000000000000",
                                "ticker": "ZANO",
                                "total_max_supply": 0
                            },
                            "awaiting_in": 0,
                            "awaiting_out": 0,
                            "total": 0,
                            "unlocked": 0
                        }
                    ],
                    "is_auditable": false,
                    "is_watch_only": false,
                    "mined_total": 0,
                    "path": "E:/home/projects/temp/testnet_wallet3.zan",
                    "view_sec_key": "e9dec77214ae339621ddcba5cc1af9a44103f864ddd0fa8c19c6a0f173ce9c05"
                }
            },
            {
                "wallet_id": 3,
                "wi": {
                    "address": "ZxDhY7J4iZBN7qg5T3KWQeEtMdBtvuGV6DdRvhZxcU4vCNfAE8wctxtCy5u965mtqzVKpGBTo7D9HFcGkXaL4v9F25TXQTQW1",
                    "balances": [
                        {
                            "asset_info": {
                                "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
                                "current_supply": 0,
                                "decimal_point": 12,
                                "full_name": "Zano",
                                "meta_info": "",
                                "owner": "0000000000000000000000000000000000000000000000000000000000000000",
                                "ticker": "ZANO",
                                "total_max_supply": 0
                            },
                            "awaiting_in": 0,
                            "awaiting_out": 0,
                            "total": 0,
                            "unlocked": 0
                        }
                    ],
                    "is_auditable": false,
                    "is_watch_only": false,
                    "mined_total": 0,
                    "path": "E:/home/projects/temp/testnet_wallet5.zan",
                    "view_sec_key": "c419279f71dce7b330f3406d499850b1b38a5dbae724db0ef98a7b36f9ad0800"
                }
            }
        ]
    }
}
```

