[Multiassets] Selects active wallet for further RPC calls

### Request

```json
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "mw_select_wallet",
  "params": {"wallet_id": 0}
  }
}' \
 'http://127.0.0.1:12111/json_rpc'
```

---

### Response 

```json
{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
        "status": "OK"
    }
}
```