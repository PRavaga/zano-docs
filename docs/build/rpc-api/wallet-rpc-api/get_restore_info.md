### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "get_restore_info",
  "params": {
    "seed_password": "12345"
  }
}
```

seed_password - string; password for seed phrase, is the optional parameter that is used to encrypt the seed phrase. If you're using it make sure to save it, otherwise you will not be able to restore your wallet.

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "seed_phrase": "word1 word2 word3.....word25"
  }
}
```
