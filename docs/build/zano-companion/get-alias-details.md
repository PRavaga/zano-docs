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