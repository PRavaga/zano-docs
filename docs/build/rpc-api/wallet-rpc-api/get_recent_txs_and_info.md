Fetching recent transactions history

To keep history reading consistent, better to set "**offset**" parameter from last processed tx's "**transfer_internal_index**".  
Below is typical request body:

```json Request body
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "get_recent_txs_and_info",
  "params": {
    "offset": 0,
    "update_provision_info": true,
    "exclude_mining_txs": true,
    "count": 100,
    "order": "FROM_BEGIN_TO_END",
    "exclude_unconfirmed": true
  }
}
```

Request params description:

"**offset**": - internal wallet's index of transfer (every transfer has "**transfer_internal_index**" field, which simply index of transfer).  
"**update_provision_info**": - true if need to update balance (could be disable for performance matters)  
"**exclude_mining_txs**": - filter mining transactions  
"**count**": - number transactions to fetch  
"**order**": - Enumeration direction, could be "FROM_BEGIN_TO_END", "FROM_END_TO_BEGIN"  
"**exclude_unconfirmed**": - true if unconfirmed transactions not needed

```json Response
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "last_item_index": 72,
    "pi": {
      "balance": 2260000000000,
      "curent_height": 1623835,
      "transfer_entries_count": 96,
      "transfers_count": 3,
      "unlocked_balance": 2260000000000
    },
    "total_transfers": 73,
    "transfers": [
      {
        "amount": 1000000000000,
        "comment": "",
        "fee": 10000000000,
        "height": 1131972,
        "is_income": true,
        "is_mining": false,
        "is_mixing": false,
        "is_service": false,
        "payment_id": "",
        "remote_addresses": [
          "ZxCD4JQoUw6MD343aKyJx2Zx44fdkc2r22rwULfcBDrAKyfcqYPNjiFKfnXVyRcHgMLdJLrhmmvN4ViRBDfanhLZ1EdqY8vbk"
        ],
        "show_sender": false,
        "td": {
          "rcv": [
            1000000000000
          ]
        },
        "timestamp": 1625569494,
        "transfer_internal_index": 0,
        "tx_blob_size": 1225,
        "tx_hash": "b4f6335a3d476629448aad0cbb5a56cbd36ea60d00dcfdb79b501d3f2d4abede",
        "tx_type": 0,
        "unlock_time": 0
      },
      {
        "amount": 1000000000000,
        "comment": "",
        "fee": 10000000000,
        "height": 1131972,
        "is_income": true,
        "is_mining": false,
        "is_mixing": false,
        "is_service": false,
        "payment_id": "",
        "remote_addresses": [
          "ZxCD4JQoUw6MD343aKyJx2Zx44fdkc2r22rwULfcBDrAKyfcqYPNjiFKfnXVyRcHgMLdJLrhmmvN4ViRBDfanhLZ1EdqY8vbk"
        ],
        "show_sender": false,
        "td": {
          "rcv": [
            1000000000000
          ]
        },
        "timestamp": 1625569494,
        "transfer_internal_index": 1,
        "tx_blob_size": 1226,
        "tx_hash": "0a7551887a82f893aedfe72aa32189a84743d0044d47b05a5000a2a08ce791a3",
        "tx_type": 0,
        "unlock_time": 0
      },
      {
        "amount": 1000000000000,
        "comment": "",
        "fee": 10000000000,
        "height": 1131972,
        "is_income": true,
        "is_mining": false,
        "is_mixing": false,
        "is_service": false,
        "payment_id": "",
        "remote_addresses": [
          "ZxCD4JQoUw6MD343aKyJx2Zx44fdkc2r22rwULfcBDrAKyfcqYPNjiFKfnXVyRcHgMLdJLrhmmvN4ViRBDfanhLZ1EdqY8vbk"
        ],
        "show_sender": false,
        "td": {
          "rcv": [
            1000000000000
          ]
        },
        ,
        "timestamp": 1625569494,
        "transfer_internal_index": 2,
        "tx_blob_size": 1226,
        "tx_hash": "ff7551887a82f893aedfe72aa32189a84743d0044d47b05a5000a2a08ce791ff",
        "tx_type": 0,
        "unlock_time": 0
      }
    ]
  }
}
```

It is recommended to validate each transfer **height** against **curent_height** in response, to make sure that transfer got needed number of confirmations.

Each next call of the **get_recent_txs_and_info** should be done with "**offset**", taken from last transfer returned from previous call of **get_recent_txs_and_info**, with such call first returned transaction should be the same as it was in previous call, and to make sure that there were no split or chain swithch, the best practice would be to double check that id of the first returned TX from latest call match with id of the last transactions from previous call.

Pseudocode for work with this API might look like this:

```cplusplus
#define NATIVE_CONFIRMATIONS_NEEDED 40
int index_in_wallet = 0;
last_tx_hash = nullhash;
while(true)
{

    req = {};
    req.offset = index_in_wallet;
    req.update_provision_info = true;
    req.exclude_mining_txs = true;
    req.count = BUNCH_OF_TRANSACTIONS_TO_FETCH;
    req.order = ORDER_FROM_BEGIN_TO_END;
    req.exclude_unconfirmed = true;

    get_transactions_history(req, resp);

    //check that last tx match
    if (resp.transfers.size() && last_tx_hash != nullhash  && resp.transfers[0].tx_hash != last_tx_hash)
    {
      //log problems
      return false;
    }

    //regular synchronization
    for (int i = 0; i < resp.transfers.size(); i++)
    {
      if (resp.pi.curent_height - resp.transfers[i].height < NATIVE_CONFIRMATIONS_NEEDED)
      {
        //don't even read blocks with smaller  confirmation ration than expected
        break;
      }

      if (resp.transfers[i].is_income)
      {
        if(resp.transfers[i].payment_id)
        {
            db.increase_user_balance(payment_id, resp.transfers[i].amount);
        }
      }
      last_tx_hash = resp.transfers[0].tx_hash;
      index_in_wallet = resp.transfers[i].transfer_internal_index;
    }
    sleep(10000); //sleep for 10 seconds
}
```
