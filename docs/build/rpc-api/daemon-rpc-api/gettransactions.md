Retreive transactions by their IDs.

URL: ```http:://127.0.0.1:11211/gettransactions```
### Request: 
```json
{
}
```
### Request description: 
```

```
### Response: 
```json
{
  "missed_tx": ["97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"],
  "status": "OK",
  "txs_as_hex": ["7d914497d91442f8f3c2268397d914497d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc2f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"]
}
```
### Response description: 
```
  "missed_tx": Missed transactions hashes
  "status": Status of the call.
  "txs_as_hex": Transactions stored as blobs

```
