# Get Alias Details

Gets common info of specified alias. Proxy of [get_alias_details](/docs/build/rpc-api/daemon-rpc-api/get_alias_details/) method.

In your web app, call extension Get Alias Details method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const alias = "";

const response = await zanoWallet.getAddressByAlias(alias, { timeoutMs: 60_000 });
```

where:

- alias - alias of the request
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "address": "",
        "comment": "",
        "tracking_key": ""
    }
}
```

where:

- "address": Address of the alias.
- "comment": Arbitrary comment (optional).
- "tracking_key": View secret key of the corresponding address (optional).

<hr />

<b>NOTE</b>: You can opt out of the `zano_web3` SDK and call Zano Companion directly via `window.zano.request`.

### Request

```jsx
window.zano.request(
    'GET_ALIAS_DETAILS', 
    {
        alias: ""
    }, 
    timeout
);
```

where:

- alias - alias of the request
- timeout - Timeout of request in ms (set to null to disable)

### Response

```json
{
    "address": "",
    "comment": "",
    "tracking_key": ""
}
```

where:

- "address": Address of the alias.
- "comment": Arbitrary comment (optional).
- "tracking_key": View secret key of the corresponding address (optional).

If the alias is not found, an empty string is returned instead.