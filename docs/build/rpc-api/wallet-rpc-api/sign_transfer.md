Sign transaction with the wallet's keys

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "sign_transfer",
  "params": {
    "tx_unsigned_hex": "8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a736"
  }
}
```
### Request description: 
```
    "tx_unsigned_hex": Unsigned transaction hex-encoded blob.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
    "tx_signed_hex": "8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a736"
  }
}
```
### Response description: 
```
    "tx_hash": Signed transaction hash.
    "tx_signed_hex": Signed transaction hex-encoded blob.

```
