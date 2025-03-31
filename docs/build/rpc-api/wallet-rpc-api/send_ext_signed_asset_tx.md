Inserts externally made asset ownership signature into the given transaction and broadcasts it.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "send_ext_signed_asset_tx",
  "params": {
    "eth_sig": "674bb56a5b4fa562e679ccacc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6add697463498a66de4f1760b2cd40f11c3a00a7a8",
    "expected_tx_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "finalized_tx": "ewogICJ2ZXJzaW9uIjogMSwgC....iAgInZpbiI6IFsgewogICAgIC",
    "regular_sig": "674bb56a5b4fa562e679ccacc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6add697463498a66de4f1760b2cd40f11c3a00a7a8",
    "unlock_transfers_on_fail": false,
    "unsigned_tx": "083737bcfd826a973f74bb56a52b4fa562e6579ccaadd2697463498a66de4f1760b2cd40f11c3a00a7a80000"
  }
}
```
### Request description: 
```
    "eth_sig": HEX-encoded ETH signature (64 bytes), used only if regular_sig is empty
    "expected_tx_id": The expected transaction id. Tx won't be sent if the calculated one doesn't match this one. Consider using 'verified_tx_id' returned by 'decrypt_tx_details' call.
    "finalized_tx": Base64-encoded finalized_tx data structure, which was received from emit_asset call.
    "regular_sig": HEX-encoded regular signature (64 bytes)
    "unlock_transfers_on_fail": If true, all locked wallet transfers, corresponding to the transaction, will be unlocked on sending failure. False by default.
    "unsigned_tx": Base64-encoded unsigned transaction blob, which was received from emit_asset call.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "transfers_were_unlocked": false
  }
}
```
### Response description: 
```
    "status": Status of the call
    "transfers_were_unlocked": If true, all input transfers that were locked when preparing this transaction, are now unlocked and may be spent. Can be true only upon sending failure and if requested.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>