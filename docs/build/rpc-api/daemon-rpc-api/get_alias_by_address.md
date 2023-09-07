Returns alias details by alias address.

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "get_alias_by_address",
    "params": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf"
}
```

---

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "get_alias_by_address",
    "params": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf"
}
```

### Response information

- address - string; public address associated with requested alias.
- alias - string; alias associated with the provided address
- comment - string; an arbitrary comment set by the owner. Can be empty.
- tracking_key - string; private view key for public address. Can be empty.