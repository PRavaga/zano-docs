# Burn Asset

Burns some owned amount of the coins for the given asset. Proxy of [burn_asset](/docs/build/rpc-api/wallet-rpc-api/burn_asset/) method.

In your web app, call extension Burn Asset method, while extension is on.

Use `zano_web3` lib SDK to make a request.

### Request

```jsx
import { ZanoWallet } from 'zano_web3/web';

const zanoWallet = new ZanoWallet();

const response = await zanoWallet.burnAsset(
    {
        assetId: "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
        burnAmount: "10.5",
        nativeAmount: "0",
        pointTxToAddress: "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
        serviceEntries: [{
            body: "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
            flags: 0,
            instruction: "K",
            security: "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
            service_id: "C"
        }]
    },
    {
        timeoutMs: 60_000
    }
);
```

where:

- assetId - Id of the asset to burn
- burnAmount - Amount to burn
- nativeAmount - Optional, if we need this transaction to be seen by particular wallet
- pointTxToAddress - Optional, if we need this transaction to be seen by particular wallet
- serviceEntries - Optional, if we need to include service entries for burn transaction
- body - Hex-encoded body of the attachment
- flags - Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
- instruction - Instruction that make sence for this particular service
- security - Hex-encoded public key of the owner, optional
- service_id - Service ID, identificator that diferent one service from another
- timeoutMs - Timeout of request in ms (no timeout if not set)

### Response

```json
{
    "success": true,
    "data": {
        "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
    }
}
```

where:

- tx_id - Id of transaction that carries asset burn operation
