Decrypts transaction private information. Should be used only with your own local daemon for security reasons.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "decrypt_tx_details",
  "params": {
    "outputs_addresses": ["ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf","ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"],
    "tx_blob": "ewogICJ2ZXJzaW9uIjogMSwgC....iAgInZpbiI6IFsgewogICAgIC",
    "tx_id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8",
    "tx_secret_key": "2e0b840e70dba386effd64c5d988622dea8c064040566e6bf035034cbb54a5c08"
  }
}
```
### Request description: 
```
    "outputs_addresses": Address of each of tx's output. Order is important and should correspond to order of tx's outputs. Empty strings are ignored.
    "tx_blob": [or] base64-encoded or hex-encoded tx blob. Can be ommited if tx_id is provided.
    "tx_id": [either] ID for a transaction if it is already in the blockchain. Can be ommited if tx_blob is provided.
    "tx_secret_key": Hex-encoded transaction secret key.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "decoded_outputs": [{
      "address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
      "amount": 10000000000000,
      "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
      "out_index": 1
    }],
    "status": "OK",
    "tx_in_json": "ewogICJ2ZXJzaW9uIjogMSwgC....iAgInZpbiI6IFsgewogICAgIC",
    "verified_tx_id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8"
  }
}
```
### Response description: 
```
    "decoded_outputs": Transaction's decoded outputs
      "address": Destination address.
      "amount": Amount begin transferred.
      "asset_id": Asset id.
      "out_index": Index of the corresponding output in the transaction.
    "status": Status code of operation, OK if success
    "tx_in_json": Serialized transaction represented in JSON, encoded in Base64.
    "verified_tx_id": (Re)calculated transaction id. Can be used in third-party proof generation.

```
