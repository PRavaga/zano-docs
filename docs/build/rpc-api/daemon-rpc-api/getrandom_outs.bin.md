Retrieve random decoy outputs for specified amounts (legacy format).

URL: ```http:://127.0.0.1:11211/getrandom_outs.bin```
### Request: 
```json
{
  "outs_count": 0,
  "use_forced_mix_outs": false
}
```
### Request description: 
```
  "outs_count": Number of decoy outputs requested for each amount.
  "use_forced_mix_outs": If true, only outputs with a 'mix_attr' greater than 0 are used as decoys.

```
### Response: 
```json
{
  "status": "OK"
}
```
### Response description: 
```
  "status": Status of the call.

```
