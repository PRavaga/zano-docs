Retrieves a specified portion of all registered aliases, allowing pagination through large sets of aliases.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_aliases",
  "params": {
    "count": 2,
    "offset": 0
  }
}
```
### Request description: 
```
    "count": The number of aliases to retrieve from the specified offset.
    "offset": The offset in the list of all aliases from which to start retrieving.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "aliases": [{
      "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
      "alias": "zxdya6q6whzwqjkmtcsjpc3ku",
      "comment": "Society is never gonna make any progress until we all learn to pretend to like each other.",
      "tracking_key": "18bb94f69ed61b47b6556f3871b89dff8f9a6f4f798f706fd199b05ccf8ef20c"
    },{
      "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
      "alias": "zxdya6q6whzwqjkmtcsjpc3ku",
      "comment": "Society is never gonna make any progress until we all learn to pretend to like each other.",
      "tracking_key": "18bb94f69ed61b47b6556f3871b89dff8f9a6f4f798f706fd199b05ccf8ef20c"
    }],
    "status": "OK"
  }
}
```
### Response description: 
```
    "aliases": List of alias_rpc_details objects, each containing information about an individual alias retrieved based on the request parameters.
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "status": Status of the call.

```
