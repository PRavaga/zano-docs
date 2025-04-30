# Authenticate in System
- **METHOD**: <kbd>POST</kbd>  
- **PATH**: `/api/auth`

#### Request:
```typescript
{
  data: {
    address: string;
    alias: string;
    message: string;
    signature: string;
  };
  neverExpires: boolean;
}
```

>Explanation of Fields:  
>- To get ```data``` you should [sign some message using Zano wallet](https://docs.zano.org/docs/build/rpc-api/wallet-rpc-api/sign_message/) (random string)

#### Response:
```typescript
   success: boolean;
   data?: string // error message 
```