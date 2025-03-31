Get votes' results from the given block range.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_votes",
  "params": {
    "h_end": 40000,
    "h_start": 0
  }
}
```
### Request description: 
```
    "h_end": End of the block range to serach in (excluding).
    "h_start": Start of the block range to search in (including).

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "error_code": "",
    "status": "OK",
    "votes": {
      "total_pos_blocks": 87482,
      "votes": [{
        "no": 37,
        "proposal_id": "ZAP999",
        "yes": 42
      },{
        "no": 37,
        "proposal_id": "ZAP999",
        "yes": 42
      }]
    }
  }
}
```
### Response description: 
```
    "error_code": Error code, if any.
    "status": Status of the call.
    "votes": Found votes in the given range.
      "total_pos_blocks": Number of blocks in a given range.
      "votes": Result of votes in a given range.
        "no": Number of negative votes.
        "proposal_id": ID of the proposal.
        "yes": Nubmer of positve votes.
        "no": Number of negative votes.
        "proposal_id": ID of the proposal.
        "yes": Nubmer of positve votes.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>