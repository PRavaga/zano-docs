This call is used to validate seed phrase and to fetch additional information about it

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_seed_phrase_info",
  "params": {
    "seed_password": "0101010103",
    "seed_phrase": "girlfriend unlike mutter tightly social silent expect constant bid nowhere reach flower bite salt lightning conversation dog rush quietly become usually midnight each secret offer class"
  }
}
```
### Request description: 
```
    "seed_password": Password used to encrypt or decrypt the mnemonic seed phrase, if applicable.
    "seed_phrase": Mnemonic seed phrase used for wallet recovery or generation.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "address": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf",
    "hash_sum_matched": true,
    "require_password": true,
    "syntax_correct": true,
    "tracking": false
  }
}
```
### Response description: 
```
    "address": Return address of the seed phrase.
    "hash_sum_matched": Indicates whether the hash sum matches.
    "require_password": Indicates whether a password is required.
    "syntax_correct": Indicates whether the syntax is correct.
    "tracking": Indicates whether tracking is enabled.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub