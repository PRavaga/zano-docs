Retrieves a specified portion of all registered aliases, allowing pagination through large sets of aliases.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_aliases",
  "params": {
    "count": 0,
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
    "status": "OK"
}
}
```
### Response description: 
```
    "status": Status of the call.

```
