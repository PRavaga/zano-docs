Trivially encrypt base64 encoded data message with chacha using wallet spend key

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "encrypt_data",
  "params": {
    "buff": "ZGNjc2Ztc2xrZm12O2xrZm12OydlbGtmdm0nbGtmbXY="
}
}
```
### Request description: 
```
    "buff": base64 encoded data message to be encrypted

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "res_buff": "ZGNjc2Ztc2xrZm12O2xrZm12OydlbGtmdm0nbGtmbXY="
}
}
```
### Response description: 
```
    "res_buff": base64 encoded resulted data message

```
