Returns the header of the last block in the blockchain.

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "getlastblockheader",
  "params": {
    "depth": 1,
    "difficulty": 1,
    "hash": "",
    "prev_hash": "",
    "height": 1,
    "major_version": 2,
    "minor_version": 2,
    "nonce": 1,
    "orphan_status": true,
    "reward": 1,
    "timestamp": 1
  }
}
```

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": "7420770173471",
      "hash": "5aaa041b0b0f805638a252a6646cfed727c119f38081fda99ceb06cafc00dd7c",
      "height": 2114944,
      "major_version": 2,
      "minor_version": 0,
      "nonce": 3074457348328269179,
      "orphan_status": false,
      "prev_hash": "15e89f8d63b814391d58a103a5314b3d37817e263201d92ab413ee680ea45a95",
      "reward": 1000000000000,
      "timestamp": 1684610354
    },
    "status": "OK"
  }
}
```

### Response information

- depth - unsigned int; distance in blocks from the blockchain top. Always zero for this call.
- difficulty - unsigned int; block difficulty.
- hash - string; block identifier.
- height - unsigned int; block height.
- major_version - unsigned int; major version of a block.
- minor_version - unsigned int; minor version of a block.
- nonce - unsigned int; block nonce.
- orphan_status - boolean; is this block orphan or not? Always false for this call.
- prev_hash -
- reward - unsigned int; how much money this block has generated.
- timestamp - unsigned int; block timestamp.
