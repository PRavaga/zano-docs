Validates a Schnorr signature for arbitrary data. The public key for verification is provided directly or retrieved using an associated alias.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "alias": "",
    "buff": "",
    "pkey": "",
    "sig": ""
}
}
```
### Request description: 
```
    "alias": Alias to retrieve the associated public spend key if no explicit public key is provided for verification.
    "buff": Base64 encoded data for which the signature is to be validated.
    "pkey": Public key used for signature verification, encoded as a hexadecimal string. If null or not set, the public key is retrieved using the provided alias.
    "sig": Schnorr signature to validate, encoded as a hexadecimal string.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "status": "OK"
}
}
```
### Response description: 
```
    "status": Status of the call.

```
