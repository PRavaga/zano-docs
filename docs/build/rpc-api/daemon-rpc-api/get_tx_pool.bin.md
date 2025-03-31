Retreives transactions from tx pool (and other information).

URL: ```http:://127.0.0.1:11211/get_tx_pool.bin```
### Request: 
```json
{
}
```
### Request description: 
```

```
### Response: 
```json
{
  "status": "OK",
  "tx_expiration_ts_median": 1711021795,
  "txs": ["7d914497d91442f8f3c2268397d914497d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc2f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"]
}
```
### Response description: 
```
  "status": Status of the call.
  "tx_expiration_ts_median": Timestamp median value of last TX_EXPIRATION_TIMESTAMP_CHECK_WINDOW blocks.
  "txs": Transactions as blobs.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub