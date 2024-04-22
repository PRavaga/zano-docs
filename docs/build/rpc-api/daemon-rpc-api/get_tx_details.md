Retrieves detailed information about a specific transaction.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_tx_details",
  "params": {
    "tx_hash": ""
}
}
```
### Request description: 
```
    "tx_hash": The hash of the transaction for which detailed information is being requested.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "tx_info": {
      "amount": 0,
      "blob": "",
      "blob_size": 0,
      "fee": 0,
      "id": "",
      "keeper_block": 0,
      "object_in_json": "",
      "pub_key": "",
      "timestamp": 0
}
}
}
```
### Response description: 
```
    "status": Status of the call.
    "tx_info": Detailed information about the transaction.
      "amount": Total output amount of the transaction (legacy, for pre-Zarcanum txs).
      "blob": Serialized form of the transaction, encoded in Base64.
      "blob_size": Size of the serialized transaction in bytes.
      "fee": Transaction fee in the smallest currency unit.
      "id": Hash of the transaction.
      "keeper_block": Block height where the transaction is confirmed, or -1 if it is unconfirmed.
      "object_in_json": Serialized transaction represented in JSON, encoded in Base64.
      "pub_key": Public key associated with the transaction.
      "timestamp": Timestamp when the transaction was created.

```
