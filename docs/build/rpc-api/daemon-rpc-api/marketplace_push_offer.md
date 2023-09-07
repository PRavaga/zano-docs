Broadcasts transaction that was previously signed using sign_transfer call

### Request

```json
{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_push_offer",
	"params": {
		"od": {
			"ap": "1000",
			"at": "1",
			"cat": "CLS:MAN:TSH",
			"cnt": "https://zanobazaar.com",
			"com": "This field is where you write a detailed overview of your product or service, make it good",
			"do": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf",
			"et": 10,
			"fee": 10000000000,
			"lci": "THE ZANOVERSE",
			"lco": "Decentralized",
			"ot": 3,
			"pt": "$ZANO",
			"t": "Product Title",
			"url": "QmVWxCy7JyEuvxMPpcQ4jBzsRxtMFjbF6VGMc4CGuN6iqK"
		}
	}
}
```

### Request parameters

- ap - the amount of the currency specified for use in this offer
- at - the amount of the items to be sold/bought
- cat - string; category of the goods, could be specified with subcategories by separation CLS:MAN:TSH, which could mean Clothes->Man->Tshirts
- cnt - string; contacts, like skype, discord, telegram, whatever
- com - string; comments regarding this offer
- do - string; additional conditions, if need to specify
- et - integer; expiration time, set in days, eg 5 - expire in 5 days after creation
- fee - fee paid for this transaction with the offer, it can be default offer, but the higher fee may bring offers to be higher in search results
- lci - string; location city, if the also make sense for an offer, could be google geo-autocomplete id, like ChIJD7fiBh9u5kcRYJSMaMOCCwQ
- lco - string; location country, if this makes sense for an offer
- ot - integer; offer type, 0 - buy currency for Zano, 1 - buy Zano for currency, 2 - buy goods for Zano, 3 - sell goods for Zano
- pt - string; payment type, Credit cards, Crypto, Paypal, Flexa
- t - string; description for the goods/service which is selling/seeking
- url - string; url of your stores web presence etc

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_blob_size": 549,
    "tx_hash": "2987b671cc337203628a3a1bb7ac811e41f110864d6162d3c2276d2c79f694d6"
  }
}
```

### Response information

- tx_blob_size
- tx_hash - string; tx hash of the transaction related to the offer being pushed

