Retrieves detailed information about a specific transaction.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_tx_details",
  "params": {
    "tx_hash": "d46c415c3aa3f3e17bd0bf85ffb813cacf4d9595d2d5392f42dacbaffcffdc70"
  }
}
```
### Request description: 
```
    "tx_hash": The hash of the transaction for which detailed information is being requested.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "tx_info": {
      "amount": 18999000000000,
      "attachments": [{
        "details_view": "",
        "short_view": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
        "type": "pub_key"
      }],
      "blob": "ARMBgKCUpY0dBBoAAAAAAAAAABoCAAAAAAAAABoKAAAAAAAAABoPAAAAAAAAACVA4FRLH",
      "blob_size": 6794,
      "extra": [{
        "details_view": "",
        "short_view": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
        "type": "pub_key"
      }],
      "fee": 1000000000,
      "id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8",
      "ins": [{
        "amount": 1000000000000,
        "global_indexes": [0,2,12,27],
        "htlc_origin": "",
        "kimage_or_ms_id": "2540e0544b1fed3b104976f803dbd83681335c427f9d601d9d5aecf86ef276d2",
        "multisig_count": 0
      }],
      "keeper_block": 51,
      "object_in_json": "ewogICJ2ZXJzaW9uIjogMSwgCiAgInZpbiI6IFsgewogICAgIC",
      "outs": [{
        "amount": 9000000000,
        "global_index": 0,
        "is_spent": false,
        "minimum_sigs": 0,
        "pub_keys": ["7d0c755e7e24a241847176c9a3cf4c970bcd6377018068abe6fe4535b23f5323"]
      }],
      "pub_key": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
      "timestamp": 1557345925
    }
  }
}
```
### Response description: 
```
    "status": Status of the call.
    "tx_info": Detailed information about the transaction.
      "amount": Total output amount of the transaction (legacy, for pre-Zarcanum txs).
      "attachments": Additional attachments to the transaction.
        "details_view": A detailed representation of the extra entry.
        "short_view": A concise representation of the extra entry.
        "type": Type of the extra entry in the transaction.
      "blob": Serialized form of the transaction, encoded in Base64.
      "blob_size": Size of the serialized transaction in bytes.
      "extra": Extra data associated with the transaction.
        "details_view": A detailed representation of the extra entry.
        "short_view": A concise representation of the extra entry.
        "type": Type of the extra entry in the transaction.
      "fee": Transaction fee in the smallest currency unit.
      "id": Hash of the transaction.
      "ins": Inputs of the transaction.
        "amount": The amount of coins being transacted.
        "global_indexes": List of global indexes indicating the outputs referenced by this input, where only one is actually being spent.
        "htlc_origin": Origin hash for HTLC (Hash Time Locked Contract).
        "kimage_or_ms_id": Contains either the key image for the input or the multisig output ID, depending on the input type.
        "multisig_count": Number of multisig signatures used, relevant only for multisig outputs.
      "keeper_block": Block height where the transaction is confirmed, or -1 if it is unconfirmed.
      "object_in_json": Serialized transaction represented in JSON, encoded in Base64.
      "outs": Outputs of the transaction.
        "amount": The output's amount, 0 for ZC outputs.
        "global_index": Global index of the output for this specific amount.
        "is_spent": Indicates whether the output has been spent.
        "minimum_sigs": Minimum number of signatures required to spend the output, for multisig outputs only.
        "pub_keys": List of public keys associated with the output.
      "pub_key": Public key associated with the transaction.
      "timestamp": Timestamp when the transaction was created.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>