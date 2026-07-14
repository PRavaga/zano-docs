# Get Permissions

Gets list of permissions granted for current website.

In your web app, call extension Get Permissions method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.getPermissions({ timeoutMs: 60_000 });
```

where:

- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "permissions": ["general", "balance", "history"]
    }
}
```

where:

- permissions - List of permissions granted for current website. Each permission is one of: "general" (common wallet info), "balance" (wallet balance), "history" (wallet transactions history)
