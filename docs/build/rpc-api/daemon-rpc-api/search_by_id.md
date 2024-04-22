Searches for a given ID across various entity types such as blocks, transactions, key images, multisig outputs, and alternative blocks, useful when the entity type is unknown or unspecified.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "search_by_id",
  "params": {
    "id": ""
}
}
```
### Request description: 
```
    "id": The identifier used to search across various types of entities.

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
