# Coinswap guide

As you may already know, Boolberry holders can swap their coins to the Zano network. The dev team managed to make this process as simple as possible. Basically, all you need is a transaction from the Boolberry wallet to a desired Zano address. The rest of the swap process will be completed automatically. The Boolberry funds will be burnt and after 20 confirmations your Zano address will receive the amount in Zano.

:::danger ⠀

Swapped coins will no longer exist in the Boolberry network and this action is irreversible.

:::

The first step to coin swap is to obtain a Zano address. There is a [Getting started](https://docs.zano.org/docs/getting-started-1) article which will guide you through the process.

:::danger ⠀

Make sure you have Boolberry wallet version 93 or higher, available [here](https://boolberry.com/#downloads).

:::

Next step is the coin transfer. Depending on how you prefer to store your coins there are three options.

### Boolberry wallet

Enter your Zano address as 'Send payment address' in the latest Boolberry wallet app. The coinswap notification will appear.

![alt coinswap-guide-boolberry-wallet](../../../static/img/use/coinswap-guide/coinswap-guide-boolberry-wallet.png 'coinswap-guide-boolberry-wallet')

Then enter the desired BBR amount, then press Send to proceed with the coinswap.

### Exchange

At first, you will have to make sure that you exchange uses the latest BBR daemon version which supports the coinswap. If so, you can request a withdrawal from your BBR exchange account to your Zano address and wait for transaction confirmation. Soon you will be able to see funds in your Zano wallet.

### Daemon

If you use the simplewallet daemon here is an example for making the coinswap transfer.

![alt coinswap-guide-daemon-example](../../../static/img/use/coinswap-guide/coinswap-guide-daemon-example.png 'coinswap-guide-daemon-example')

It is also possible to make coin swap with the transfer RPC.

```
$ curl http://127.0.0.1:12233/json_rpc -s -H 'content-type:application/json;' --data-binary '{"jsonrpc":"2.0","id":"5","method":"transfer", "params":{"destinations":[{"address":"<YOUR ZANO ADDRESS", "amount":<AMOUNT>}], "fee":1000000000, "mixin":0}}'
```

For more information please refer to [BBR Documentation](https://docs.boolberry.com/wallet).

### Finalizing the swap

Usually, the coinswap procedure will be completed within an hour. However, it may take up to 24 hours in some cases. You should see a similar incoming transaction shortly.

![alt coinswap-guide-final](../../../static/img/use/coinswap-guide/coinswap-guide-final.png 'coinswap-guide-final')
