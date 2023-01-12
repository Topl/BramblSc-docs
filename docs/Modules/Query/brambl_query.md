# Brambl Query Functions

This document describes the interfaces that the Bramble SDK provides for querying Genus and bifrost nodes. The
descriptions are in a language-neutral form. To be lanuage-neutral,
we [follow a set of assumptions](../../Overview/Assumptions).

Three interfaces are documented on this page. They are:

* [BifrostQuery](#interface-bifrostquery)
* [GenusBlockQuery](#interface-genusblockquery)
* [GenusTransactionQuery](#interface-genustransactionquery)

## Interface BifrostQuery

The details of this interface are incomplete. They will be based on the bifrost_rpc specification.

Here is a summary of the methods/functions in this interface:

* [getNodeConfig](#getnodeconfig) — Get the configuration of the Bifrost node we are querying

### method getNodeConfig

#### Signature(s)

```
getNodeConfig(timeoutMillis: uint64) returns co.topl.proto.node.NodeConfigMap
```

#### Description

Retrieve the configuration of the Bifrost node we are connected to.

#### Parameters
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).

#### Returns
A `co.topl.proto.node.NodeConfig` that contains the node's configuration.

#### Errors

The errors that the method/function will produce include:

* No properly configured Bifrost node
* Unable to send request to Bifrost node
* The Bifrost node returned an error
* The Bifrost node did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for `getNodeConfig` is [described on a separate page](brambl_query_tests/getNodeConfig_test)

## Interface GenusBlockQuery

This interface is used to query Genus to query a database get information extracted from the canonical blockchain.

There will be two implementation of this interface. One will use gRPC to access a stand-alone Genus server that runs
independently of Topl clients. The other is to access a Genus database that is embedded in the Topl client.

Here is a summary of the methods/functions in this interface:

* [getBlockByDepth](#getblockbydepth) — Get the block at a specified depth.
* [getBlockByHeight](#getblockbyheight) — get the block at a specified height.
* [getBlockById](#getblockbyid) — Get a block using its Id.

### method getBlockById

#### Signature(s)

```
getBlockById(id: co.topl.proto.common.BlockId, timeoutMillis: uint64, confidenceFactor: double)
    returns co.topl.proto.node.FullBlock
```

#### Description

Retrieve a block with the specified `id` from the configured Genus service. This returns its result when there is a
block present in the genus service with the specified id and the confidence factor of the block is greater than or equal
to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `id` the ID of the block to find
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block is reorged. The default value is 0.9999999.

#### Returns

A `co.topl.proto.node.FullBlock` that contains the block header and block body for the with block with the
specified id.

#### Errors

The errors that the method/function will produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for getBlockById is [described on a separate page](brambl_query_tests/getBlockById_test)

### method getBlockByHeight

#### Signature(s)

```
  getBlockByHeight(height: uint64, timeoutMillis: uint64, confidenceFactor: double)
      returns co.topl.proto.node.FullBlock
```

#### Description

Retrieve the block at the specified height from the configured Genus service, where the height of the genesis block
is 1. This returns a result when there is a block present in the genus service at the specified height and the
confidence factor of the block is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `height` the height of the block to get. The height of the genesis block 1.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A `co.topl.proto.node.FullBlock` that contains the block header and block body for the block with at specified
height.

#### Error

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getBlockByHeight is [described on a separate page](brambl_query_tests/getBlockByHeight_test)

### method getBlockByDepth

#### Signature(s)

```
  getBlockByDepth(depth: int64, timeoutMillis: uint64, confidenceFactor: double)
      returns co.topl.proto.node.FullBlock
```

#### Description

Retrieve the block at the specified depth from the configured Genus service. This returns its result immediately.
The block at depth 1 is the highest block with a confidence factor that is greater than or
equal to the value of the `confidenceFactor` parameter.

#### Parameters

* `depth` the depth of the block to get. The block at depth 1 is the highest block with a confidence factor that is
  greater than or equal to the value of the `confidenceFactor` parameter.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A `co.topl.proto.node.FullBlock` that contains the block header and block body for the block with at specified
depth.

#### Error

The errors that the method/function produces include:

* There is no block at the requested depth or the block is not visible due to its confidence factor.
* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getBlockByDepth is [described on a separate page](brambl_query_tests/getBlockByDepth_test)

## Interface GenusTransactionQuery

This interface is used to query Genus to query a database get transaction information extracted from the canonical
blockchain.

There will be two implementation of this interface. One will use gRPC to access a stand-alone Genus server that runs
independently of Topl clients. The other is to access a Genus database that is embedded in the Topl client.

Here is a summary of the methods/functions in this interface:

* Transaction Queries by Blockchain Identifiers
    * [getTransactionById](#gettransactionbyid) — Get a transaction using its ID.
    * [getTransactionByAddressStream](#gettransactionbyaddressstream) — Get a stream of transactions connected to a
      given
      address

<p></p>

* Transaction Queries Using Application Defined Indexes
    - [createOnChainTransactionIndex](#createonchaintransactionindex) — Create transaction index
    - [getExistingTransactionIndexes](#getexistingtransactionindexes) — Get existing transaction indexes
    - [getIndexedTransactions](#getindexedtransactions) — Get transactions using an index
    - [dropIndex](#dropindex) — drop a named index

<p></p>

* TxO Queries
    * [getTxosByAddress](#gettxosbyaddress) — Get TxOs that are currently associated with specified addresses
    * [getTxosByAddressStream](#gettxosbyaddressstream) — Get TxOs that are associated with specified addresses now and
      in the future.
    * [getTxosByAssetLabel](#gettxosbyassetlabel) — Tet TxOs having a specified address label.

### method getTransactionById

#### Signature(s)

```
  getTransactionById(id: co.topl.proto.common.TransactionId, timeoutMillis: uint64, confidenceFactor: double)
      returns TransactionReceipt
```

#### Description

Retrieve a transaction with the specified `id` from the configured Genus service. This returns its result when there is
a transaction present in the genus service with the specified id and the confidence factor of the block that contains
the transaction is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method/function produces an error.

#### Parameters

* `id` the ID of the transaction to find.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A transaction receipt that includes the specified transaction and genus-supplied metadata.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for getTransactionById
is [described on a separate page](brambl_query_tests/getTransactionById_test)

### method getTransactionByAddressStream

#### Signature(s)

```
  getTransactionsByAddressStream(addresses: Collection[SpendingAddress],
                                 timeoutMillis: uint64,
                                 confidenceFactor: double) 
      returns Stream[TransactionReceipt]
```

#### Description

Retrieve transactions that have an input or output associated with any of the specified addresses from the configured
Genus service. This returns a stream of existing and future transactions from the genus service with the specified id
that are in a block with confidence factor greater than or equal to the value of the `confidenceFactor` parameter.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A stream of transaction receipts that includes the specified transactions with genus-supplied metadata.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getTransactionByAddressStream
is [described on a separate page](brambl_query_tests/getTransactionByAddressStream_test)

### method getTxosByAddress

#### Signature(s)

```
  getTxosByAddress(addresses: List[SpendingAddress], timeoutMillis: uint64, confidenceFactor: double)
      returns Map[String, Collection[Txo]]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. This returns immediately.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A Map whose keys addresses as base58 encoded strings and whose values are a collection of TxOs associated with their key
address.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getTxosByAddress is [described on a separate page](brambl_query_tests/getTxosByAddress_test)

### method getTxosByAddressStream

#### Signature(s)

```
  getTxosByAddressStream(addresses: List[SpendingAddress], timeoutMillis: uint64, confidenceFactor: double) 
           returns Stream[Map[String, Collection[Txo]]]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A stream of Maps whose keys addresses as base58 encoded strings and whose values are a collection of TxOs.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getTxosByAddressStream
is [described on a separate page](brambl_query_tests/getTxosByAddressStream_test)

### method getTxosByAssetLabel

#### Signature(s)

```
  getTxosByAssetLabel(assetLabel: String, timeoutMillis: uint64, confidenceFactor: double)
      returns Stream[Txo]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that contain the type of asset specified by the
asset label and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.

#### Parameters

* `assetLabel` Is a string that identifies the type of asset in a TxO. The format of the assetLabel depends on the type
  of box that is in the TxO:

  | Box Type | Format                                                                                                                                                |
  |----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Empty    | `"EMPTY"`                                                                                                                                             |
  | Lvl      | `"LVL"`                                                                                                                                               |
  | Topl     | `"TOPL"`                                                                                                                                              |
  | AssetV1  | _version_&#124;_address_<br/>where _version_ is the hex value of the version byte and _address_ is the base58 encoded minting address.                |
  | AssetV2  | _group_:_series_<br/>where _group_ is the base58 encoded ID of the group constructor and _series_ is the base58 encoded id of the series constructor. |

* `timeoutMillis` _(optional)_  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A stream of TxOs.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

The testing procedure for getTxosByAssetLabel
is [described on a separate page](brambl_query_tests/getTxosByAssetLabel_test)

### method createOnChainTransactionIndex

#### Signature(s)

```
  createOnChainTransactionIndex(indexSpec: IndexSpec, populate: boolean, timeoutMillis: uint64)
      returns boolean
```

#### Description

Create an index on transactions in the Genus database. The index will allow transactions to be found quickly based on
the contents of their data field.

This returns as soon as the index is created. After the index is created, if the `populate` parameter is true then Genus
will asynchronously populate the index.

#### Parameters

* `indexSpec` Is an object that describes the index to be created. It includes
    * name — The name of the index
    * indexFieldSpec — describes how to parse the transaction date to find the fields that are the index values.
      JSON and CSV are supported for this. A JSON indexFieldSpec will cause transactions with data that is not a valid
      JSON object containing the needed fields to be excluded from the index.<br/>
      If no value is provided, then the index will include every transaction to be included in the index using the full
      contents of their data fields as index keys.
    * indexFilter — An optional regular expression to filter which transactions are included in the created index. If
      this is specified then only transactions whose data matches the regular expression are included in the index.
      If no indexFilter is specified, then all transactions are included in the index if the indexFieldSpec value allows
      it.
* `populate` If this is true then existing transactions in the database are scanned to populate the index; otherwise the
  index is left empty until a new transaction that passes the filter gets into the index.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

True if the index was created; False if the index already existed.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for createOnChainTransactionIndex
is [described on a separate page](brambl_query_tests/createOnChainTransactionIndex_test)

### method getExistingTransactionIndexes

#### Signature(s)

```
  getExistingTransactionIndexes(timeoutMillis: uint64) returns Collection[IndexSpec]
```

#### Description

Return a collection of `IndexSpec` objects, where each `IndexSpec` object corresponds to an index in the Genus database.
The content of each `IndexSpec` object is the same as the `IndexSpec ` object used to create the index.

#### Parameters

* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

a collection of `IndexSpec` objects, where each `IndexSpec` object corresponds to an index in the Genus database.
The content of each `IndexSpec` object is the same as the `IndexSpec ` object used to create the index.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

Happy path testing of `getExistingTransactionIndexes` is done as part of testing `createOnChainTransactionIndex`.

The testing procedure for `getExistingTransactionIndexes`
is [described on a separate page](brambl_query_tests/getExistingTransactionIndexes_test)

### method getIndexedTransactions

#### Signature(s)

```
  getIndexedTransactions(indexName: String, keys: List[IndexMatchValue], 
                         maxResults: int32, skipResults: uint64, timeoutMillis: uint64,
                         confidenceFactor: double)
      returns Stream[TransactionReceipt]
```

#### Description

Retrieve transactions that are included in the named index. If the `keys` parameter is supplied, then only transactions
whose index records match the specified key values are included in the result.

#### Parameters

* `indexSpec` Is an object that describes the index to be created. It includes
* `keys` A list of values to match against field in records of the named index. The default value for this is an empty
  list, which allows all transactions covered by the index to be returned.
* `maxResults` _(optional)_ is the maximum number of transactions to be returned. This parameter can be used with the
  `skipResults` parameter to page forward or backward through the transactions.<br/>
  The default value for this parameter is 2<sup>31</sup>-1.
* `skipResults` _(optional)_ is the number of transactions to be skipped. This parameter can be used with the
  `maxResults` parameter
  to page forward or backward through the transactions.<br/>
  The default value for this parameter is 0.
* `timeoutMillis` _(optional)_  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` _(optional)_ is 1 minus the probability that a block will be reorged. The default value is
  0.9999999.

#### Returns

A stream of transactions that were found through the index.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened
* `confidenceFactor` is not >= 0.0 and <= 1.0

#### Testing Procedure

Some happy path cases are covered by tests for other functions.

The testing procedure for `getIndexedTransactions`
is [described on a separate page](brambl_query_tests/getIndexedTransactions_test)

### method dropIndex

#### Signature(s)

```
  dropIndex(indexName: String, timeoutMillis: uint64) returns boolean
```

#### Description

Delete an index from the Genus database.

#### Parameters

* `indexName` _(optional)_ The name of the index to be deleted.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

True if the index was deleted otherwise false if the index did not exist.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for `dropIndex` is [described on a separate page](brambl_query_tests/dropIndex_test)
