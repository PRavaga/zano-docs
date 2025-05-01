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
      data?: string | 
      {
         hasNotification: boolean;
         id: number;
         type: string;
         timestamp: string;
         side: string;
         price: string;
         amount: string;
         total: string;
         pair_id: number;
         user_id: number;
         status: string;
         left: string;
         updatedAt: string;
         createdAt: string;
      }
   }
```