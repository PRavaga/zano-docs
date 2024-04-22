Retrieves information about a specific address alias.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alias_details",
  "params": {
    "alias": ""
}
}
```
### Request description: 
```
    "alias": The alias name for which details are being requested.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "alias_details": {
      "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
      "comment": "Society is never gonna make any progress until we all learn to pretend to like each other.",
      "tracking_key": "18bb94f69ed61b47b6556f3871b89dff8f9a6f4f798f706fd199b05ccf8ef20c"
},
    "status": "OK"
}
}
```
### Response description: 
```
    "alias_details": Contains the detailed information about the specified alias, including the associated wallet address, tracking key, comment etc..
      "address": Address of the alias.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "status": Status of the call.

```
