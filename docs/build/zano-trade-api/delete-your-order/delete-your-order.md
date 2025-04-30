# Delete your order

- **METHOD**: <kbd>POST</kbd>  
- **PATH**: `/api/orders/cancel`

#### Request:
```typescript
{
   token: string;
   orderId: number;
}
```
#### Response:
```typescript
   {
      success: boolean;
      data?: string // error message 
   }
```