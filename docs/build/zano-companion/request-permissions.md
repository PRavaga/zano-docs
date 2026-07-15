# Request Permissions

Requests permissions for current website from the wallet owner.

In your web app, call extension Request Permissions method, while extension is on. The wallet owner will be asked to grant the requested permissions to current website.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.requestPermissions(
    [
        { type: "general" },
        { type: "balance" },
        { type: "history" }
    ],
    {
        timeoutMs: 60_000
    }
);
```

where:

- permissions - List of permissions to request
- type - Type of the permission. One of: "general" (common wallet info), "balance" (wallet balance), "history" (wallet transactions history)
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true
}
```

where:

- success - Whether the requested permissions were granted

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request(
    'REQUEST_ACCESS', 
    {
        permissions: [
            { type: "general" },
            { type: "balance" },
            { type: "history" }
        ]
    }, 
    timeout
);
```

where:

- permissions - List of permissions to request
- type - Type of the permission. One of: "general" (common wallet info), "balance" (wallet balance), "history" (wallet transactions history)
- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
    "success": true
}
```

where:

- success - Whether the requested permissions were granted
