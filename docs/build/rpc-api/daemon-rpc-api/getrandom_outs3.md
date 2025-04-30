Version 3 of the command to retrieve random decoy outputs for specified amounts, focusing on either pre-zarcanum or post-zarcanum zones based on the amount value.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getrandom_outs3",
  "params": {
    "amounts": [{
      "amount": 0,
      "global_offsets": [1,3,5928,2811]
    }],
    "coinbase_percents": 15,
    "height_upper_limit": 2555000,
    "use_forced_mix_outs": false
  }
}
```
### Request description: 
```
    "amounts": List of amount distributions specifying where to look for decoys, based on old bare outputs or ZC outputs.
      "amount": If set to 0, only ZC outputs are considered. If nonzero, only old bare outputs are considered.
      "global_offsets": List of global indices for picking decoys. Each index corresponds to a potential decoy output.
    "coinbase_percents": Specifies the estimated percentage of coinbase outputs to be included in the decoy sets, ranging from 0 to 100.
    "height_upper_limit": Maximum blockchain height from which decoys can be taken. If nonzero, decoys must be at this height or older.
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
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>