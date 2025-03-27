Retrieve random decoy outputs for specified amounts (legacy format).

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getrandom_outs",
  "params": {
    "amounts": [0,10000000000],
    "outs_count": 2,
    "use_forced_mix_outs": false
  }
}
```
### Request description: 
```
    "amounts": List of amounts for which decoy outputs are requested.
    "outs_count": Number of decoy outputs requested for each amount.
    "use_forced_mix_outs": If true, only outputs with a 'mix_attr' greater than 0 are used as decoys.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "outs": [{
      "amount": 10000000000
    }],
    "status": "OK"
  }
}
```
### Response description: 
```
    "outs": List of 'outs_for_amount' structures, each containing decoys for a specific amount.
      "amount": The amount for which decoys are returned.
    "status": Status of the call.

```
