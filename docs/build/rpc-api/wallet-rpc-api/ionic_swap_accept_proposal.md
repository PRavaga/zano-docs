This essential command actually execute proposal that was sent by counter party, by completing and signing transaction template that was in proposal, and sending it to the network.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "hex_raw_proposal": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
}
}
```
### Request description: 
```
    "hex_raw_proposal": Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finialize and sign transaction

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "result_tx_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
}
}
```
### Response description: 
```
    "result_tx_id": Result transaction id

```
