Version 3 of the command to retrieve random decoy outputs for specified amounts, focusing on either pre-zarcanum or post-zarcanum zones based on the amount value.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getrandom_outs3",
  "params": {
    "coinbase_percents": 0,
    "height_upper_limit": 0,
    "use_forced_mix_outs": false
}
}
```
### Request description: 
```
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
    "status": "OK"
}
}
```
### Response description: 
```
    "status": Status of the call.

```
