Search for transacrions in the wallet by few parameters(legacy version)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "search_for_transactions",
  "params": {
    "filter_by_height": true,
    "in": true,
    "max_height": 20000,
    "min_height": 11000,
    "out": true,
    "pool": false,
    "tx_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
  }
}
```
### Request description: 
```
    "filter_by_height": Do filter transactions by height or not.
    "in": Search over incoming transactions.
    "max_height": Maximum height for filtering transactions.
    "min_height": Minimum height for filtering transactions.
    "out": Search over outgoing transactions.
    "pool": Search over pool transactions.
    "tx_id": Transaction ID represented as a hexadecimal string.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "in": [{
      "ado": {
        "operation_type": 1,
        "opt_amount_commitment": "5688b56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
        "opt_asset_id": "cc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6",
        "version": 2
      },
      "amount": 1000000000000,
      "comment": "Comment here",
      "contract": [{
        "cancel_expiration_time": 0,
        "contract_id": "0000000000000000000000000000000000000000000000000000000000000000",
        "expiration_time": 0,
        "height": 0,
        "is_a": false,
        "payment_id": "",
        "private_detailes": {
          "a_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "a_pledge": 0,
          "b_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "b_pledge": 0,
          "c": "",
          "t": "",
          "to_pay": 0
        },
        "state": 0,
        "timestamp": 0
      }],
      "employed_entries": {
      },
      "fee": 10000000000,
      "height": 0,
      "is_income": false,
      "is_mining": false,
      "is_mixing": false,
      "is_service": false,
      "payment_id": "00000000ff00ff00",
      "remote_addresses": ["ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"],
      "remote_aliases": ["roger"],
      "service_entries": [{
        "body": "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
        "flags": 0,
        "instruction": "K",
        "security": "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
        "service_id": "C"
      }],
      "show_sender": false,
      "subtransfers": [{
        "amount": 1000000000000,
        "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
        "is_income": false
      }],
      "timestamp": 1712590951,
      "transfer_internal_index": 12,
      "tx_blob_size": 0,
      "tx_hash": "5509650e12c8f901e6731a2bfaf3abfd64409e3e1366d3d94cd11db8beddb0c3",
      "tx_type": 0,
      "unlock_time": 0
    }],
    "out": [{
      "ado": {
        "operation_type": 1,
        "opt_amount_commitment": "5688b56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
        "opt_asset_id": "cc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6",
        "version": 2
      },
      "amount": 1000000000000,
      "comment": "Comment here",
      "contract": [{
        "cancel_expiration_time": 0,
        "contract_id": "0000000000000000000000000000000000000000000000000000000000000000",
        "expiration_time": 0,
        "height": 0,
        "is_a": false,
        "payment_id": "",
        "private_detailes": {
          "a_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "a_pledge": 0,
          "b_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "b_pledge": 0,
          "c": "",
          "t": "",
          "to_pay": 0
        },
        "state": 0,
        "timestamp": 0
      }],
      "employed_entries": {
      },
      "fee": 10000000000,
      "height": 0,
      "is_income": false,
      "is_mining": false,
      "is_mixing": false,
      "is_service": false,
      "payment_id": "00000000ff00ff00",
      "remote_addresses": ["ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"],
      "remote_aliases": ["roger"],
      "service_entries": [{
        "body": "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
        "flags": 0,
        "instruction": "K",
        "security": "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
        "service_id": "C"
      }],
      "show_sender": false,
      "subtransfers": [{
        "amount": 1000000000000,
        "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
        "is_income": false
      }],
      "timestamp": 1712590951,
      "transfer_internal_index": 12,
      "tx_blob_size": 0,
      "tx_hash": "5509650e12c8f901e6731a2bfaf3abfd64409e3e1366d3d94cd11db8beddb0c3",
      "tx_type": 0,
      "unlock_time": 0
    }],
    "pool": [{
      "ado": {
        "operation_type": 1,
        "opt_amount_commitment": "5688b56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
        "opt_asset_id": "cc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6",
        "version": 2
      },
      "amount": 1000000000000,
      "comment": "Comment here",
      "contract": [{
        "cancel_expiration_time": 0,
        "contract_id": "0000000000000000000000000000000000000000000000000000000000000000",
        "expiration_time": 0,
        "height": 0,
        "is_a": false,
        "payment_id": "",
        "private_detailes": {
          "a_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "a_pledge": 0,
          "b_addr": "ZxBiDtnzhro111111111111111111111111111111111111111111111111111111111111111111111111111111116xzE1X",
          "b_pledge": 0,
          "c": "",
          "t": "",
          "to_pay": 0
        },
        "state": 0,
        "timestamp": 0
      }],
      "employed_entries": {
      },
      "fee": 10000000000,
      "height": 0,
      "is_income": false,
      "is_mining": false,
      "is_mixing": false,
      "is_service": false,
      "payment_id": "00000000ff00ff00",
      "remote_addresses": ["ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"],
      "remote_aliases": ["roger"],
      "service_entries": [{
        "body": "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
        "flags": 0,
        "instruction": "K",
        "security": "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
        "service_id": "C"
      }],
      "show_sender": false,
      "subtransfers": [{
        "amount": 1000000000000,
        "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
        "is_income": false
      }],
      "timestamp": 1712590951,
      "transfer_internal_index": 12,
      "tx_blob_size": 0,
      "tx_hash": "5509650e12c8f901e6731a2bfaf3abfd64409e3e1366d3d94cd11db8beddb0c3",
      "tx_type": 0,
      "unlock_time": 0
    }]
  }
}
```
### Response description: 
```
    "in": List of incoming transactions.
      "ado": "Asset Descriptor Operation" if it was present in transaction
        "operation_type": Asset operation type identifier
        "opt_amount_commitment": (optional) Asset operation amount commitment (register/emit/burn).
        "opt_asset_id": (optional) ID of an asset (emit/burn/update).
        "version": Asset operation type struct version
      "amount": Native coins amount
      "comment": Some human-readable comment
      "contract": Escrow contract if it's part of transaction
      "employed_entries": Mark entries from transaction that was connected to this wallet
      "fee": Transaction fee
      "height": Height of the block that included transaction(0 i  transaction is unconfirmed)
      "is_income": If trnasfer entrie is income (taken from native subtransfer)
      "is_mining": Tells if this transaction is coinbase transaction(ie generated by PoW mining or by PoS staking)
      "is_mixing": Tells if this transaction using mixins or not(auditble wallets normally don't use mixins)
      "is_service": Tells if this transaction is used as utility by one of Zano services(contracts, ionic swaps, etc)
      "payment_id": HEX-encoded payment id blob, if it was present
      "remote_addresses": Remote addresses of this transfer(destination if it's outgoing transfer or sender if it's incoming transaction)
      "remote_aliases": Aliases for remot addresses, of discovered
      "service_entries": Additional entries that might be stored in transaction but not part of it's consensus
        "body": Hex-encoded body of the attachment
        "flags": Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
        "instruction": Instruction that make sence for this particular service
        "security": Hex-encoded public key of the owner, optional
        "service_id": Service ID, identificator that diferent one service from another
      "show_sender": If sender is included in tx
      "subtransfers": Essential part of transfer entry: amounts that been transfered in this transaction grouped by asset id
        "amount": Amount of asset the had been transfered
        "asset_id": Asset id
        "is_income": Indicates if transfer was income our outgoing
      "timestamp": Timestamp of the block that included transaction in blockchain, 0 for unconfirmed
      "transfer_internal_index": Index of this entry in the wallet's array of transaction's history
      "tx_blob_size": Size of transaction in bytes
      "tx_hash": Transaction ID(hash)
      "tx_type": Could be one of this:  GUI_TX_TYPE_NORMAL=0, GUI_TX_TYPE_PUSH_OFFER=1, GUI_TX_TYPE_UPDATE_OFFER=2, GUI_TX_TYPE_CANCEL_OFFER=3, GUI_TX_TYPE_NEW_ALIAS=4,GUI_TX_TYPE_UPDATE_ALIAS=5,GUI_TX_TYPE_COIN_BASE=6,GUI_TX_TYPE_ESCROW_PROPOSAL=7,GUI_TX_TYPE_ESCROW_TRANSFER=8,GUI_TX_TYPE_ESCROW_RELEASE_NORMAL=9,GUI_TX_TYPE_ESCROW_RELEASE_BURN=10,GUI_TX_TYPE_ESCROW_CANCEL_PROPOSAL=11,GUI_TX_TYPE_ESCROW_RELEASE_CANCEL=12,GUI_TX_TYPE_HTLC_DEPOSIT=13,GUI_TX_TYPE_HTLC_REDEEM=14
      "unlock_time": Unlock time of this transfer (if present)
    "out": List of outgoing transactions.
      "ado": "Asset Descriptor Operation" if it was present in transaction
        "operation_type": Asset operation type identifier
        "opt_amount_commitment": (optional) Asset operation amount commitment (register/emit/burn).
        "opt_asset_id": (optional) ID of an asset (emit/burn/update).
        "version": Asset operation type struct version
      "amount": Native coins amount
      "comment": Some human-readable comment
      "contract": Escrow contract if it's part of transaction
      "employed_entries": Mark entries from transaction that was connected to this wallet
      "fee": Transaction fee
      "height": Height of the block that included transaction(0 i  transaction is unconfirmed)
      "is_income": If trnasfer entrie is income (taken from native subtransfer)
      "is_mining": Tells if this transaction is coinbase transaction(ie generated by PoW mining or by PoS staking)
      "is_mixing": Tells if this transaction using mixins or not(auditble wallets normally don't use mixins)
      "is_service": Tells if this transaction is used as utility by one of Zano services(contracts, ionic swaps, etc)
      "payment_id": HEX-encoded payment id blob, if it was present
      "remote_addresses": Remote addresses of this transfer(destination if it's outgoing transfer or sender if it's incoming transaction)
      "remote_aliases": Aliases for remot addresses, of discovered
      "service_entries": Additional entries that might be stored in transaction but not part of it's consensus
        "body": Hex-encoded body of the attachment
        "flags": Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
        "instruction": Instruction that make sence for this particular service
        "security": Hex-encoded public key of the owner, optional
        "service_id": Service ID, identificator that diferent one service from another
      "show_sender": If sender is included in tx
      "subtransfers": Essential part of transfer entry: amounts that been transfered in this transaction grouped by asset id
        "amount": Amount of asset the had been transfered
        "asset_id": Asset id
        "is_income": Indicates if transfer was income our outgoing
      "timestamp": Timestamp of the block that included transaction in blockchain, 0 for unconfirmed
      "transfer_internal_index": Index of this entry in the wallet's array of transaction's history
      "tx_blob_size": Size of transaction in bytes
      "tx_hash": Transaction ID(hash)
      "tx_type": Could be one of this:  GUI_TX_TYPE_NORMAL=0, GUI_TX_TYPE_PUSH_OFFER=1, GUI_TX_TYPE_UPDATE_OFFER=2, GUI_TX_TYPE_CANCEL_OFFER=3, GUI_TX_TYPE_NEW_ALIAS=4,GUI_TX_TYPE_UPDATE_ALIAS=5,GUI_TX_TYPE_COIN_BASE=6,GUI_TX_TYPE_ESCROW_PROPOSAL=7,GUI_TX_TYPE_ESCROW_TRANSFER=8,GUI_TX_TYPE_ESCROW_RELEASE_NORMAL=9,GUI_TX_TYPE_ESCROW_RELEASE_BURN=10,GUI_TX_TYPE_ESCROW_CANCEL_PROPOSAL=11,GUI_TX_TYPE_ESCROW_RELEASE_CANCEL=12,GUI_TX_TYPE_HTLC_DEPOSIT=13,GUI_TX_TYPE_HTLC_REDEEM=14
      "unlock_time": Unlock time of this transfer (if present)
    "pool": List of pool transactions.
      "ado": "Asset Descriptor Operation" if it was present in transaction
        "operation_type": Asset operation type identifier
        "opt_amount_commitment": (optional) Asset operation amount commitment (register/emit/burn).
        "opt_asset_id": (optional) ID of an asset (emit/burn/update).
        "version": Asset operation type struct version
      "amount": Native coins amount
      "comment": Some human-readable comment
      "contract": Escrow contract if it's part of transaction
      "employed_entries": Mark entries from transaction that was connected to this wallet
      "fee": Transaction fee
      "height": Height of the block that included transaction(0 i  transaction is unconfirmed)
      "is_income": If trnasfer entrie is income (taken from native subtransfer)
      "is_mining": Tells if this transaction is coinbase transaction(ie generated by PoW mining or by PoS staking)
      "is_mixing": Tells if this transaction using mixins or not(auditble wallets normally don't use mixins)
      "is_service": Tells if this transaction is used as utility by one of Zano services(contracts, ionic swaps, etc)
      "payment_id": HEX-encoded payment id blob, if it was present
      "remote_addresses": Remote addresses of this transfer(destination if it's outgoing transfer or sender if it's incoming transaction)
      "remote_aliases": Aliases for remot addresses, of discovered
      "service_entries": Additional entries that might be stored in transaction but not part of it's consensus
        "body": Hex-encoded body of the attachment
        "flags": Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
        "instruction": Instruction that make sence for this particular service
        "security": Hex-encoded public key of the owner, optional
        "service_id": Service ID, identificator that diferent one service from another
      "show_sender": If sender is included in tx
      "subtransfers": Essential part of transfer entry: amounts that been transfered in this transaction grouped by asset id
        "amount": Amount of asset the had been transfered
        "asset_id": Asset id
        "is_income": Indicates if transfer was income our outgoing
      "timestamp": Timestamp of the block that included transaction in blockchain, 0 for unconfirmed
      "transfer_internal_index": Index of this entry in the wallet's array of transaction's history
      "tx_blob_size": Size of transaction in bytes
      "tx_hash": Transaction ID(hash)
      "tx_type": Could be one of this:  GUI_TX_TYPE_NORMAL=0, GUI_TX_TYPE_PUSH_OFFER=1, GUI_TX_TYPE_UPDATE_OFFER=2, GUI_TX_TYPE_CANCEL_OFFER=3, GUI_TX_TYPE_NEW_ALIAS=4,GUI_TX_TYPE_UPDATE_ALIAS=5,GUI_TX_TYPE_COIN_BASE=6,GUI_TX_TYPE_ESCROW_PROPOSAL=7,GUI_TX_TYPE_ESCROW_TRANSFER=8,GUI_TX_TYPE_ESCROW_RELEASE_NORMAL=9,GUI_TX_TYPE_ESCROW_RELEASE_BURN=10,GUI_TX_TYPE_ESCROW_CANCEL_PROPOSAL=11,GUI_TX_TYPE_ESCROW_RELEASE_CANCEL=12,GUI_TX_TYPE_HTLC_DEPOSIT=13,GUI_TX_TYPE_HTLC_REDEEM=14
      "unlock_time": Unlock time of this transfer (if present)

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub