Retrieve random decoy outputs for specified amounts, to be used for mixing in transactions.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getrandom_outs1",
  "params": {
    "decoys_count": 0,
    "height_upper_limit": 0,
    "use_forced_mix_outs": false
}
}
```
### Request description: 
```
    "decoys_count": Number of decoy outputs required for each amount specified.
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
