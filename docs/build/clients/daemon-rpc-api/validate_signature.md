

### Request

```json
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "validate_signature",
  "params": 
  	{
      "buff": "aGFoYWhh",
      "alias": "ravaga"
      "pkey": "",
			"sig": "80229d7660ad61a565af8f980cc86723b7a67d5d2f205e5f6895294ed700cd08e4be15bfb00889ad9731d51d7e8687585c2e27c031e214229a3fcc1ce3a17d0d"
    }
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