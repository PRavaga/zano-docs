# Confirm transaction

> Use this method to confirm that you have finalized the transaction (order or part). You can get its id from the **get-active-tx-by-orders-ids** method.

- **METHOD**: <kbd>POST</kbd> 
- **PATH**: `/api/transactions/confirm`

#### Request:
```typescript
{
   token: string;
   transactionId: number;
}
```
#### Response:
```typescript
   {
      success: boolean;
      data?: string // error message 
   }
```