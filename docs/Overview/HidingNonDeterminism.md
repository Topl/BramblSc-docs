# Hiding Nondeterminism and Organizing TxO State

One of the design goals of this SDK is to model the state of _TxOs_ (transaction outputs). The following discussion ignores transactions with multi-signature spending propositions.

Transactions have two attributes we use to reason about non-determinism. These attributes are called *confidence factor* and *chain distance*.

The SDK gets a value for the confidence factor when it queries Genus to learn the outcome of a posted transaction. The confidence factor is the likelihood that we know the correct outcome of a given transaction. For example, if the confidence factor is 1 - 10<sup>-9</sup>, that means there is only 1 chance in 10<sup>9</sup> that our knowledge about the state of the TxOs within the transaction is wrong. When a transaction has been posted and we do not yet know its outcome, the confidence factor is set to NaN.

The outputs of transactions are TxOs that contain a quantity of a type of asset. Addresses are associated with a possibly empty set of TxOs. It is through their association with TxOs that addresses are considered to have assets. 

The wallet assigns one of these states to each TxO:
* `settled`  
  After a transaction outputs a TxO to an address, the TxO is added to the address in the wallet with status of `settled`.
* `pendingSpend`  
  When a transaction is posted to spend a TxO, the wallet changes the status of the TxO to `pendingSpend`.
* `spent`  
  When the wallet learns that a transaction was successful in spending the contents of a TxO, the status of the TxO is changed to `spent`. If the transaction does not succeed within the expected amount of time, the status of the TxO is changes back to `settled`.
* `surprise`  
  In rare circumstance the wallet will discover that the status of a TxO was incorrectly set to `settled` or `spend`. When this is discovered, the status of the TxO is set to `surprise`.

We will normally learn about a surprise when we analyze the results of querying Genus for the outcome of a subsequent transaction. A `surprise` state will occur when the previously settled transaction that contains the TxOs has been reorged out of the canonical blockchain.

It is worth noting that subsequent queries of Genus may result in TxO with a `surprise` state changing to either `settled` or `spent` (reverting back to its previous state). This occurs when its transaction has reappeared in the canonical blockchain. 

Over time it becomes less likely that a transaction reorged out of the blockchain will reappear. The SDK will remove TxOs that have been in a surprise state for more than some amount of time.