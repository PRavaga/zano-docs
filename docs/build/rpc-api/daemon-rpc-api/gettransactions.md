Retreive transactions by their IDs.

URL: ```http:://127.0.0.1:11211/gettransactions```
### Request: 
```json
{
  "txs_hashes": ["146791c4f5ca94bcf423557e5eb859a3a69991bd33960d52f709d88bf5d1ac6d","ec4d913a40a9ac1fbd9d33b71ef507b5c85d1f503b89096618a18b08991b5171"]
}
```
### Request description: 
```
  "txs_hashes": List of transactions' IDs.

```
### Response: 
```json
{
  "missed_tx": ["ec4d913a40a9ac1fbd9d33b71ef507b5c85d1f503b89096618a18b08991b5171"],
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
