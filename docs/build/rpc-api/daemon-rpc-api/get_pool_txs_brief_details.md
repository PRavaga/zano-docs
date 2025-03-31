Retrieves brief details about specific transactions in the transaction pool, identified by their IDs.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_pool_txs_brief_details",
  "params": {
    "ids": ["bd9a89f95c9115d29540c6778dab9d9798eb251143dcd4b8960fcd9730a1471c","1c938f04c935d976310c4338fc570ea20777951471609f3edecb341ea4932b0a"]
  }
}
```
### Request description: 
```
    "ids": List of transaction IDs.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "txs": [{
      "fee": 1000000000,
      "id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8",
      "sz": 6142,
      "total_amount": 9000000000
    }]
  }
}
```
### Response description: 
```
    "status": Status of the call.
    "txs": List of transactions with detailed information.
      "fee": Transaction fee in the smallest currency unit.
      "id": Hash of the transaction.
      "sz": Size of the transaction in bytes.
      "total_amount": Total amount transferred in the transaction (legacy, for pre-Zarcanum txs).

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>