---
sidebar_position: 1
---

# Integration Guide

## Introduction

An overview of Zano integration process, highlighting its features and relevance for your platform.

### Basic Information

- **Official Website**: [Zano](https://zano.org/)
- **Coin Details**:
  - Symbol: **ZANO**
  - Full Name: **Zano**
- **Blockchain Explorer**: [Zano Explorer](https://explorer.zano.org/)
- **Source Code**: [GitHub Repository](https://github.com/hyle-team/zano)

### Setting Up a Node

- **Node Installation**: Building and installation guide for node [here](https://docs.zano.org/docs/build/building-from-sources).
- **Running in RPC mode**: Instruction available [here](https://docs.zano.org/docs/build/rpc-api/overview#running-daemon-and-wallet-in-rpc-mode-brief-guide)
- **Disk Requirements**: Minimum of 500GB disk space.
- **Blockchain Data**: Latest snapshot automatically downloaded upon building the latest commit. More details here.

### Blockchain Characteristics

- **Block Generation**: Target interval of one minute.
- **Decimals**: 12 decimal places.

### API Integration

- **Public API Endpoint**: [Zano Explorer API](https://explorer.zano.org/zano_api)
- **Account and Transaction Management**:
  - Integrated Addresses: [Guide](https://docs.zano.org/docs/build/exchange-guidlines/integrated-addresses-for-exchanges)
  - Creating Accounts: Detailed instructions [here](https://docs.zano.org/docs/build/exchange-guidlines/starting-the-daemon-and-the-wallet-application-as-rpc-server)
  - RPC/SDK Documentation: Available [here](https://docs.zano.org/docs/build/rpc-api/overview)

### Detailed API Instructions

### General Operations

- **API Endpoint Usage**: Guidelines for API interaction in the [RPC API Overview](https://docs.zano.org/docs/build/rpc-api/overview).
- **Validating Addresses**: Use the [split_integrated_address](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/split_integrated_address/) API. Returns an error code -2 for invalid addresses.

* **Retrieving Blockchain Height**: Use [get_wallet_info](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_wallet_info) API for the current blockchain height.
* **Checking Wallet Balance**: Total wallet balance available via [getbalance](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/getbalance) API.

### Transaction Details

- **Transaction Lookup**: Use [search_for_transactions](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/search_for_transactions) and [get_recent_txs_and_info](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_recent_txs_and_info) for transaction details.
- **Transaction History**: Use [get_bulk_payments](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_bulk_payments) for transaction history.
- **Transaction Legitimacy**: Avoid accepting locked funds; never set "allow_locked_transactions" to true. This is crucial for preventing fraudulent recharge attempts.
- **Transaction Execution**: Steps detailed [here](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/transfer/).
- **Offline Transaction Signing** Refere to the guide [here](http://localhost:3000/docs/build/exchange-guidlines/signing-transactions-offline)

### Wallet Management

- **Backup and Recovery**: Use seed phrases for backup; restore instructions [here](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/get_restore_info).
- **Official Wallet Downloads**: [Zano Downloads](https://zano.org/downloads).

### Additional Technical Details

- **Consensus Mechanism**: Hybrid PoW/PoS mechanism.
- **Transaction Expiry**: Transactions expire after 345600 seconds (4 days).

### Frequently Asked Questions (FAQ)

For additional queries related to integration, transaction handling, and node configuration, refer to our comprehensive [FAQ section](https://docs.zano.org/docs/build/exchange-guidlines/exchange-faq).

### Additional Notes

Ensure that your implementation adheres to the guidelines provided in the Zano documentation. Regularly check for updates or changes in the API endpoints and their usage. In case of any ambiguities or specific issues, reach out to the Zano development team or community for support.

This detailed guide provides a comprehensive overview of the necessary steps and considerations for integrating Zano's API into your platform. It's advisable to frequently consult the official Zano documentation to stay updated with any changes or new features.
