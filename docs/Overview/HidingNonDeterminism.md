# Hiding Nondeterminism

One of the design goals of this SDK is to hide the probabilistic nature of the blockchain. We will use the account abstraction to help accomplish this. The following discussion ignores transaction with multi-signature spending propositions.

An account is a sequence of addresses. An account has two attributes we will use to reason about non-determinism. These attributes are called *confidence factor*, *threshold confidence factor* and *state*.

The confidence factor is the likelihood that we know the correct outcome of the last transaction posted against an address of the account. For example, if the confidence factor is 1 - 10<sup>-9</sup>, that means there is only 1 chance in 10<sup>9</sup> that our knowledge about the outcome of the last transaction posted against the account is wrong. When a transaction has been posted to an account and we know that we do not yet know the outcome of the transaction, the confidence factor is 0.

Before any transactions have output any assets to addresses of an account, its confidence factor is 1 because we are certain that the account has no assets. If we are certain that the last transaction posted to an account failed, then the account’s confidence factor is the confidence factor it had before the failed transaction was posted.

The SDK gets a value for the confidence factor when it queries Genus to learn the outcome of a posted transaction. Since we can never be entirely certain of a transaction’s success, once we believe that a transaction has been successfully posted to an account its confidence factor will be less than 1.

An account’s threshold confidence factor is a value to be compared to the account’s confidence factor. If the confidence factor is greater than the threshold confidence factor, then we will behave as if we were certain of the outcome of the last posted transaction.

The outputs of transactions are boxes that contain a quantity of a type of asset. Addresses are associated with a possibly empty set of boxes. It is through their association with boxes that addresses are considered to have assets. It is through addresses that accounts are considered to have assets.

The wallet assigns one of these states to each box:
* `settled` \
  After a transaction outputs a box to an address, the box is added to the address in the wallet with
  status of `settled`.
* `pendingSpend` \
  When a transaction is posted to spend a box, the wallet changes the status of the box to `pendingSpend`.
* `spent` \
  When the wallet learns that a transaction was successful in spending the contents of a box, the status of
  the box is changed to `spent`. If the transaction does not succeed withing the expected amount of time,
  the status of the box is changes back to `settled`.
* `surprise`
  In rare circumstance the wallet will discover that the status of a box was incorrectly set to `settled`
  or `spend`. When this is discovered, the status of the box is set to `surprise`. 

> ⚠️ What to do about accounts or addresses with a status of ``` surprise ``` is an open issue.

For boxes that have a single signature spending proposition, we will normally learn about a surprise when we analyse the results of querying Genus for the outcome of a subsequent transaction.