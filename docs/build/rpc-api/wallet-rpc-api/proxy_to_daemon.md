Proxy call to daemon(node), might be not effective in some cases, so need to be carefull with use of it

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "proxy_to_daemon",
  "params": {
    "base64_body": "ewogICAgImpzb25ycGMiOiAiMi4wIiwKICAgICJpZCI6IDAsCiAgICAibWV0aG9kIjogImdldF9taW5pbmdfaGlzdG9yeSIKfQ==",
    "uri": "\/json_rpc"
  }
}
```
### Request description: 
```
    "base64_body": Base64 encoded request body
    "uri": URI for daemon API

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "base64_body": "ewogICJpZCI6IDAsCiAgImpzb25ycGMiOiAiMi4wIiwKICAicmVzdWx0IjogewogICAgInBheW1lbnRzIjogWwogICAgICB7CiAgICAgICAgInBheW1lbnRfaWQiOiAiMDAwMDAwMDBmZjAwZmYwMCIsCiAgICAgICAgImFtb3VudCI6IDEwMDAwMDAwMCwKICAgICAgICAiYmxvY2tfaGVpZ2h0IjogMjAyNTU2LAogICAgICAgICJ0eF9oYXNoIjogIjAxMjIwZTgzMDRkNDZiOTQwYTg2ZTM4M2Q1NWNhNTg4N2IzNGYxNThhNzM2NWJiY2RkMTdjNWEzMDU4MTRhOTMiLAogICAgICAgICJ1bmxvY2tfdGltZSI6IDAKICAgICAgfSwKICAgICAgewogICAgICAgICJwYXltZW50X2lkIjogIjAwMDAwMDAwZmYwMGZmMDEiLAogICAgICAgICJhbW91bnQiOiAxMDAwMDAwMDAsCiAgICAgICAgImJsb2NrX2hlaWdodCI6IDIwMjU1NiwKICAgICAgICAidHhfaGFzaCI6ICIwYjVlYjk2ODVjMGMxMWRiNzdlMmNkZDk4NzljOGQzYjgxNTUyM2M2ZTRiZjAzZGNlZTYyYzU4M2I3ZTFmNzcyIiwKICAgICAgICAidW5sb2NrX3RpbWUiOiAwCiAgICAgIH0KICAgIF0KICB9Cn0=",
    "response_code": 200
  }
}
```
### Response description: 
```
    "base64_body": Base64 encoded daemon response body
    "response_code": Response code

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub