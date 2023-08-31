---
sidebar_position: 2
---

# How to call API

Making API calls to the Zano Daemon and Wallet is easy, below we'll give you an example to help you get started building on Zano.

### Using Insomnia

[Insomnia](https://insomnia.rest/) is a program (similar to [postman](https://www.postman.com/)) that helps you design, debug, and test APIs, heres an example API call to the Zano Daemon using Insomnia.

![](https://files.readme.io/d5fd42e-insomnia_call.png)

---

### Using NodeJS

Below is an example of the same API call using NodeJS:

```javascript
const axios = require("axios");

async function callAPI() {
  try {
    const url = "http://127.0.0.1:11211/json_rpc";
    const requestData = {
      jsonrpc: "2.0",
      id: 0,
      method: "getbalance",
    };

    const response = await axios.post(url, requestData);
    console.log(response.data);
    // Process the response data as needed
  } catch (error) {
    console.error("Error:", error.message);
  }
}

callAPI();
```

### Summary

When running the Daemon and Wallet in RPC mode locally, the following URL, whether using something like Insomnia or NodeJS or some other language, you access the daemon with the following URL:

```
http://127.0.0.1:11211/json_rpc
```

Have fun building on Zano!
