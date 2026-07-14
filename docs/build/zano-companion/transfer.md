# Transfer

Makes new payment transaction from the wallet. Proxy of [transfer](/docs/build/rpc-api/wallet-rpc-api/transfer/) method.

In your web app, call extension Transfer method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

Transfer to a single destination:

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.transfer(
    {
        assetId: "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
        amount: "10.5",
        destination: "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"
    },
    {
        timeoutMs: 60_000
    }
);
```

Transfer to multiple destinations:

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.transfer(
    {
        assetId: "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
        destinations: [
            {
                address: "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
                amount: 10.5
            }
        ]
    },
    {
        timeoutMs: 60_000
    }
);
```

where:

- assetId - Asset id to transfer
- amount - Amount to transfer to destination
- destination - Destination address
- destinations - List of destinations
- address - Destination address
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
        "tx_size": 1234,
        "tx_unsigned_hex": "",
        "used_out_ids": []
    }
}
```

where:

- tx_hash - Has of the generated transaction(if succeded)
- tx_size - Transaction size in bytes
- tx_unsigned_hex - Unsigned transaction hex-encoded blob
- used_out_ids - IDs of the wallet outputs used in the generated transaction
