General marketplace API which lets read offers related to given wallet

### Request

```json
{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_global_get_offers_ex",
	"params": {
		"filter": {
			"amount_low_limit": 0,
			"amount_up_limit": 0,
			"bonus": false,
			"category": "",
			"fake": false,
			"keyword": "",
			"limit": 100,
			"location_city": "",
			"location_country": "",
			"offer_type_mask": 0,
			"offset": 0,
			"order_by": 0,
			"primary": "",
			"rate_low_limit": "0.000000",
			"rate_up_limit": "0.000000",
			"reverse": false,
			"target": "",
			"timestamp_start": 0,
			"timestamp_stop": 0,
		}
	}
}
```

### Request parameters

- amount_low_limit - filter offers selection by field amount of specified currency at lower boundary.
- amount_up_limit - filter offers selection by field amoun of specified currency t at higher boundary.
-bonus
- category - fiter by category, work's as substring matching, i.e. if categories set to "CLS:MAN:TSH" and filters category fileds set to "MAN" then it fits category condition.
- fake
- keyword - This use search by keyword throught the all fields.
- limit - Maximum records to return.
- location_city - Used to filter by city name or geo-tag
- location_country - Filters by country code.
- offer_type_mask - Specify type of the offer:
- offset - Offeset regarding first item which fit specified filter, count include only items which fit the filter. Userful for enumeration big amount or records, up to whole offers database enumeration.
- order_by - chose in how to order offers in selection. At this moment supported following ordering:

"order_by" |  
--- | ---
0 | Order by timestamp (most usable)
1 | Order by an amount of Zano
2 | Order by the amount of specified currency
3 | Order by rate, which calculated as the amount currency divided to amount Zano
4 | Order by payment type(as string)
5 | Order by contact field(as string)
6 | Order by location: country string concatenated with city string
7 | Order by target string, basically title string

- primary -
- rate_low_limit - Filter by low limit of the rate between Zano and currency amount currency divided to amount Zano
- reverse - Reverse order
- target - Basically a title for subject of the Offer - could be the name of the goods or currency which supposed to be traded.
- timestamp_start - Setup a lower timestamp boundary. Useful if the offers are selecting for given time range.
- timestamp_stop - Setup a higher timestamp boundary. Useful if the offers are selecting for given time range.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "offers": [
      {
        "ap": "20",
        "at": "1",
        "b": "",
        "cat": "CLS:MAN:TSH",
        "cnt": "Skype: some_skype, discord: some_user#01012",
        "com": "Some nice comments about tshirt",
        "do": "Additional conditions",
        "et": 10,
        "fee": 10000000000,
        "index_in_tx": 0,
        "lci": "",
        "lco": "World Wide",
        "ot": 1,
        "p": "USD",
        "pt": "Credit cards, BTC, ZANO, ETH",
        "security": "0000000000000000000000000000000000000000000000000000000000000000",
        "t": "T-shirt with Zano logo, made by Crypjunkie",
        "timestamp": 1570219600,
        "tx_hash": "6ba12c5d2c66d31f770bfdc88ae9dc90d007b9b33f946fc7c1d9750f8655331c",
        "tx_original_hash": "0000000000000000000000000000000000000000000000000000000000000000"
      },
      {
        "ap": "20",
        "at": "1",
        "b": "",
        "cat": "CLS:MAN:TSH",
        "cnt": "Skype: some_skype, discord: some_user#01012",
        "com": "Some nice comments about tshirt",
        "do": "Additional conditions",
        "et": 10,
        "fee": 10000000000,
        "index_in_tx": 0,
        "lci": "",
        "lco": "World Wide",
        "ot": 1,
        "p": "USD",
        "pt": "Credit cards, BTC, ZANO, ETH",
        "security": "0000000000000000000000000000000000000000000000000000000000000000",
        "t": "T-shirt with Zano logo, made by Crypjunkie",
        "timestamp": 1570219840,
        "tx_hash": "2987b671cc337203628a3a1bb7ac811e41f110864d6162d3c2276d2c79f694d6",
        "tx_original_hash": "0000000000000000000000000000000000000000000000000000000000000000"
      }
    ],
    "status": "",
    "total_offers": 0
  }
}
```

### Response information

- ap - the amount of the currency specified for use in this offer
- at - the amount of the items to be sold/bought
- b -
- cat - category of the goods, could be specified with subcategories by separation CLS:MAN:TSH, which could mean Clothes->Man->Tshirts
- cnt - contacts, like skype, discord, telegram, whatever
- com - comments regarding this offer
- do - additional conditions, if need to specify
- et - expiration time, set in days, eg 5 - expire in 5 days after creation
- fee - fee paid for this transaction with the offer, it can be default offer, but the higher fee may bring offers to be higher in search results
- index_in_tx -
- lci - location city, if the also make sense for an offer, could be google geo-autocomplete id, like ChIJD7fiBh9u5kcRYJSMaMOCCwQ
- lco - location country, if this makes sense for an offer
- ot - offer type, 0 - buy currency for Zano, 1 - buy Zano for currency, 2 - buy goods for Zano, 3 - sell goods for Zano
- p -
- pt - payment type, Credit cards, Crypto, Paypal, Flexa
- security -
- t - description for the goods/service which is selling/seeking
- timestamp -
- tx_hash -
- tx_original_hash -





