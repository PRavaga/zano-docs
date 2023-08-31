Creates a template for the next block

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "getblocktemplate",
  "params": {
    "wallet_address": "ZxDbSpgDzyaMecaMUi6orsLimz3M8ptCzYzEuboTdYmwai8xhyATWnkHCt26Ts2kT75ajPGgmDAWR6xdpVBto8Vz1dmQJp8AJ",
    "extra_text": "",
    "pos_block": false,
    "stakeholder_address": "",
    "pos_amount": 2,
    "pos_index": 1
  }
}
```

### Body parameters

- wallet_address - miner's address for receiving newly generated coins
- extra_text - additional text included into miner transaction. Cannot exceed 255 bytes.
- pos_block - specify type of block template to be created: PoS (true) or PoW (false). Default: false.
- stakeholder_address - specify miner's address to which the stake coins used in PoS block generation will be returned.
- pos_amount - amount of an output used as a stake.
- pos_index - global index of an output used as a stake.

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocktemplate_blob": "020000000000000000c0ca345270aba4a14d8aa121bce0e520922e9408617b3fe7d538119dc5501d8200af8ea3a306000101009a8881010180a094a58d1d03c877d75e0c47484beac7fa33cf844230dbfdc5319a1b96ecd6540d23b4e16e1e000416ccff48a0e1aadf652945377b9a22eee97c2b7c0e051afb354425b4cc50451b1215000b0277610ea4888101000000",
    "difficulty": "7192110102967",
    "height": 2114586,
    "prev_hash": "c0ca345270aba4a14d8aa121bce0e520922e9408617b3fe7d538119dc5501d82",
    "seed": "ef86c183c51ed4fb2d1a7eec0a752fb2eeb1731d33ae58cb9bfe54880af23e7b",
    "status": "OK"
  }
}
```

### Response parameters

- blocktemplate_blob- hex-encoded serialized block template.
- difficulty - difficulty for the block template.
- height - height corresponding to the block template.
- prev_hash - previous block hash.
- seed - ethash epoch seed (for mining purposes).
