---
sidebar_position: 7
---

# Frequently Asked Questions

### **What is Zano?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-zano)**

Zano is an open-source cryptocurrency (layer-1) and ecosystem with enterprise-grade privacy, security, and scalability that operates as a robust foundation for confidential assets and decentralized applications (dApps).

### **How does Zano achieve privacy?**

Zano leverages the proven and time-tested cryptographic primitives that were first introduced with CryptoNote, a protocol of which one of our founders was a lead-dev for, origin for over 300 forks and used by the biggest private cryptocurrencies.

Our implementation boils down to:

- &#x20;**d/v-CLSAG** **Ring Signatures** that hide the sender.

- **Stealth addresses** that hide the receiver and asset type being transacted.

- **RingCT** which hides amounts/balances, even when staking thanks to **Zarcanum.**

This makes sure that **by default,** transaction data being stored on the blockchain is **only** accessible by parties who authorized the transactions, none of it is ever publicly published.

### **How is the network secured?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-consensus-mechanism-is-used)**

Zano uses a hybrid consensus algorithm that alternates between Proof-of-Work (PoW) and Proof-of-Stake (PoS) blocks.

This approach combines the benefits of both mechanisms to enhance blockchain security and decentralization. If performing a 51% attack on Zano, one would need the majority of the hash rate **and** a significant amount of the total amount of staked coins, making the cost of an attack incredibly high, thus becoming infeasible.

### **What is an alias and how does it work?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-alias-and-how-does-it-work)**

All Zano network users can create aliases, for example: @username. These aliases provide a short, easy-to-remember name rather than a long string of characters that form a blockchain address. To send coins to an alias, simply type it in the address field starting with @, wallets will automatically detect it.

Aliases will be used in a dedicated messenger, a user reputation service, and an alias-based authentication system that can connect to the dApps running on Zano’s ecosystem.

### **What are Confidential Assets?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-alias-and-how-does-it-work)**

Anyone can easily issue user-creatable currencies and digital tokens on the Zano chain, such assets are secured by the same mechanisms that make Zano so much more secure than first-generation cryptocurrencies, namely hidden addresses and hidden amounts. This unique technology can be used to create private stablecoins, shielded versions of existing assets, and much more, without the overhead of having to create, manage, and secure your own blockchain.

### **What are Ionic Swaps?**

Ionic Swaps are an improvement on Atomic Swaps, innovating seamless cryptocurrency exchanges while preserving user privacy. Ionic Swaps are a safe and consistent way to perform peer-to-peer swaps in which neither party has an unfair advantage. This technology is used by the DEX and for instant swaps.

### **What are Escrow Contracts?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-escrow-contracts)**

With Zano’s Escrow Contracts, users can create fully customizable contracts, which essentially allow for any agreement conditions to be followed by all parties in a trustless way without any intermediary involvement. When using escrow contracts, a deposit is required from all parties involved, which they will forfeit if there is any attempt to act maliciously, peer-to-peer settlements in its purest form.

### **What are Auditable Wallets?**

Auditable wallets allow people and organizations to create transparent wallets for situations where a third party would rather verify than trust. Creating auditable wallets doesn’t affect the privacy of the Zano network in any way. We use this feature for our foundation fund.

### **What is Zarcanum?**

Zarcanum is the world’s first Proof of Stake scheme that enhances traditional PoS with untraceability and hidden amounts, revolutionizing blockchain consensus. Thanks to this innovative approach our stakers can stake in complete anonymity.

### **How can I get Zano coins?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#how-can-i-get-zano-coins)**

You can mine coins and stake them to increase your balance or trade coins on cryptocurrency exchanges, including our own DEX.

[List of exchanges that currently list Zano](https://zano.org/community/exchanges)

### **Where can I store my Zano?**

[Wallets where Zano is available](https://zano.org/downloads) (Mobile & Desktop)

### **Where can I spend Zano?**

Zano is currently integrated in Trocador's Anon Pay, this means that any website that uses this payment processor will accept Zano, that includes buying gift cards and prepaid cards at [Cake Pay](https://buy.cakepay.com) and [Trocador](https://trocador.app/es/prepaidcards/) itself.

We are also working on further integrations and a Zano based decentralized [marketplace](https://zanobazaar.com) is in the works by a community member.

### **What’s the plan for scaling?**

We'll continue to improve our dynamic blocksize (which our team pioneered initially with Cryptonote) and we're currently researching horizontal L1 scaling (sharding).

### **What is a mixin and what it's used for?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-mixin-and-what-its-used-for)**

The mixin count refers to the number of signatures (apart from yours) in the ring signature that authorizes the transaction. A higher mixin value will typically provide more privacy because it will provide greater plausible deniability. It is impossible for any observer to know which is the real source of the funds.

### **When trying to send coins I get an error stating that the transaction is too large.[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#when-trying-to-send-coins-i-get-an-error-stating-that-transaction-is-too-large)**

This is due to sending many small inputs to the address. The solution is to split up the transaction and send smaller amounts.

### **What is a seed phrase?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#what-is-a-seed-phrase)**

To access the wallet in the event of a loss, you need something called a mnemonic recovery phrase or seed. This group of words that you received while creating your wallet are designed to add an extra layer of security. With these phrases you can easily restore lost wallets if you don’t have the passkey.

### **Why does the desktop wallet take so long to start?[​](https://docs.zano.org/docs/learn/frequently-asked-questions/#why-application-starting-time-takes-so-long)**

Zano wallet is a full node application, due to loading a blockchain and multiple wallets synchronizing, start time depends on your system specification and may be bottlenecked by internet connection speed.
