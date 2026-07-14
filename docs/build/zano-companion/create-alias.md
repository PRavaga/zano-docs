# Create Alias

Registers an alias for the wallet address. Proxy of [register_alias](/docs/build/rpc-api/wallet-rpc-api/register_alias/) method.

In your web app, call extension Create Alias method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const alias = "";

const response = await zanoWallet.createAlias(alias, { timeoutMs: 60_000 });
```

where:

- alias - Alias itself, a brief shortcut for an address
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "tx_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
    }
}
```

where:

- tx_id - If success - transactions that performs registration(alias becomes available after few confirmations)
