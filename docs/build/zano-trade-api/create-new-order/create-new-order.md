# Create new order

- **METHOD**: <kbd>POST</kbd>  
- **PATH**: `/api/orders/create`

#### Request:
```typescript
{
   token: string;
   orderData: {
      type: 'buy' | 'sell';
      side: 'limit'; // field naming will be fixed soon. It won't affect bots, both field names will work
      price: string;
      amount: string;
      pairId: number;
   };
}
```

#### Response:
```typescript
   {
      success: boolean;
      data?: string // error message 
   }
```