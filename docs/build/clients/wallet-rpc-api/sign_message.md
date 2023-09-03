Signes a message with the wallet key

### Request

```json
{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
        "pkey": "a85e688adf2b87e09588f223e9ed67d48cf19b21752a172b973f96b52f289068",
        "sig": "80229d7660ad61a565af8f980cc86723b7a67d5d2f205e5f6895294ed700cd08e4be15bfb00889ad9731d51d7e8687585c2e27c031e214229a3fcc1ce3a17d0d"
    }
}
```

---

### Response

```json
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "sign_message",
  "params": 
  	{
      "buff": "aGFoYWhh",
    }
  }
}' \
 'http://127.0.0.1:12111/json_rpc'
```