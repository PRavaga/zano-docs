Fetch wallet's offers listed in the marketplace with given filters

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "marketplace_get_offers_ex",
  "params": {
    "filter": {
      "amount_low_limit": 0,
      "amount_up_limit": 0,
      "bonus": false,
      "category": "",
      "keyword": "tubes",
      "limit": 100,
      "location_city": "",
      "location_country": "",
      "offer_type_mask": 0,
      "offset": 0,
      "order_by": 0,
      "primary": "",
      "rate_low_limit": "0.1",
      "rate_up_limit": "0.1",
      "reverse": false,
      "target": "",
      "timestamp_start": 0,
      "timestamp_stop": 0
    }
  }
}
```
### Request description: 
```
    "filter": Filter options.
      "amount_low_limit": Lower limit for the amount of offers
      "amount_up_limit": Upper limit for the amount of offers
      "bonus": Bonus associated with the offers
      "category": Category of the offers
      "keyword": Keyword for searching offers
      "limit": Maximum number of results to return
      "location_city": City of the location for the offers
      "location_country": Country of the location for the offers
      "offer_type_mask": Mask representing the types of offers to include in the results, conbination of this: OFFER_TYPE_MASK_PRIMARY_TO_TARGET 0x00000001, OFFER_TYPE_MASK_TARGET_TO_PRIMARY 0x00000002, OFFER_TYPE_MASK_GOODS_TO_PRIMARY 0x00000004, OFFER_TYPE_MASK_PRIMARY_TO_GOODS 0x00000008
      "offset": Offset for pagination
      "order_by": Field to order the results by one on this: ORDER_BY_TIMESTAMP=0,ORDER_BY_AMOUNT_PRIMARY=1,ORDER_BY_AMOUNT_TARGET=2,ORDER_BY_AMOUNT_RATE=3,ORDER_BY_PAYMENT_TYPES=4,ORDER_BY_CONTACTS=5,ORDER_BY_LOCATION=6,ORDER_BY_NAME=7
      "primary": Primary field for the offers
      "rate_low_limit": Lower limit for the rate
      "rate_up_limit": Upper limit for the rate
      "reverse": Flag to indicate whether the results should be sorted in reverse order
      "target": Target entity of the offers
      "timestamp_start": Start timestamp for filtering results
      "timestamp_stop": Stop timestamp for filtering results

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "offers": [{
      "ap": "100000",
      "at": "10000000",
      "b": "",
      "cat": "",
      "cnt": "Ranko +38211111111",
      "com": "Dobr dan",
      "do": "full amount, by parts",
      "et": 0,
      "fee": 10000000000,
      "index_in_tx": 0,
      "lci": "Kolasin",
      "lco": "Montenegro",
      "ot": 0,
      "p": "ZANO",
      "pt": "zano",
      "security": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
      "t": "USDT",
      "timestamp": 1712683857,
      "tx_hash": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
      "tx_original_hash": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
      "url": ""
    }],
    "status": "OK",
    "total_offers": 1
  }
}
```
### Response description: 
```
    "offers": List of offers related to the operation.
      "ap": Amount of the currency
      "at": Smount of other currency or goods
      "b": Bonus associated with the offer
      "cat": Category of the offer
      "cnt": Contacts related to the offer
      "com": Comment associated with the offer
      "do": Deal option for the offer
      "et": Expiration time of the offer
      "fee": Fee associated with the transaction
      "index_in_tx": Index of the tx_service_attachment entrie in transaction
      "lci": City of the offer location
      "lco": Country of the offer location
      "ot": Type of the offer: OFFER_TYPE_PRIMARY_TO_TARGET(SELL ORDER) - 0, OFFER_TYPE_TARGET_TO_PRIMARY(BUY ORDER) - 1 etc.
      "p": Currency for goods
      "pt": Types of payment accepted for the offer
      "security": Onwer's public key for access control
      "t": Target:  currency / goods
      "timestamp": Timestamp of the transaction
      "tx_hash": Transaction hash represented as a hexadecimal string
      "tx_original_hash": Origin transaction hash represented as a hexadecimal string(if offer updated)
      "url": URL for previewing the offer
    "status": Status of the operation.
    "total_offers": Total number of offers.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>