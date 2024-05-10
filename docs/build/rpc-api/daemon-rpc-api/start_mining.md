Initiates PoW mining process on a node using the specified miner address and the number of CPU threads.

URL: ```http:://127.0.0.1:11211/start_mining```
### Request: 
```json
{
  "miner_address": "",
  "threads_count": 0
}
```
### Request description: 
```
  "miner_address": The address where the mining rewards will be deposited.
  "threads_count": The number of CPU threads to use for mining.

```
### Response: 
```json
{
  "status": "OK"
}
```
### Response description: 
```
  "status": Status of the call.

```
