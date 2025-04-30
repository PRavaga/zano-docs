# Apply for matched order

> Use this method to apply if another side hasn't done it yet.  
> You can check if they applied by the **transaction** field in applyTips. If it's `false`, you can apply for it; otherwise, you are the finalizer and should use the **Confirm transaction** method.

- **METHOD**: <kbd>POST</kbd>  
- **PATH**: `/api/orders/apply-order`

#### Request:
```typescript
{
   token: string;
   orderData: {
      id: string;
      connected_order_id: string;
      hex_raw_proposal: string;
   };
}
```

>Explanation of Fields:  
>- to get `hex_raw_proposal` create [ionic swap proposal](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/ionic_swap_generate_proposal/) via Zano wallet API;
>- hex_raw_proposal - Hex-encoded proposal raw data(encrypted with common shared key). Includes half-created transaction template and some extra information that would be needed counterparty to finialize and sign transaction
#### Response:
```typescript
{
   success: boolean;
   data?: string // error message 
}
```