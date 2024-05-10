Check spent status of given key images.

URL: ```http:://127.0.0.1:11211/check_keyimages.bin```
### Request: 
```json
{
}
```
### Request description: 
```

```
### Response: 
```json
{
  "images_stat": [0],
  "status": "OK"
}
```
### Response description: 
```
  "images_stat": List of spent states, where 1 means unspent and 0 means spent.
  "status": Status of the call.

```
