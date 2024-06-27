---
sidebar_position: 4
---

# Zano Trade

A decentralized exchange to trade native Zano and all the Confidential Assets launched on Zano’s ecosystem. Zano Trade requires no user registration and uses an on-chain order matching system to facilitate [Ionic Swaps](https://docs.zano.org/docs/learn/frequently-asked-questions#what-are-ionic-swaps) between native Zano and the Confidential Assets. It is impossible to see what asset type, amount, or address was involved in the transaction.

## How to use

1. Zano Trade, like all Zano dApps, requires using Zano Companion, [click here](https://docs.zano.org/docs/use/companion) if you haven't set it up already.

2. Once your Companion is ready (make sure to have your desktop wallet open and unlocked) head to [trade.zano.org](http://trade.zano.org) and click "Connect Wallet".

3. On the first time, a popup will appear on the Companion to authorize the connection, click "Accept".

   <figure style={{textAlign: 'center'}}>
     <img src={require('/img/use/companion/sign_request.png').default} />
   </figure>

4. To do a trade, search and select the desired trading pair.&#x20;

   If multiple tokens under the same/similar name exist, make sure to check their unique Asset ID.

   <figure style={{textAlign: 'center'}}>
     <img src={require('/img/use/zano-trade/trading-pairs.png').default} />
   </figure>

5. Now you can either post a buy/sell order or take an existing one.

### Create an order

For this example, we will be buying "ZNOPP" tokens:

_Price:_ How much of the base pair (in this case, ZANO) do we want to pay per unit of ZNOOP?

_Amount:_ How many tokens do we want to acquire at this price?

Click "Buy" to post the order.\

![](/img/use/zano-trade/new_order1.png)

### Take an order

For this example, we'll be selling "ZNOOP" tokens:

Scroll down to see the order book.

Since we are happy with receiving 0.01 ZANO per token, we'll proceed to click "Take Order".\

![](/img/use/zano-trade/order_book2.png)

This will take us back above and automatically set the fields for our sell order, simply click "Sell".

![](/img/use/zano-trade/new_order2.png)

### Complete the trade

Scroll down to see your list of pending orders.

<figure style={{textAlign: 'center'}}>
  <img src={require('/img/use/zano-trade/my_orders.png').default} />
</figure>

Since our order matches the one from @Timmy03, all that is left to do is click "Apply".

This will open Zano Companion, prompting us to confirm the trade.

<figure style={{textAlign: 'center'}}>
  <img src={require('/img/use/zano-trade/ionic_swap1.png').default} />
</figure>

Now we wait for @Timmy03 to apply our order in the same way we just did.

<figure style={{textAlign: 'center'}}>
  <img src={require('/img/use/zano-trade/completed_trade.png').default} />
</figure>

And that's it! We just completed a peer-to-peer trade, made possible by Zano's Ionic Swaps, preserving our privacy across the whole process.
