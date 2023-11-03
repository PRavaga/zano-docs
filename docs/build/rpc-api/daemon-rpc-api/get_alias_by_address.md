### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "get_alias_by_address",
  "params": {
    "address": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf"
  }
}
```

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "alias_info": {
      "address": "ZxDkdqs5U14QJBwtx2MLsxT5xHHKQ4XSwjEXVd7QVZoD4ntEVsS8MVZ9ZnKbEn5iKQ3UepcauqRU5gYU5qo2Ujxw2rseDaUdU",
      "alias": "crypto",
      "comment": "",
      "tracking_key": ""
    },
    "status": "OK"
  }
}
```

### Response information

- address - string; public address associated with requested alias.
- alias - string; alias associated with the provided address
- comment - string; an arbitrary comment set by the owner. Can be empty.
- tracking_key - string; private view key for public address. Can be empty.
