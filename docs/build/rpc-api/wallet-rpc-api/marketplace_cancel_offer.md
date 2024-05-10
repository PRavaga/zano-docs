Cancel existing offer that this wallet created(it actually create transaction that says that existing order got canceled)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "marketplace_cancel_offer",
  "params": {
    "fee": 10000000000,
    "no": 0,
    "tx_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d"
}
}
```
### Request description: 
```
    "fee": Fee for operation
    "no": Number of offer entrie inside transacton(likely 0)
    "tx_id": Transaction ID represented as a hexadecimal string

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_blob_size": 1232,
    "tx_hash": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d"
}
}
```
### Response description: 
```
    "tx_blob_size": Size of the transaction blob
    "tx_hash": Transaction hash

```
