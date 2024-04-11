Decode integrated address

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "integrated_address": "iZ2EMyPD7g28hgBfboZeCENaYrHBYZ1bLFi5cgWvn4WJLaxfgs4kqG6cJi9ai2zrXWSCpsvRXit14gKjeijx6YPCLJEv6Fx4rVm1hdAGQFis"
}
}
```
### Request description: 
```
    "integrated_address": Integrated address combining a standard address and payment ID, if applicable.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "payment_id": "1dfe5a88ff9effb3",
    "standard_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"
}
}
```
### Response description: 
```
    "payment_id": Hex-encoded payment id
    "standard_address": Standart address.

```
