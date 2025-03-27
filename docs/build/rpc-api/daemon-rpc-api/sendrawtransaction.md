Broadcasts a raw transaction encoded in hexadecimal format to the network.

URL: ```http:://127.0.0.1:11211/sendrawtransaction```
### Request: 
```json
{
  "tx_as_hex": "00018ed1535b8b4862e.....368cdc5a86"
}
```
### Request description: 
```
  "tx_as_hex": The transaction data as a hexadecimal string, ready for network broadcast.

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
