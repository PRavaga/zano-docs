Obtain basic information about the transaction pool.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_pool_info",
  "params": {
  }
}
```
### Request description: 
```

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "aliases_que": [{
      "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
      "alias": "zxdya6q6whzwqjkmtcsjpc3ku",
      "comment": "Society is never gonna make any progress until we all learn to pretend to like each other.",
      "tracking_key": "18bb94f69ed61b47b6556f3871b89dff8f9a6f4f798f706fd199b05ccf8ef20c"
    }],
    "error_code": "",
    "status": "OK"
  }
}
```
### Response description: 
```
    "aliases_que": List of aliases from txs that are currently in the tx pool.
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "error_code": Error code, if there's any error (optional).
    "status": Status code, OK if succeeded.

```
