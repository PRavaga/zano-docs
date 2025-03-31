Validates a Schnorr signature for arbitrary data. The public key for verification is provided directly or retrieved using an associated alias.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "validate_signature",
  "params": {
    "alias": "sowle",
    "buff": "SSBkaWRuJ3QgZXhwZWN0IGFueW9uZSB0byBkZWNyeXB0IHRoaXMgZGF0YSwgc2luY2UgaXQncyBqdXN0IGFuIGV4YW1wbGUuIEJ1dCB5b3UgZGVjcnlwdGVkIGl0ISBJJ20gYW1hemVkLg==",
    "pkey": "",
    "sig": "5c202d4bf82c2dd3c6354e2f02826ca72c797950dbe8db5bc5e3b2e60290a407ac2ef85bfc905ace8fe3b3819217084c00faf7237fee3ad2f6a7f662636cd20f"
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
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub