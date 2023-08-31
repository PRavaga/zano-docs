Retrieves the current number of blocks in the longest chain known to this node

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "getblockcount"
}
```

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "count": 2114936,
    "status": "OK"
  }
}
```

### Response information

- count - unsigned integer; total number of blocks in the blockchain, including genesis block at height zero.
