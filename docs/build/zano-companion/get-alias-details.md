# Get Alias Details

Gets common info of specified alias. Proxy of [get_alias_details](/docs/build/rpc-api/daemon-rpc-api/get_alias_details/) method.

In your web app, call extension Get Alias Details method, while extension is on.

### Request

```jsx
window.zano.request(
    'GET_ALIAS_DETAILS', 
    {
        alias: ""
    }
);
```

where:

- alias - alias of the request

### Response

```json
{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
        "alias_details": {
            "address": "",
            "comment": "",
            "tracking_key": ""
        },
        "status": "OK"
    }
}
```

where:

- "alias_details": Contains the detailed information about the specified alias, including the associated wallet address, tracking key, comment etc..
- "address": Address of the alias.
- "comment": Arbitrary comment (optional).
- "tracking_key": View secret key of the corresponding address (optional).
- "status": Status of the call.