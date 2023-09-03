

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "getinfo",
	"params": {
		"flags": 1
	}
}
```
### Reponse parameters

- flags -

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"alias_count": 1241,
		"alt_blocks_count": 0,
		"block_reward": 1000000000000,
		"current_blocks_median": 125000,
		"current_max_allowed_block_size": 250000,
		"current_network_hashrate_350": 0,
		"current_network_hashrate_50": 0,
		"daemon_network_state": 2,
		"default_fee": 10000000000,
		"expiration_median_timestamp": 0,
		"grey_peerlist_size": 351,
		"height": 2116212,
		"incoming_connections_count": 3,
		"last_block_hash": "93e27dcc1cf28962fe38561f09719a20766df0a888d57700ea1a86be9f605256",
		"last_block_size": 0,
		"last_block_timestamp": 1684684006,
		"last_block_total_reward": 1000000000000,
		"last_pos_timestamp": 0,
		"last_pow_timestamp": 0,
		"max_net_seen_height": 2116208,
		"mi": {
			"build_no": 121,
			"mode": 0,
			"ver_major": 1,
			"ver_minor": 2,
			"ver_revision": 0
		},
		"minimum_fee": 10000000000,
		"net_time_delta_median": 0,
		"offers_count": 0,
		"outgoing_connections_count": 8,
		"outs_stat": {
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
		"pos_block_ts_shift_vs_actual": 0,
		"pos_diff_total_coins_rate": 0,
		"pos_difficulty": "2091093243540034788799",
		"pos_sequence_factor": 0,
		"pow_difficulty": 7499957992531,
		"pow_sequence_factor": 0,
		"seconds_for_10_blocks": 0,
		"seconds_for_30_blocks": 0,
		"status": "OK",
		"synchronization_start_height": 2116099,
		"synchronized_connections_count": 11,
		"total_coins": "",
		"transactions_cnt_per_day": 0,
		"transactions_volume_per_day": 0,
		"tx_count": 557235,
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
		"tx_pool_size": 1,
		"white_peerlist_size": 21
	}
}
```

- alias_count — unsigned int; number of total aliases registered.
- alt_blocks_count — unsigned int; number of alternative blocks known to this node.
- block_reward — unsigned int; base block reward for the next block (excluding fees and txs size penalty). Calculated only if both COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY and COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flags are present.
- current_blocks_median — unsigned int; median of cumulative block sizes for the recent N blocks.
- current_max_allowed_block_size — unsigned int; maximum allowed cumulative size of a block in bytes.
- current_network_hashrate_350 — unsigned int; network hashrate calculated by difficulty within a window of the last 350 blocks. Calculated only if COMMAND_RPC_GET_INFO_FLAG_CURRENT_NETWORK_HASHRATE_350 flag is present.
- current_network_hashrate_50 — unsigned int; the same as above for last 50 blocks. Calculated only if COMMAND_RPC_GET_INFO_FLAG_CURRENT_NETWORK_HASHRATE_50 flag is present.
- daemon_network_state — unsigned int; current daemon state. Possible values and their meaning: <br />
  daemon_network_state_connecting = 0, <br />
  daemon_network_state_synchronizing = 1, <br />
  daemon_network_state_online = 2, <br />
  daemon_network_state_loading_core = 3, <br />
  daemon_network_state_internal_error = 4, <br />
  daemon_network_state_unloading_core = 5 <br />
- default_fee — unsigned int; current default fee.
- grey_peerlist_size — unsigned int; number of peers in the gray list (these are peers received from another node and this node has not yet attempted to connect to them).
- height — unsigned int; number of blocks in the main chain.
- incoming_connections_count — unsigned int; number of incoming P2P connections.
- last_block_size — unsigned int; cumulative size of the last block. Returned only if COMMAND_RPC_GET_INFO_FLAG_LAST_BLOCK_SIZE flag is present.
- last_block_total_reward — unsigned int; actual reward for the last block. Calculated only if both COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY and COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flags are present.
- last_pos_timestamp — unsigned int; timestamp of the last PoS block in the main chain. Calculated only if COMMAND_RPC_GET_INFO_FLAG_LAST_POS_TIMESTAMP flag is present.
- last_pow_timestamp — unsigned int; timestamp of the last PoW block in the main chain. Calculated only if COMMAND_RPC_GET_INFO_FLAG_LAST_POW_TIMESTAMP flag is present.
- max_net_seen_height — unsigned int; size of the longest chain among this node’s peers.
- mi — object; the last received maintainer info message with recommended build versions from project maintainers. See below detailed description of maintainers_info_external object.
- minimum_fee — unsigned int; current tx fee minimum required by tx pool.
- net_time_delta_median — signed int; median of system time differences among this node’s peers. Calculated only if COMMAND_RPC_GET_INFO_FLAG_NET_TIME_DELTA_MEDIAN flag is present.
- offers_count — unsigned int; total number of market offers known to this node. Calculated only if COMMAND_RPC_GET_INFO_FLAG_PERFORMANCE flag is present and no --disable-market CLI option was specified.
- outgoing_connections_count — unsigned int; number of outgoing P2P connections.
- outs_stat — object; brief output statistics.
- pos_allowed — boolean; false if PoS blocks cannot be accepted yet, otherwise — true.
- pos_block_ts_shift_vs_actual — signed int; the difference between the block timestamp and actual block timestamp for the last PoS block in the main chain. Calculated only if COMMAND_RPC_GET_INFO_FLAG_POS_BLOCK_TS_SHIFT_VS_ACTUAL flag is present.
- pos_diff_total_coins_rate — unsigned int; current ratio of PoS difficulty to total coins mined. Calculated only if both COMMAND_RPC_GET_INFO_FLAG_POS_DIFFICULTY and COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS flags are present.
- pos_difficulty — unsigned int; difficulty for the next PoS block.
- pos_sequence_factor — unsigned int; size of a continuous sequence of PoS blocks starting from the top block. Calculated only if COMMAND_RPC_GET_INFO_FLAG_POS_SEQUENCE_FACTOR flag is present.
- pow_difficulty — unsigned int; difficulty for the next PoW block.
- pow_sequence_factor — unsigned int; size of a continuous sequence of PoW blocks starting from the top block. (Required flag: COMMAND_RPC_GET_INFO_FLAG_POW_SEQUENcE_FACTOR)
- seconds_for_10_blocks — unsigned int; timestamp difference between the top block and the 10th from the top. (Required flag: - COMMAND_RPC_GET_INFO_FLAG_SECONDS_FOR_10_BLOCKS)
- seconds_for_30_blocks — unsigned int; timestamp difference between the top block and the 30th from the top. (Required flag: COMMAND_RPC_GET_INFO_FLAG_SECONDS_FOR_30_BLOCKS)
- synchronization_start_height — unsigned int; size of the local blockchain when the synchronization process started for the first time after daemon start.
- synchronized_connections_count — unsigned int; number of synchronized peers.
- total_coins — unsigned int; number of emitted coins. (Required flag: COMMAND_RPC_GET_INFO_FLAG_TOTAL_COINS)
- transactions_cnt_per_day — unsigned int; number of non-coinbase transactions for the last 24 hours. (Required flag: COMMAND_RPC_GET_INFO_FLAG_TRANSACTIONS_DAILY_STAT)
- transactions_volume_per_day — unsigned int; total amount of non-miner transactions for the last 24 hours. (Required flag: COMMAND_RPC_GET_INFO_FLAG_TRANSACTIONS_DAILY_STAT)
- tx_count — unsigned int; total number of all non-coinbase transactions.
- tx_count_in_last_block — unsigned int; number of non-coinbase transactions in the last block. (Required flag: COMMAND_RPC_GET_INFO_FLAG_TX_COUNT_IN_LAST_BLOCK)
- tx_pool_size — unsigned int; number of transactions in the tx pool.
- white_peerlist_size — unsigned int; number of peers in the white list (total number of peers to which this node has ever been connected).

#### Fields of maintainers_info_external object:

- ver_major — unsigned int; major build version from project maintainers.
- ver_minor — unsigned int; minor build version from project maintainers.
- ver_revision — unsigned int; revision build version from project maintainers.
- mode — unsigned int; maintainers info message type: <br />
    #define ALERT_TYPE_CALM 1 <br />
    #define ALERT_TYPE_URGENT 2 <br />
    #define ALERT_TYPE_CRITICAL 3 <br />