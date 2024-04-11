Return wallet seed, which could be password-protected(seed secured with passphrase) or open(unsecured seed). If no password provided it returns open (unsecured) seed. 

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "seed_password": "010101012"
}
}
```
### Request description: 
```
    "seed_password": Password to secure wallet's seed

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "seed_phrase": "girlfriend unlike offer mutter tightly social silent expect constant bid nowhere reach flower bite salt becomeconversation dog rush quietly become usually lightning midnight each secret class"
}
}
```
### Response description: 
```
    "seed_phrase": Wallet's seed(secured with password if it was provided in argument)

```
