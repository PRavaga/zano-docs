Execute transactions needed be convert all bare(pre-zarcanum) outputs to post-zarcanum outputs. (Only outputs that have been created in Zarcanum era can participaet in staking)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "sweep_bare_outs",
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
    "amount_swept": 12000000000000,
    "bare_outs_swept": 112,
    "fee_spent": 10000000000,
    "txs_sent": 2
  }
}
```
### Response description: 
```
    "amount_swept": Amount of native coins swept in the transactions.
    "bare_outs_swept": Number of bare outputs swept in the transactions.
    "fee_spent": Total fee spent on the transactions.
    "txs_sent": Total number of transactions sent.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub