# Get active Tx by orders' Ids

> Get active transaction data by matching 2 orders.  
> So you can check if the transaction is already confirmed by another user and/or get proposal hex.

- **METHOD**: <kbd>POST</kbd>  
- **PATH**: `/api/transactions/get-active-tx-by-orders-ids`

#### Request:
```typescript
{
   token: string;
   firstOrderId: number;
   secondOrderId: number;
}
```
#### Response:
```typescript
   success: boolean;
   data?: {
      buy_order_id: number;
      sell_order_id: number;
      amount: string;
      timestamp: number;
      status: string;
      creator: string;
      hex_raw_proposal: string;
   } | string // error message
```