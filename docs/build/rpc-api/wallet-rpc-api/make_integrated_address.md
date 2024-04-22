Generate integrated address

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "make_integrated_address",
  "params": {
    "payment_id": "1dfe5a88ff9effb3"
}
}
```
### Request description: 
```
    "payment_id": Hex-encoded Payment ID to be associated with the this address. If empty then wallet would generate new payment id using system random library

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "integrated_address": "iZ2EMyPD7g28hgBfboZeCENaYrHBYZ1bLFi5cgWvn4WJLaxfgs4kqG6cJi9ai2zrXWSCpsvRXit14gKjeijx6YPCLJEv6Fx4rVm1hdAGQFis",
    "payment_id": "1dfe5a88ff9effb3"
}
}
```
### Response description: 
```
    "integrated_address": Integrated address combining a standard address and payment ID, if applicable.
    "payment_id": Payment ID associated with the this address.

```
