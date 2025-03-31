Register an alias for the address

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "register_alias",
  "params": {
    "al": {
      "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
      "alias": "zxdya6q6whzwqjkmtcsjpc3ku",
      "comment": "Society is never gonna make any progress until we all learn to pretend to like each other.",
      "tracking_key": "18bb94f69ed61b47b6556f3871b89dff8f9a6f4f798f706fd199b05ccf8ef20c"
    },
    "authority_key": ""
  }
}
```
### Request description: 
```
    "al": Alias details
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "authority_key": Key for registering aliases shorter than 6 letters (team)

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
  }
}
```
### Response description: 
```
    "tx_id": If success - transactions that performs registration(alias becomes available after few confirmations)

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub