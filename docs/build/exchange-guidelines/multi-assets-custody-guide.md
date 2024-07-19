



# Zano exchange integration full guide

## Table of Contents
  * [Introduction](#introduction)
  * [Creating a Wallet](#creating-a-wallet)
  * [Seed phrase backup](#seed-phrase-backup)
  * [Receiving Money with Payment ID](#receiving-money-with-payment-id)
  * [Processing Incoming Transactions](#processing-incoming-transactions)
  * [Requesting Wallet Balance](#requesting-wallet-balance)
  * [Searching for Transactions in the Wallet](#searching-for-transactions-in-the-wallet)
  * [Transfer Coins](#transfer-coins)
  * [Legacy methods](#legacy-methods)


## Introduction
Zano is a privacy-oriented blockchain from the CryptoNote family, which makes working with the wallet somewhat different from traditional blockchains like Bitcoin or Ethereum. In this article, we will show how to work with the wallet and how to build multi-user custody on it.

Architecturally, Zano consists of two modules - a **full node(daemon)** and a **wallet**. Both of these modules provide their own RPC API. Therefore, when you set up Zano on your server, you compile the **full node** (make target “**daemon**”, executable name **zanod**) and the console wallet (**simplewallet**), and run both, so that the wallet can connect to the full node through the RPC API via localhost (For security reasons, it is highly recommended to use ONLY your own full node).

Thus, the RPC API in Zano is divided into two parts - the DAEMON RPC API and the WALLET RPC API. This is due to the fact that, unlike EVM or Bitcoin networks, you cannot simply request the balance of a specific address from the Zano node. To get the balance of a specific address, you need to know its secret key and perform computationally complex operations. Therefore, there is a process of synchronizing the wallet with the daemon. If you have a wallet created, for example, a year or two ago and you haven't opened it for a long time or have restored it, the synchronization process may take some time. If the wallet was online a few days ago, the synchronization happens quickly - less than a minute.

Zano is a platform where anyone can deploy their own asset, which will have the same privacy features as Zano itself. Such assets are called **Confidential Assets**. Support for Confidential Assets is reflected in the API documentation and in this manual. Each asset has an identifier (**asset_id**), and only this asset_id identify this specific asset. All other attributes of the asset may match similar attributes of other assets


## Creating a Wallet
To create a new wallet, you need to run the following command (you will be prompted to enter a new password for the wallet; do not use simple passwords and make sure to remember this password):


    ~/zano/build # src/simplewallet --generate-new-wallet=custody_wallet.zan
    Zano simplewallet v2.0.0.333
    password: *******
    Generated new wallet: ZxCk74TxaFsRvbHrvebi5fgBLXDWukJ3VRXk6PENQ4orUTRfh11EHjCgCBxokeg5FEPHumvqJ76ikKHnD43iGjsE1cVfgebFa
    view key: f665686bbc719569e9f6c1e36058dcda011ddd55a584443b64c1e7bca5bbdd04    
    **********************************************************************
    Your wallet has been generated.
    **********************************************************************

A wallet can operate in two modes - command line interface mode, when it is started only with the **--wallet-file** parameter, or RPC server mode, when in addition it has the **--rpc-bind-port=port_number** parameter. When the wallet is in command line mode, you can do various commands to it, such as **transfer** or **deploy_new_asset**, and thus work with the wallet. You can view the list of commands by typing **help** in command line mode.

## Seed phrase backup  
After you have created a new wallet, run it in command line mode to save the seed phrase:

    src/simplewallet --wallet-file=custody_wallet.zan
    Zano simplewallet v2.0.0.333
    password: *******
    Opened wallet: ZxCk74TxaFsRvbHrvebi5fgBLXDWukJ3VRXk6PENQ4orUTRfh11EHjCgCBxokeg5FEPHumvqJ76ikKHnD43iGjsE1cVfgebFa
    **********************************************************************
    Use "help" command to see the list of available commands.
    **********************************************************************
    Starting refresh...
    Refresh done, blocks received: 1440
     balance unlocked      / [balance total]        ticker   asset id
     0.0                                            ZANO     d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a
     [Zano wallet ZxCk74]:


After the wallet has synchronized, enter the command **show_seed**. First, the wallet will ask for its own password for security reasons (the one you specified when creating the wallet). After this, you will be prompted to enter a special password that will protect your seed phrase. ([More about Secure Seed](https://docs.zano.org/docs/use/seed-phrase/)) If you leave this password empty, an unprotected seed phrase will be generated, and anyone who gains access to the seed phrase will be able to control all assets.

    [Zano wallet ZxCk74]: show_seed
    Enter password to confirm operation:
    *****
    Please enter a password to secure this seed. Securing your seed is HIGHLY recommended. Leave password blank to stay unsecured.
    Remember, restoring a wallet from Secured Seed can only be done if you know its password.
    Enter seed password: **********
    Confirm seed password: **********
    heart eat cost little goodbye arrive commit dreamer stick  reason freeze left okay cousin frustrate certainly focus town proud chin stretch difference easily content couple land
    [Zano wallet ZxCk74]:

!!! Be sure to save this seed phrase in a secure place. If the seed phrase is lost, the wallet may become impossible to restore, and all assets may be lost.

## Receiving Money with Payment ID
Each wallet file in Zano is always one address and one secret key (in fact, it's a two secrete keys, but this is not important in the context of this manual). Zano does not support HD wallets for a number of technical reasons. Instead, for multi-user support, a so-called **payment_id** is used, which is a special identifier associated with the user. Each incoming transaction that contains this payment_id is considered credited to the balance of this user. Typically, a **payment_id** is an 8-byte random number generated by an exchange (or another custody service). It can be up to 128 bytes, but it is usually 8 bytes.

**IMPORTANT**: Users should never "operate" their payment_id anywhere under any circumstances. Instead, an **integrated address** is used. An **integrated address** is a special address format that encodes the user's payment_id along with the base wallet address, eliminating errors or typos. To generate an integrated address, you can use the WALLET RPC API [make_integrated_address](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/make_integrated_address/):

```json
   Request:
    {
     "id": 0,
     "jsonrpc": "2.0",
     "method": "make_integrated_address",
     "params": {
       "payment_id": "1dfe5a88ff9effb3"
     }
    }
    
   Response:
    {
     "id": 0,
     "jsonrpc": "2.0",
     "result": {
       "integrated_address": "iZ2EEMZWeKBRvbHrvebi5fgBLXDWukJ3VRXk6PENQ4orUTRfh11EHjCgCBxokeg5FEPHumvqJ76ikKHnD43iGjsECvV53PeAEkM3CLGRmST3",
       "payment_id": "1dfe5a88ff9effb3"
     }
    }
```
An address that starts with a lowercase letter "i" is an **Integrated Address**. It is always longer than a regular address and looks something like this: "iZ2EEMZWeKBRvbHrvebi5fgBLXDWukJ3VRXk6PENQ4orUTRfh11EHjCgCBxokeg5FEPHumvqJ76ikKHnD43iGjsECvV53PeAEkM3CLGRmST3". Only such an address can be shown to the user as their own deposit address. Transactions sent to this address will always have the payment_id specified when creating the address.

## Processing Incoming Transactions
There are several ways to get information about transactions for a Zano wallet. We will review most convenient and also mention other legacy approaches at the end.

The main method for obtaining transaction history information is [get_recent_txs_and_info2](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_recent_txs_and_info2/). In the example below, we removed excessive and irrelevant for this article information from the response and left only those fields that are essential for processing custody. 
```json
Request:​
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "get_recent_txs_and_info2",
 "params": {
   "count": 100,
   "exclude_mining_txs": false,
   "exclude_unconfirmed": true,
   "offset": 0,
   "order": "FROM_END_TO_BEGIN",
   "update_provision_info": true
 }
}
Response:​
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "pi":{
       "curent_height": 100010,
       },
    "last_item_index": 1,
    "total_transfers": 2,
    "transfers": [
      {
        "comment": "Comment here",
        "fee": 10000000000,
        "height": 100000,
        "payment_id": "1dfe5a88ff9effb3",
        "subtransfers": [
          {
            "amount": 1000000000000,
            "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
            "is_income": true
          },
          {
            "amount": 1000000000000,
            "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
            "is_income": true
          }
        ],
        "timestamp": 1712590951,
        "transfer_internal_index": 1,
        "tx_hash": "bfaf3abfd644095509650e12c8f901e6731a2e3e1366d3dbeddb0c394cd11db8",
        "unlock_time": 0
      },
      {
        "comment": "Comment here",
        "fee": 10000000000,
        "height": 100001,
        "payment_id": "1dfe5a88ff9effb3",
        "subtransfers": [
          {
            "amount": 1000000000000,
            "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
            "is_income": false
          },
          {
            "amount": 1000000000000,
            "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
            "is_income": true
          }
        ],
        "timestamp": 1712590951,
        "transfer_internal_index": 0,
        "tx_hash": "5509650e12c8f901e6731a2bfaf3abfd64409e3e1366d3d94cd11db8beddb0c3",
        "unlock_time": 0
      }
    ]
  }
}
```
You can read the transaction feed either from the oldest to the most recent (set "**order**" to "**FROM_END_TO_BEGIN**"), or vice versa - from the most recent to the oldest (set "**order**" to "**FROM_BEGIN_TO_END**"). Generally, when doing custody, you read the transaction feed from the wallet starting from the oldest transactions and read the entire history to the most recent transactions. To do this, set the "**order**" field in the request to "**FROM_END_TO_BEGIN**". If the response returns fewer elements than the "count" specified in the request (in our example, this is 100), it means that you have read the entire transaction history from end to the most recent transactions. If not, you need to continue calling [get_recent_txs_and_info2](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_recent_txs_and_info2/) in such a way that each subsequent call passes the "**offset**" value, which indicates how many elements have already been read from the feed (if using the **FROM_END_TO_BEGIN** mode, you can also use the value from the "**transfer_internal_index**" field in the most recent element of the "transfers" array). Keep in mind that the number of transactions you count as transfers to users may differ from the total number of transactions read due to some transactions that you may decide to ignore as non-legit.

The list of transactions is in the "transfers" array. The response header has a **pi.current_height field**, which indicates the current highest known blockchain height to the wallet. Relative to this number, you will calculate the number of confirmations for each transaction in the "**transfers**" array (specifically, subtract the "**height**" field from **pi.current_height field**).

Each element in the "transfers" array represents a description of a transaction with its details. The important fields in this structure are:
 - **"height"**: block number when transaction got included 
 - **"payment_id"**: "1dfe5a88ff9effb3" - user-associated identification, that was encoded
   in integrated address of the user. If transaction has valid
   payment_id, that means incoming payments from this transaction should
   go to user associated with this payment_id

Since Zano is a multi-asset platform, each transaction might contain multiple transfers (different assets). The “**subtransfers**” array lists each asset that was part of this transaction:
```json
  "subtransfers": [
    {
      "amount": 1000000000000,
      "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
      "is_income": false
    },
    {
      "amount": 1000000000000,
      "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
      "is_income": true
    }
  ]
```
IMPORTANT:  
 - Do not account deposits for transactions that have not reached 10 confirmations. Sometimes the network undergoes reorganisation among the last 2-3 blocks. This is normal, and within this number of confirmations, the transaction sequence may change, including the removal of transactions that previously appeared with 2-3 confirmations.  Read the history only until those transactions that got 10 confirmations, when it comes to transactions that haven't mach this number of transactions - re-read  **get_recent_txs_and_info2** until you see those transactions in response with 10 confirmations.  Make your code fully aware of such situations and re-read history for those transactions. 
 - Consider only those **asset_id** that you know, and ignore any others.  
- When depositing an asset, ensure the correct interpretation of the decimal point, as it may differ for each asset. You can request asset details via the DAEMON RPC API [get_asset_info](https://docs.zano.org/docs/build/rpc-api/daemon-rpc-api/get_asset_info/).   Native coins have the asset_id d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a and should always be deposited for.   
- A transaction may contain both incoming and outgoing subtransfers. Check the **is_income** field for each element. 
- We also recommend specifying the  **"exclude_unconfirmed": true** field in your request, as unconfirmed transactions are not important in the context of custody.   
- Do not deposit transactions where the "**unlock_time**" field is different from 0, as such transactions may be locked for a long period. 
- Over time, the payment_id may be pruned from old transactions history (over a year old), so backup the transfer history of your users to avoid future issues.


## Requesting Wallet Balance

To request the current balance of the wallet, you can use the WALLET RPC API [getbalance](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/getbalance).
```json
Request:​
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "getbalance",
 "params": {
 }
}

Response:
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "balances": [
      {
        "asset_info": {
          "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
          "current_supply": 500000000000000000,
          "decimal_point": 12,
          "full_name": "Zano wrapped USD",
          "hidden_supply": false,
          "meta_info": "Stable and private",
          "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
          "ticker": "ZUSD",
          "total_max_supply": 1000000000000000000
        },
        "awaiting_in": 1000000000000,
        "awaiting_out": 2000000000000,
        "total": 100000000000000,
        "unlocked": 50000000000000
      },
      {
        "asset_info": {
          "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
          "current_supply": 13000000000000000000000,
          "decimal_point": 12,
          "full_name": "Zano wrapped USD",
          "hidden_supply": false,
          "meta_info": "Stable and private",
          "owner": "",
          "ticker": "ZANO",
          "total_max_supply": 18000000000000000000000
        },
        "awaiting_in": 2000000000000,
        "awaiting_out": 1000000000000,
        "total": 500000000000000,
        "unlocked": 10000000000000
      }
    ]
  }
}
```
Response returns a list of assets that are present in the wallet, and for each asset, there are details ("**asset_info**") as well as the balances in the "**total**" and "**unlocked**" fields. The "**unlocked**" field shows how many coins are currently available for sending (this does not include incoming transactions that have not reached 10 confirmations, for example change). The "**total**" field shows all assets, including those that have not reached the required number of confirmations.

IMPORTANT: Assets not included in the public or private whitelist do not appear in the [getbalance](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/getbalance) response. There is a public whitelist maintained by the project community, as well as a private whitelist for each wallet, which is stored in the wallet's file. If you want to see the balance of an asset not present in the public whitelist, you need to call the WALLET RPC API [assets_whitelist_add](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/assets_whitelist_add):

```json
Request:
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "assets_whitelist_add",
 "params": {
   "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
 }
}
Response:
{
 "id": 0,
 "jsonrpc": "2.0",
 "result": {
   "asset_descriptor": {
     "current_supply": 500000000000000000,
     "decimal_point": 12,
     "full_name": "Zano wrapped USD",
     "hidden_supply": false,
     "meta_info": "Stable and private",
     "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
     "ticker": "ZUSD",
     "total_max_supply": 1000000000000000000
   },
   "status": "OK"
 }
}
```


## Searching for Transactions in the Wallet

You can also search for an arbitrary transaction by its tx_id or using other available parameters in the API [search_for_transactions2](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/search_for_transactions2): 
```json
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "search_for_transactions2",
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
## Transfer Coins

Transferring coins is done using the WALLET RPC API [transfer](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/transfer/):
```json
Request:
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "transfer",
 "params": {
   "destinations": [{
     "address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
     "amount": 10000000000000,
     "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852"
   }],
   "fee": 10000000000,
   "hide_receiver": true,
   "mixin": 15,
   "push_payer": false
 }
}
Response:
{
 "id": 0,
 "jsonrpc": "2.0",
 "result": {
   "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
   "tx_size": 1234,
   "tx_unsigned_hex": ""
 }
}
```
It is good practice to check that your balance is sufficient for sending the desired asset before making a transfer; otherwise, there may be an error in sending the transaction. Sometimes, you need to wait up to 10 minutes to gather the required number of confirmations for the change (if the value in the unlocked field is still less than the value in the total field in the balances response). If you received a transaction hash in the “**tx_hash**” field, it means the transaction has been successfully created and accepted by the daemon for relay across the network. Once this transaction is included in a block and starts getting confirmations, you will see it in the results of [get_recent_txs_and_info2](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_recent_txs_and_info2/) (the **is_income** field will be false).

IMPORTANT: Before sending, be sure to check that the address you are sending to does not belong to your wallet, even if it is an integrated address of another user on your base wallet.  You cannot send transactions between users within the same wallet. To check the base wallet address from integrated address, you need to call the WALLET RPC API [split_integrated_address](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/split_integrated_address): 
```json
Request:
{
 "id": 0,
 "jsonrpc": "2.0",
 "method": "split_integrated_address",
 "params": {
   "integrated_address": "iZ2EMyPD7g28hgBfboZeCENaYrHBYZ1bLFi5cgWvn4WJLaxfgs4kqG6cJi9ai2zrXWSCpsvRXit14gKjeijx6YPCLJEv6Fx4rVm1hdAGQFis"
 }
}
Response:
{
 "id": 0,
 "jsonrpc": "2.0",
 "result": {
   "payment_id": "1dfe5a88ff9effb3",
   "standard_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"
 }
}
```
You need to check the **standard_address** field and ensure it is different from your own custody wallet. If the fields match, it means an attempt is being made to perform an internal transfer within your own custody, from one user to another. Such internal transactions are typically handled offchain by well-designed services.

IMPORTANT: Avoid sending to multiple destinations in a single transaction, as there are some limitations. For example, you cannot specify multiple different integrated addresses in multiple destinations for one transaction.

## Legacy methods
[get_bulk_payments](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_bulk_payments)
[get_payments](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_payments)
