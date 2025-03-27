Generates ionic swap proposal according to details provided in request, result present as hex-encoded blob, that should be passed to recepient to validate this proposal and executing on it

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "ionic_swap_generate_proposal",
  "params": {
    "destination_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
    "proposal": {
      "fee_paid_by_a": 10000000000,
      "to_finalizer": [{
        "amount": 1000000000000,
        "asset_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
      }],
      "to_initiator": [{
        "amount": 10000000000,
        "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a"
      }]
    }
  }
}
```
### Request description: 
```
    "destination_address": Destination address
    "proposal": Proposal details
      "fee_paid_by_a": Fee paid by party A(initiator)
      "to_finalizer": Assets sent to the finalizer
      "to_initiator": Assets sent to the initiator

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "hex_raw_proposal": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
  }
}
```
### Response description: 
```
    "hex_raw_proposal": Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finialize and sign transaction

```
