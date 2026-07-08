---
namespace-identifier: zano-caip2
title: Blockchain ID
author: Zano Team
status: Draft
type: Standard
created: 2026-06-18
updated: 2026-06-18
requires: CAIP-2
---

# CAIP-2

*For context, see the [CAIP-2][] specification.*

## Rationale

This namespace, which specifies the Zano Ecosystem CAIP Chain ID, is established to provide a formal implementation of the CAIP standards. At the time of its creation, its sole purpose is to support the `CAIP-122` standard implementation (provided in this folder as `caip122.md`).

## Syntax

At the time of this document's creation, the Zano Ecosystem does not provide the ability to create any L2 or internal chains. Therefore, only two blockchains exist within the Zano Ecosystem - Zano Mainnet and Zano Testnet. 

For `mainnet` and `testnet` respectively they Chain IDs are declared as the following strings:

```
# mainnet
zano:mainnet

# testnet
zano:testnet
```

## References

- [CAIP-2](https://standards.chainagnostic.org/CAIPs/caip-2): CAIP Blockchain ID Specification.

[CAIP-2]: https://standards.chainagnostic.org/CAIPs/caip-2