Retrieves various information about the blockchain node. The user must specify their needs via a 'flags' field in the request by combining necessary flags using binary OR. Some values are always calculated and provided, others only if the corresponding flag is specified.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getinfo",
  "params": {
    "flags": 1048575
  }
}
```
### Request description: 
```
    "flags": Combination of flags to request specific data elements that are computationally expensive to calculate.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "alias_count": 1653,
    "alt_blocks_count": 99,
    "block_reward": 1000000000000,
    "current_blocks_median": 0,
    "current_max_allowed_block_size": 250000,
    "current_network_hashrate_350": 107939216153,
    "current_network_hashrate_50": 109575236643,
    "daemon_network_state": 2,
    "default_fee": 10000000000,
    "expiration_median_timestamp": 1719585827,
    "grey_peerlist_size": 321,
    "height": 2555000,
    "incoming_connections_count": 0,
    "is_hardfok_active": [true,true,true,true,true,false],
    "last_block_hash": "153af86fd0d7d0a427526258e30505a4d21b8f77261f5276c7669e0a6c83efa0",
    "last_block_size": 0,
    "last_block_timestamp": 1719586493,
    "last_block_total_reward": 0,
    "last_pos_timestamp": 1719585105,
    "last_pow_timestamp": 1719586493,
    "max_net_seen_height": 2555743,
    "mi": {
      "build_no": 0,
      "mode": 0,
      "ver_major": 0,
      "ver_minor": 0,
      "ver_revision": 0
    },
    "minimum_fee": 10000000000,
    "net_time_delta_median": 0,
    "offers_count": 0,
    "outgoing_connections_count": 8,
    "outs_stat": {
      "amount_0": 0,
      "amount_0_001": 0,
      "amount_0_01": 0,
      "amount_0_1": 0,
      "amount_1": 0,
      "amount_10": 0,
      "amount_100": 0,
      "amount_1000": 0,
      "amount_10000": 0,
      "amount_100000": 0,
      "amount_1000000": 0
    },
    "performance_data": {
      "all_txs_insert_time_5": 0,
      "block_processing_time_0": 0,
      "block_processing_time_1": 0,
      "etc_stuff_6": 0,
      "insert_time_4": 0,
      "longhash_calculating_time_3": 0,
      "map_size": 0,
      "raise_block_core_event": 0,
      "target_calculating_calc": 0,
      "target_calculating_enum_blocks": 0,
      "target_calculating_time_2": 0,
      "tx_add_one_tx_time": 0,
      "tx_append_is_expired": 0,
      "tx_append_rl_wait": 0,
      "tx_append_time": 0,
      "tx_check_exist": 0,
      "tx_check_inputs_attachment_check": 0,
      "tx_check_inputs_loop": 0,
      "tx_check_inputs_loop_ch_in_val_sig": 0,
      "tx_check_inputs_loop_kimage_check": 0,
      "tx_check_inputs_loop_scan_outputkeys_get_item_size": 0,
      "tx_check_inputs_loop_scan_outputkeys_loop": 0,
      "tx_check_inputs_loop_scan_outputkeys_loop_find_tx": 0,
      "tx_check_inputs_loop_scan_outputkeys_loop_get_subitem": 0,
      "tx_check_inputs_loop_scan_outputkeys_loop_handle_output": 0,
      "tx_check_inputs_loop_scan_outputkeys_relative_to_absolute": 0,
      "tx_check_inputs_prefix_hash": 0,
      "tx_check_inputs_time": 0,
      "tx_count": 0,
      "tx_mixin_count": 0,
      "tx_prapare_append": 0,
      "tx_print_log": 0,
      "tx_process_attachment": 0,
      "tx_process_extra": 0,
      "tx_process_inputs": 0,
      "tx_push_global_index": 0,
      "tx_store_db": 0,
      "writer_tx_count": 0
    },
    "pos_allowed": true,
    "pos_block_ts_shift_vs_actual": -1387,
    "pos_diff_total_coins_rate": 0,
    "pos_difficulty": "1848455949616658404658",
    "pos_sequence_factor": 0,
    "pow_difficulty": 12777323347117,
    "pow_sequence_factor": 1,
    "seconds_for_10_blocks": 476,
    "seconds_for_30_blocks": 1264,
    "status": "OK",
    "synchronization_start_height": 2555000,
    "synchronized_connections_count": 8,
    "total_coins": "14308874719144585856",
    "transactions_cnt_per_day": 1325,
    "transactions_volume_per_day": 6615220203700000,
    "tx_count": 767742,
    "tx_count_in_last_block": 0,
    "tx_pool_performance_data": {
      "begin_tx_time": 0,
      "check_inputs_time": 0,
      "check_inputs_types_supported_time": 0,
      "check_keyimages_ws_ms_time": 0,
      "db_commit_time": 0,
      "expiration_validate_time": 0,
      "tx_processing_time": 0,
      "update_db_time": 0,
      "validate_alias_time": 0,
      "validate_amount_time": 0
    },
    "tx_pool_size": 0,
    "white_peerlist_size": 12
  }
}
```
### Response description: 
```
    "alias_count": The total number of unique aliases registered on the blockchain. Aliases are alternate, human-readable names associated with addresses.
    "alt_blocks_count": Number of alternative blocks on the blockchain.
    "block_reward": The base block reward that is effective for the next block. Calculated only if either COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY or COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "current_max_allowed_block_size": Current maximum allowed cummulative block size in bytes.
    "current_network_hashrate_350": The PoW hash rate calculated over the last 350 blocks of any type. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_CURRENT_NETWORK_HASHRATE_350 flag is set.
    "current_network_hashrate_50": The PoW hash rate calculated over the last 50 blocks of any type. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_CURRENT_NETWORK_HASHRATE_50 flag is set.
    "daemon_network_state": Current network state of the daemon, which could be connecting, synchronizing, online, loading core, internal error, unloading core, or downloading database.
    "default_fee": Default fee for transactions.
    "expiration_median_timestamp": Median of timestamps of the last N blocks, used to determine the expiration status of transactions. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_EXPIRATIONS_MEDIAN flag is set.
    "grey_peerlist_size": Size of the grey peer list, which includes addresses of nodes with less consistent availability.
    "height": The current size of the blockchain, equal to the height of the top block plus one.
    "incoming_connections_count": Number of incoming P2P connections established by other nodes.
    "is_hardfok_active": A list of boolean values indicating whether each corresponding hardfork is active. For example, a list 'true, true, false' indicates that the first hardfork is activated, while the second is not. Hardfork #0 is always active as it is a stub.
    "last_block_hash": Hash of the last block. Calculated only if either COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY or COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "last_block_size": The size of the last block in bytes. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_LAST_BLOCK_SIZE flag is set.
    "last_block_timestamp": Timestamp of the last block. Calculated only if either COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY or COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "last_block_total_reward": Reward for the last block, including base reward and transaction fees. Calculated only if either COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY or COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "last_pos_timestamp": The timestamp of the most recent PoS block. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_LAST_POS_TIMESTAMP flag is set.
    "last_pow_timestamp": The timestamp of the most recent PoW block. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_LAST_POW_TIMESTAMP flag is set.
    "max_net_seen_height": Maximum blockchain height observed in the network by this node.
    "mi": The most recent mainterner's info.
    "minimum_fee": Minimum fee for transactions.
    "net_time_delta_median": A value of 0 indicates no time synchronization issues, while a value of 1 indicates the presence of time sync issues. Only available if the COMMAND_RPC_GET_INFO_FLAG_NET_TIME_DELTA_MEDIAN flag is set.
    "offers_count": Current number of offers in the offers service. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_PERFORMANCE flag is set.
    "outgoing_connections_count": Number of outgoing P2P connections to other nodes.
    "outs_stat": Statistics for the number of outputs that have a specific amount. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_OUTS_STAT flag is set.
    "performance_data": Detailed technical performance data intended for developers. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_PERFORMANCE flag is set.
    "pos_allowed": Boolean value indicating whether PoS mining is currently allowed based on network rules and state.
    "pos_block_ts_shift_vs_actual": The difference between the timestamp used in the last PoS block for mining purposes and its actual timestamp as stored in the miner's transaction extra data. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_POS_BLOCK_TS_SHIFT_VS_ACTUAL flag is set.
    "pos_diff_total_coins_rate": PoS difficulty divided by the total amount of all coins in the system minus a premined amount (17,517,203). Calculated only if either COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY or COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "pos_difficulty": Current difficulty for Proof of Stake mining.
    "pos_sequence_factor": The current PoS sequence factor, representing the number of consecutive PoS blocks. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_POS_SEQUENCE_FACTOR flag is set.
    "pow_difficulty": Current difficulty for Proof of Work mining.
    "pow_sequence_factor": The current PoW sequence factor, representing the number of consecutive PoW blocks. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_POW_SEQUENCE_FACTOR flag is set.
    "seconds_for_10_blocks": The time period in seconds between the most recent block and the 10th block older. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_SECONDS_FOR_10_BLOCKS flag is set.
    "seconds_for_30_blocks": The time period in seconds between the most recent block and the 30th block older. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_SECONDS_FOR_30_BLOCKS flag is set.
    "status": Status of the call.
    "synchronization_start_height": Blockchain height at which the current synchronization process started. Indicates the starting point for catching up to the network's latest state.
    "synchronized_connections_count": Number of P2P connections to nodes that have a fully synchronized blockchain.
    "total_coins": The total amount of all emitted coins in the system. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flag is set.
    "transactions_cnt_per_day": The number of non-mining transactions recorded over the last 24 hours. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_TRANSACTIONS_DAILY_STAT flag is set.
    "transactions_volume_per_day": The total sum of input amounts from all non-mining transactions over the last 24 hours. Only old bare inputs with explicit amounts are considered. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_TRANSACTIONS_DAILY_STAT flag is set.
    "tx_count": Total number of transactions in the blockchain.
    "tx_count_in_last_block": The number of non-mining transactions in the last block. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_TX_COUNT_IN_LAST_BLOCK flag is set.
    "tx_pool_performance_data": Detailed technical performance data intended for developers. This information is only provided if the COMMAND_RPC_GET_INFO_FLAG_PERFORMANCE flag is set.
    "tx_pool_size": Number of transactions currently in the pool.
    "white_peerlist_size": Size of the white peer list, which includes addresses of reliable nodes.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>