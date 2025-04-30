# Get info about a DEX trading pair

- **METHOD**: <kbd>POST</kbd>   
- **PATH**: `/api/dex/get-pair`

#### Request:  
```typescript
{  
   id: number;
}  
```

#### Response:
```typescript
{
  success: boolean;
  data: {
    id: number;
    first_currency_id: number;
    second_currency_id: number;
    rate: number;
    coefficient: number;
    high: number;
    low: number;
    volume: number;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    first_currency: {
      id: number;
      name: string;
      code: string;
      type: string;
      asset_id: string;
      auto_parsed: boolean;
      asset_info: {
        id: string;
        logo: string;
        price: number | null;
        ticker: string;
        asset_id: string;
        full_name: string;
        meta_info: string;
        price_url: string;
        decimal_point: number;
        current_supply: string;
        total_max_supply: string;
      };
      whitelisted: boolean;
      createdAt: string;
      updatedAt: string;
    };
    second_currency: {
      id: number;
      name: string;
      code: string;
      type: string;
      asset_id: string;
      auto_parsed: boolean;
      asset_info: {
        decimal_point: number;
      };
      whitelisted: boolean;
      createdAt: string;
      updatedAt: string;
    };
  };
}
```