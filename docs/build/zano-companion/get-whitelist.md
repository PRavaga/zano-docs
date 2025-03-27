# Get Whitelist

Returns [whitelisted assets](https://api.zano.org/assets_whitelist.json).

In your web app, call extension Get Whitelist method, while extension is on.

### Request

```jsx
window.zano.request('GET_WHITELIST');
```

### Response

```json
{
    "data": [{
        "asset_id": "d6329b5b1f7c0805b5c345f4957554002a2f557845f64d7645dae0e051a6498a",
        "decimal_point": 12,
        "full_name": "Zano",
        "ticker": "ZANO"
    }]
}
```

where:

- asset_id - ID of the asset
- decimal_point - Decimal point of the asset
- full_name - Full Name of the asset
- ticker - Ticker of the asset