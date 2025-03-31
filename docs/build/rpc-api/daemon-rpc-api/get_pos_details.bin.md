Retrieves basic information regarding PoS mining, including current PoS conditions and constraints.

URL: ```http:://127.0.0.1:11211/get_pos_details.bin```
### Request: 
```json
{
}
```
### Request description: 
```

```
### Response: 
```json
{
  "last_block_hash": "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
  "pos_basic_difficulty": "",
  "pos_mining_allowed": false,
  "pos_sequence_factor_is_good": false,
  "sm": "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
  "starter_timestamp": 0,
  "status": "OK"
}
```
### Response description: 
```
  "pos_basic_difficulty": Current PoS difficulty.
  "pos_mining_allowed": Indicates whether PoS mining is currently allowed, which may be restricted under certain blockchain conditions or in testnets.
  "pos_sequence_factor_is_good": Indicates whether the PoS sequence factor is at a level that allows for continued PoS mining, requiring a PoW block to reset if too high.
  "starter_timestamp": Timestamp from which timestamps are evaluated for meeting PoS win condition.
  "status": Status of the call.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub