Creates a transaction and broadcasts it to the network

### Request

:::caution ㅤ
If you use multiple addresses in destinations field, make sure there are maximum 1 integrated address involved, or, if "payment id" parameter was specified, then integrated addresses are not allowed.
:::

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "transfer",
  "params": {
    "destinations": [
      {
        "amount": 1000000000,
        "address": "ZxCkEgHf3ci8hgBfboZeCENaYrHBYZ1bLFi5cgWvn4WJLaxfgs4kqG6cJi9ai2zrXWSCpsvRXit14gKjeijx6YPC1zT8rneEf"
      }
    ],
    "push_payer": true,
    "hide_receiver": false,
    "service_entries_permanent": false,
    "fee": 1000000000000,
    "mixin": 10,
    "comment": "",
    "service_entries": []
  }
}
```

### Request parameters

- destinations - list of transfer_destination objects (see below); list of recipients with corresponding amount of coins for each.
- fee - transaction fee in atomic units. Minimum: 10^10 atomic units.
- mixin - number of foreign outputs to be mixed in with each input. Increases untraceability. Specify zero for direct and traceable transfers.
- payment_id - hex-encoded payment id. Can be empty if payment ID is not required for this transfer.
- comment - text commentary which follow the transaction in encrypted form and is visible only to the sender and the receiver.
- push_payer - add sender information into transaction, so it will be available for receiver
- hide_receiver - hide receiver information in transaction, if false - it will be available both for sender and receiver to see destinations
---

### Response

```json
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "b329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83b39afc2b",
    "tx_unsigned_hex": ""
  }
}
```

### Response information

- tx_hash - string; hash identifier of the transaction that was successfully sent.
- tx_unsigned_hex - string; hex-encoded unsigned transaction (for watch-only wallets; to be used in cold-signing process).
