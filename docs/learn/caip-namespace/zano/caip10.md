---
namespace-identifier: zano-caip10
title: Zano Ecosystem - Account ID Specification
author: Zano Team
status: Draft
type: Standard
created: 2026-06-18
updated: 2026-06-18
requires: ["CAIP-2", "CAIP-10"]
---

# CAIP-10

*For context, see the [CAIP-10][] specification.*

## Rationale

This namespace, which specifies the Zano Ecosystem CAIP Account ID, is established to provide a formal implementation of the CAIP standards. At the time of its creation, its sole purpose is to support the `CAIP-122` standard implementation (provided in this folder as `caip122.md`).  

## Syntax

The Account ID syntax does not extend the Ethereum Account ID syntax (or the base `CAIP-10` standard) in any respect. The defined syntax is provided below:

```
account_id: chain_id + ":" + account_address
chain_id: "zano" (See `CAIP-2` (`./caip2.md`))
account_address: Specified in Zano Repository
```

The Zano Repository URL is available [here](https://github.com/hyle-team/zano).

At the time of this document's creation, the most common `account_address` string syntax is provided below (in regex form):

```
account_address: (Zx|aZx)[1-9A-HJ-NP-Za-km-z]{95} 
```

## References

- [Zano Repository](https://github.com/hyle-team/zano): Zano Repository.
- [CAIP-2](https://standards.chainagnostic.org/CAIPs/caip-2): CAIP Blockchain ID Specification.
- [CAIP-10](https://standards.chainagnostic.org/CAIPs/caip-10): CAIP Account ID Specification.

[CAIP-10]: https://standards.chainagnostic.org/CAIPs/caip-10

## Rights

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).