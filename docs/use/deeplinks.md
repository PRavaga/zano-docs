---
sidebar_position: 6
---

# Deeplinks

Based on materials of Matthew Reichardt me@matthewreichardt.com (https://github.com/hyle-team/zano/issues/269)

### Zano URI Scheme

**action** - type of action requested, supported actions:

- send - simply send coins to given address
- escrow - create escrow-contract
- marketplace_offer_create - create marketplace offer

### Action "send"

Example of **send** command:

**zano:action=send&address=ZxCkvE7zhS6JuFE5neAaTtcY8PUT2CwfLZJQWP32jrELB1Vg9oSJyGJDyRWurqX6SXSqxjGz2yrAKaMqmxDa7E8313igosBVT&comment='Some payment'&mixins=11&hide_sender=true&hide_receiver=true**

- address - address of recipient
- comment - comment about payment[optional]
- mixins - number of mixins[optional]
- hide_sender - specify if sender address should be included in transaction(and visible for receiver)
- hide_receiver - specify if receiver address should be included in transaction(and visible for sender later, if wallet been restored from seed phrase)

### Action "marketplace_offer_create"

Example of **marketplace_offer_create** command:

**zano:action=marketplace_offer_create&mixins=11&hide_sender=true&hide_receiver=true&title='Random t-shirt'&description='One size fits all'&category='merch-tshirt'&price=10&img-url=''&contact='@ravaga'&comments='zzzz'**

**Basic params:**

- mixins - number of mixins[optional]
- hide_sender - specify if sender address should be included in transaction(and visible for receiver)
- hide_receiver - specify if receiver address should be included in transaction(and visible for sender later, if wallet been restored from seed phrase)

**Offer details:**

- title – offer title
- description – detailed offer description
- category – store defined category
- price – price in ZANO
- img-url – ipfs/arweave link to offer image
- contact – preferred way of communication (telegram, email, zano alias)
- comments -additional comments about the offer

### Action "escrow"

Example of **escrow** command:

**zano:action=escrow&description='Some Description'&seller_address='ZxCXALhZRodKmqRCWUPNAUCXqprJBNKv4eFsjzcMooAGVM6J2U2vSyTNpxNybwBnvzGWLtSWpBiddSZhph8HNfBn1bVE3c6ix'&amount='10'&my_deposit='5'&seller_deposit='5'&comment='Some comment if needed'**

**Escrow parameters:**

- description – Escrow description
- seller_address – Address of the wallet that have to accept/reject this offer
- amount – Total amount of the deal (not include security deposits)
- my_deposit – amount of coins that buyer put as a deposit
- seller_deposit – amount of coins that seller supposed to put as a deposit if he accept escrow
- comment – any comments regarding this deal

All mentioned information will be encrypted and won't be available for third party.
