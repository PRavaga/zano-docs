Retrieve random decoy outputs for specified amounts, to be used for mixing in transactions.

URL: ```http:://127.0.0.1:11211/getrandom_outs1.bin```
### Request: 
```json
{
  "amounts": [0,10000000000,5000000000000],
  "decoys_count": 10,
  "height_upper_limit": 2555000,
  "use_forced_mix_outs": false
}
```
### Request description: 
```
  "amounts": List of amounts for which decoy outputs are requested.
  "decoys_count": Number of decoy outputs required for each amount specified.
  "height_upper_limit": Maximum blockchain height from which decoys can be taken. If nonzero, decoys must be at this height or older.
  "use_forced_mix_outs": If true, only outputs with a 'mix_attr' greater than 0 are used as decoys.

```
### Response: 
```json
{
  "outs": [{
    "amount": 10000000000
  }],
  "status": "OK"
}
```
### Response description: 
```
  "outs": List of 'outs_for_amount' structures, each containing decoys for a specific amount.
    "amount": The amount for which decoys are returned.
  "status": Status of the call.

```
