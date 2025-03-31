Burn some owned amount of the coins for the given asset.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "burn_asset",
  "params": {
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "burn_amount": 10000000,
    "native_amount": 0,
    "point_tx_to_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
    "service_entries": [{
      "body": "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
      "flags": 0,
      "instruction": "K",
      "security": "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
      "service_id": "C"
    }]
  }
}
```
### Request description: 
```
    "asset_id": Id of the asset to burn
    "burn_amount": Amount to burn
    "native_amount": Optional, if we need this transaction to be seen by particular wallet
    "point_tx_to_address": Optional, if we need this transaction to be seen by particular wallet
    "service_entries": Optional, if we need to include service entries for burn transaction
      "body": Hex-encoded body of the attachment
      "flags": Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
      "instruction": Instruction that make sence for this particular service
      "security": Hex-encoded public key of the owner, optional
      "service_id": Service ID, identificator that diferent one service from another

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "tx_id": Id of transaction that carries asset burn operation

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>