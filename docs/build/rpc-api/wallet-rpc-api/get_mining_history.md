Returns wallet statistic on mining. As an argument 'v' it receive timestamp from which history is reviewed

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "v": 0
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
  "jsonrpc": "",
  "method": "",
  "params": {
    "mined_entries": [{
      "a": 1000000000000,
      "h": 102000,
      "t": 1712683857
}]
}
}
```
### Response description: 
```
    "mined_entries": Mined blocks entries.
      "a": Mined amount(block reward)
      "h": height
      "t": Timestamp

```
