Trivially sign base64 encoded data message using wallet spend key

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "sign_message",
  "params": {
    "buff": "ZGNjc2Ztc2xrZm12O2xrZm12OydlbGtmdm0nbGtmbXY="
  }
}
```
### Request description: 
```
    "buff": base64 encoded data message to be signed

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "pkey": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc",
    "sig": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
  }
}
```
### Response description: 
```
    "pkey": Wallet's public key represented as a hexadecimal string
    "sig": Signature represented as a hexadecimal string

```
