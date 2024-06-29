Return information about wallet's pre-zarcanum era outputs. Those outputs should be converted to post-zarcanum varian with trnasfering it sooner or later. (Only outputs that have been created in Zarcanum era can participaet in staking)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_bare_outs_stats",
  "params": {
  }
}
```
### Request description: 
```

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "expected_total_fee": 10000000000,
    "total_amount": 12000000000000,
    "total_bare_outs": 112,
    "txs_count": 2
  }
}
```
### Response description: 
```
    "expected_total_fee": Expected total transaction fee required for processing the transaction.
    "total_amount": Total amount of native coins involved in bare outputs.
    "total_bare_outs": Total number of inspent bare outputs in the wallet.
    "txs_count": Total number of transactions needed to convert all bare outputs .

```
