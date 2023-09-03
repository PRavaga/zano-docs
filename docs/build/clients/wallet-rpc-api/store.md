Saves wallet update progress into a wallet file. Although progress is always saved upon graceful wallet application termination, with this call a user can manually trigger saving process. Otherwise, in a case of abnormal wallet application termination the progress won’t be saved and it will take some time to synchronize on the next launch.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "store"
}
```

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"wallet_file_size": 13441
	}
}
```

### Response information

- wallet_file_size - size of wallet in KB