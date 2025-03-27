---
sidebar_position: 6
---

# Emission/Tokenomics

### Where does the emission come from?

Zano has a hybrid PoW/PoS consensus algorithm to secure the network and therefore emission is generated from two distinct sources:

Proof of Work (PoW) mining, which creates new ZANO coins to reward miners for completing the calculations and therefore contributing to the network.

Proof of Stake (PoS) staking, which also creates new ZANO coins to reward users who stake their funds and therefore also contributing to the network's security.

100% of the block reward goes to the miner or staker who found the block.

| Emission specifications​ |                                               |
| ------------------------ | --------------------------------------------- |
| Block Time               | 1 minute                                      |
| Block Reward             | 1 ZANO (fixed amount)                         |
| Maximum Supply           | Uncapped                                      |
| Yearly Inflation         | Ever-decreasing trend towards 0% (asymptotic) |
| Fee on TXs (flat fee)    | 0.01 ZANO                                     |
| Fee burn                 | 100% (all fees are burned)                    |

### Emission motivation

Zano decided to set the block reward relatively low to avoid unnecessary selling price pressure while keeping the chain safe from flood attacks. We have an uncapped max supply because the assumption that only the TX fees would be enough to cover miners' appetite might not be accurate and Bitcoin might become a sad example of this. A fixed emission ensures that stakers and miners will always secure the network.

On Zano, **all network fees are being burned**, meaning that with enough network usage, the daily fee burning could surpass the emission from block rewards, resulting in supply becoming deflationary over time.

![](/img/learn/emission/supply-inflation-with-burning.png)

![](/img/learn/emission/zano-supply-progression2024.png)

> For practical purposes these charts assume a fixed fee, in reality, as Zano's price goes up (and the dynamic fee mechanism is implemented) fees will likely go down in Zano-denominated terms, slightly reducing the total burned over time, still, these graphs are useful to showcase the different trends the total supply can take based on network usage.

This combination of small, minimalistic daily emissions, together with daily burns, results in **little to no sell pressure on exchanges.**

### Is the block reward enough to secure the network?

Zano has a unique consensus system in which in order to perform the classic 51% attack, you need to have at least 51% PoW hashrate AND 51% PoS power (there can also be other ratios like 20%/90% and so on (see the [whitepaper](https://github.com/hyle-team/docs/blob/master/zano/Zano_WP_1.1.pdf)).

This way an attack becomes very expensive, in particular because the purchase of a significant portion of the coins on the market would dramatically increase the price. If you try to use a small percentage of PoS coins for the attack, then the PoW power necessary for the attack becomes 800% or more. This makes it possible to establish a relatively low block reward and at the same time provide a high security level for the transaction history.

### The premine and how Zano will be funded

Zano opted to use a small premine as its primary funding strategy. Here's an in-depth look at why this decision was made, how the funds have been utilized, and what the future holds for Zano's financial sustainability.

#### Why does Zano have a premine?

The decision to proceed with a premine was rooted in the team's previous experiences and the broader crypto landscape. Unlike Bitcoin and Monero, which have benefited from substantial community donations, most cryptocurrencies struggle to secure funding through this method alone. Boolberry, the team's previous project, was no different; with just a 1% dev-tax and no premine, it was impossible to sustain development, as donations weren't enough given the extremely small community.

And so, a premine was seen as a necessary step to ensure that our next project, Zano, has the resources needed to grow, innovate, and maintain a dedicated team.

#### Premine amount

The premine consisted of 3.6M ZANO; it was set aside for ongoing project expenses, marketing, partnerships, and to pay a loan to fund initial development back in 2018.

As of December 2024, considering what has already been spent for development, the foundation fund sits at just \~5,4% of the total ZANO supply.

You can track the amount of the foundation fund via our [explorer](https://explorer.zano.org/) or by importing its tracking seed into your wallet:

`aZxat4HAWriVQ3enkGcVsrZRdMseAJswG3CSEwTqZS246VsFQ53w26eZstYsu1jWE74Atz9ajLxFnBsVTafncWNH5SMv4zHFaTS:1780c4d5dd7e97cc4a75ea8baa7977d12ef948b9a6dddc2a9a37e5e22ac7180e:1599495055`

#### Achievements funded by the premine

The choice to implement a premine has enabled us to maintain a full-time, dedicated team on Zano from the start, even through the most brutal crypto winters. This strategic decision has allowed us to excel across multiple fronts:

Development: We've continuously enhanced our blockchain technology with key upgrades like the Zarcanum hard fork, which introduced the world's first Private Proof of Stake model and support for issuing Confidential Assets.

Marketing: The premine has funded efforts to boost our visibility, including securing listings on centralized exchanges and creating educational content.

Community Engagement: With the funds, we've supported various community initiatives, offered developer bounties, and sponsored hackathons, all aimed at cultivating a dynamic and engaged Zano ecosystem.

#### Decentralizing Zano's Foundation Fund

Recognizing the importance of decentralization in cryptocurrency ethos, Zano is exploring ways to decentralize its development fund. One promising approach under consideration is the use of multisig wallets, where control over funds would be distributed among several keys, some of which could be held by community members or other trusted parties. This move would also tie well with our [upcoming governance voting system](https://zano.org/roadmap).

#### Future: Hybrid Sustainable Funding Model

Understanding the constraints of solely depending on a premine, especially given that 78% has already been utilized, Zano is set to roll out a community crowdfunding initiative. This step is now practical due to our community's steady growth. By integrating this with the premine, we're establishing a hybrid funding model that, similar to our hybrid PoW/PoS consensus, capitalizes on the strengths of both approaches.

#### What are the benefits of Community Crowdfunding?

By adopting a model akin to Monero's CCS, we can promote and manage direct contributions from the community. This approach broadens the funding base and allows development initiatives to be driven by community input rather than solely by the core team's decisions.

Thanks to combining the existing premine reserves with funds sourced from the community, Zano is working towards establishing a more sustainable financial framework for the future. We anticipate that by the time the premine is depleted, Zano will boast a sufficiently large community to support its operations solely through community contributions, mirroring the self-sustaining model Monero has achieved.

#### Conclusion

Zano's decision to implement a premine was grounded in both past experiences and the practical realities of cryptocurrency funding; it was essential for early development and growth, but with 78% spent, we are making steps towards decentralization, sustainability, and increasing community involvement. Zano is crafting a funding model that could serve as a blueprint for future crypto projects.
