Relay signed transaction over the network

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "submit_transfer",
  "params": {
    "tx_signed_hex": "8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a736"
  }
}
```
### Request description: 
```
    "tx_signed_hex": Signed transaction hex-encoded blob.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93"
  }
}
```
### Response description: 
```
    "tx_hash": Signed transaction hash.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub