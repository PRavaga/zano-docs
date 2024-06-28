Searches for a given ID across various entity types such as blocks, transactions, key images, multisig outputs, and alternative blocks, useful when the entity type is unknown or unspecified.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "search_by_id",
  "params": {
    "id": "729811f9340537e8d5641949e6cc58261f91f109687a706f39bae9514757e819"
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
    "status": "OK",
    "types_found": ["key_image"]
}
}
```
### Response description: 
```
    "status": Status of the call.
    "types_found": List of entity types where the identifier was found.

```
