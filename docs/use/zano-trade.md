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
     <img
       src={require('/img/use/companion/sign_request.png').default}
       alt="Sign request pop-up in Zano Companion"
     />
   </figure>

4. To do a trade, search and select the desired trading pair.&#x20;

   If multiple tokens under the same/similar name exist, make sure to check their unique Asset ID.

   <figure style={{textAlign: 'center'}}>
     <img
       src={require('/img/use/zano-trade/trading-pairs.png').default}
       alt="Trading pairs selection in Zano Trade"
     />
   </figure>

5. Now you can either post a buy/sell order or take an existing one.

### Create an order

For this example, we will be buying "ZNOOP" tokens:

_Price:_ How much of the base pair (in this case, ZANO) do we want to pay per unit of ZNOOP?

_Amount:_ How many tokens do we want to acquire at this price?

Click "Buy" to post the order.

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/new_order1.png').default}
    alt="Create buy order"
  />
</figure>

### Take an order

For this example, we'll be selling "ZNOOP" tokens:

Scroll down to see the order book.

Since we are happy with receiving 0.01 ZANO per token, we'll proceed to click "Take Order".

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/order_book2.png').default}
    alt="list of orders"
  />
</figure>

This will take us back above and automatically set the fields for our sell order, simply click "Sell".

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/new_order2.png').default}
    alt="Create sell order"
  />
</figure>

### Complete the trade

Scroll down to see your list of pending orders.

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/my_orders.png').default}
    alt="&#x22;My Orders&#x22; list"
  />
</figure>

Since our order matches the one from @Timmy03, all that is left to do is click "Apply".

This will open Zano Companion, prompting us to confirm the trade.

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/ionic_swap1.png').default}
    alt="Confirm Ionic Swap, companion pop-up"
  />
</figure>

Now we wait for @Timmy03 to apply our order in the same way we just did.

<figure style={{textAlign: 'center'}}>
  <img
    src={require('/img/use/zano-trade/completed_trade.png').default}
    alt="Both wallets tx history showing the successful swap"
  />
</figure>

And that's it! We just completed a peer-to-peer trade, made possible by Zano's Ionic Swaps, preserving our privacy across the entire process.

## Frequently Asked Questions

### How do trades work?

When users publish their orders to Zano Trade, our DEX coordinator combines sell and buy orders together in an [Ionic Swap](https://docs.zano.org/docs/learn/frequently-asked-questions#what-are-ionic-swaps) transaction that is then relayed by the app and executed by users, its content is only visible to the parties involved in the swap.

### Is Zano Trade decentralized?

Zano trade is simply a forum for users to find each other's orders, at no point does it hold any custody of funds.&#x20;

You can even do trades without the site by simply using the "Swap" function available in the official Zano wallets, in a fully self-hosted manner.

### Why isn't there a traditional order book/liquidity pool?

While technically a traditional order book is possible by building a list of half-filled ionic swap transactions, this is not something we endorse since it sacrifices the privacy on the maker side, contradicting one of Zano's core features.

However if there's a demand for an app like this and users are willing to opt-in, it could be built by a third party.

### Which currencies can I trade?

All [confidential assets](https://docs.zano.org/docs/learn/frequently-asked-questions#what-are-confidential-assets) issued or bridged over to Zano are tradeable.

### How long does it take before my transaction is processed?

An ionic swap takes 1 confirmation to complete, which on average is 1 minute.

### Why do I need Zano Companion to be able to access Zano Trade?

Since Zano Trade is a non-custodial app it uses Zano Companion as a secure interface to the user's wallet instead, this way funds always stay in your control.
