# Brambl Query Functions

This document describes the interfaces that the Bramble SDK provides for querying Genus and bifrost nodes. The
descriptions are in a language-neutral form.

Various data types are used to describe the parameters and return types of functions/methods. Most of these are defined
in protobuf specifications from which language specific definitions are generated. A few collection types are not
defined in the protobuf specs:

* `Collection`
  This is an unordered collection. It provides operations to iterate over its contents and to determine if an object
  is an element of the collection.
* `List`
  This is an ordered collection. It provides operations to iterate over its contents in their order and to determine if
  an object is an element of the collection.
* `Stream`
  is a first-in-first-out data structure to which data can be asynchronously added and removed.

## Interface BifrostQuery

The details of this interface are yet to be specified. They will be based on the bifrost_rpc specification.

## Interface GenusBlockQuery

This interface is used to query Genus to query a database get information extracted from the canonical blockchain.

There will be two implementation of this interface. One will use gRPC to access a stand-alone Genus server that runs
independently of Topl clients. The other is to access a Genus database that is embedded in the Topl client.

### getBlockById

#### Signature(s)

```
getBlockById(id: models.TypedIdentifier, timeoutMillis: uint64, confidenceFactor: double)
    returns co.topl.proto.models.block.FullBlock
```

#### Description

Retrieve a block with the specified `id` from the configured Genus service. This returns its result when there is a
block present in the genus service with the specified id and the confidence factor of the block is greater than or equal
to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `id` the ID of the block to find
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block is reorged. The default value is 0.9999999.

#### Returns

A `co.topl.proto.models.block.FullBlock` that contains the block header and block body for the with block with the
specified id.

#### Errors

The errors that the method/function will produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for getBlockById is [described on a separate page](brambl_query_tests/getBlockById_test)

### getBlockByHeight

#### Signature(s)

```
  getBlockByHeight(height: int64, timeoutMillis: uint64, confidenceFactor: double)
      returns co.topl.proto.models.block.FullBlock
```

#### Description

Retrieve the block at the specified height from the configured Genus service, where the height of the genesis block
is 1. This returns a result when there is a block present in the genus service at the specified height and the
confidence factor of the block is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `height` the height of the block to get. The height of the genesis block 1.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A `co.topl.proto.models.block.FullBlock` that contains the block header and block body for the block with at specified
height.

#### Error

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure
The testing procedure for getBlockByHeight is [described on a separate page](brambl_query_tests/getBlockByHeight_test)

### getBlockByDepth

#### Signature(s)

```
  getBlockByDepth(depth: int64, timeoutMillis: uint64, confidenceFactor: double)
      returns co.topl.proto.models.block.FullBlock
```

#### Description

Retrieve the block at the specified depth from the configured Genus service. This returns its result immediately.
The block at depth 1 is the highest block with a confidence factor that is greater than or
equal to the value of the `confidenceFactor` parameter.

#### Parameters

* `depth` the depth of the block to get. The block at depth 1 is the highest block with a confidence factor that is
  greater than or equal to the value of the `confidenceFactor` parameter.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A `co.topl.proto.models.block.FullBlock` that contains the block header and block body for the block with at specified
depth.

#### Error

The errors that the method/function produces include:

* There is no block at the requested depth or the block is not visible due to its confidence factor.
* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure
The testing procedure for getBlockByDepth is [described on a separate page](brambl_query_tests/getBlockByDepth_test)

## Interface GenusTransactionQuery

### getTransactionById

#### Signature(s)

```
  getTransactionById(id: models.TransactionId, timeoutMillis: uint64, confidenceFactor: double)
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
* `timeoutMillis` The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A transaction receipt that includes the specified transaction and genus-supplied metadata.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that the value of `xactnId` is a transaction ID
* **And** that there is already a transaction with the ID `xactnId` in the Genus service's database
* **And** the transaction with ID `xactnId` has a confidence factor greater than 0.99
* **When**
    ```
    getTransactionById(xactnId, 10, 0.9)
    ```
* **Then** the call immediately returns the transaction receipt

##### Happy Path with Waiting

* **Given** that the value of `xactnId` is a transaction ID
* **And** that there is no transaction with the ID `xactnId` in the Genus service's database
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.9)
    ```
* **And Then** A transaction with ID `xactnId` is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the transaction's confidence factor to greater than 0.9 in
  less than 3 seconds.
* **Then** the call returns the transaction receipt

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTransactionById(xactnId)
    ```
* **Then** the values passed to the gRPC library for `timeoutMillis` and `confidenceFactor` are 2000 and 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTransactionById(xactnId, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getTransactionByAddressStream

#### Signature(s)

```
  getTransactionsByAddressStream(addresses: Collection[Address],
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
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A stream of transaction receipts that includes the specified transactions with genus-supplied metadata.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already transactions with inputs or outputs associated with the specified addresses (some
  with only an input, some with only an output and some with both) in the Genus service's database
* **And** these transaction have a confidence factor greater than 0.9
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call immediately returns transaction receipts for the matching transactions in the database
* **Then** additional transactions are added to the genus database that have inputs or outputs associated with the
  specified addresses (some with only an input, some with only an output and some with both)
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new transactions are returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTransactionsByAddressStream(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTransactionsByAddressStream(xactnId, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getTxosByAddress

#### Signature(s)

```
  getTxosByAddress(addresses: List[Address], timeoutMillis: uint64, confidenceFactor: double)
      returns Map[String, Collection[Txo]]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. This returns immediately.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A Map whose keys addresses as base58 encoded strings and whose values are a collection of TxOs associated with their key
address.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transaction have a confidence factor greater than 0.9
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call immediately returns matching TxOs from the database

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAddress(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTxosByAddress(addresses, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getTxosByAddressStream

#### Signature(s)

```
  getTxosByAddressStream(addresses: List[Address], timeoutMillis: uint64, confidenceFactor: double) 
           returns Stream[Map[String, Collection[Txo]]]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A stream of Maps whose keys addresses as base58 encoded strings and whose values are a collection of TxOs.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transaction have a confidence factor greater than 0.99
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call immediately returns the matching TxOs in the database
* **Then** additional transactions are added to the genus database that have UTxOs or STxOs that match the request
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** a map of the new TxOs is returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAddressStream(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTxosByAddressStream(addresses, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getTxosByAssetLabel

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

* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value is 0.9999999.

#### Returns

A stream of TxOs.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path LVL

* **Given** that there are already TxOs (spent and unspent) that have LVL boxes
* **And** their associated transactions have a confidence factor greater than 0.9
* **When**
    ```
    getTxosByAssetLabel("LVL", 1000, 0.9)
    ```
* **Then** the call immediately begins returning the matching TxOs
* **After** all the matching TxOs in the database have been returned
* **Then** additional transactions are added to the genus database with UTxOs and STxOs that contain LVL boxes
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new TxOs are returned as part of the stream.

##### Happy Path TOPL

* **Given** that there are already TxOs (spent and unspent) that have TOPL boxes
* **And** their associated transactions have a confidence factor greater than 0.9
* **When**
    ```
    getTxosByAssetLabel("TOPL", 1000, 0.9)
    ```
* **Then** the call immediately begins returning the matching TxOs
* **After** all the matching TxOs in the database have been returned
* **Then** additional transactions are added to the genus database with UTxOs and STxOs that contain TOPL boxes
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new TxOs are returned as part of the stream.

##### Happy Path AssetV1

* **Given** that `v1Asset` has a value that is a string that identifies a V1 asset version and minting address
* **And** there are already TxOs (spent and unspent) that have `AssetV1` boxes that match the version and minting
  address specified by `v1Asset`
* **And** their associated transactions have a confidence factor greater than 0.9
* **When**
    ```
    getTxosByAssetLabel(v1Asset, 1000, 0.9)
    ```
* **Then** the call immediately begins returning the matching TxOs
* **After** all the matching TxOs in the database have been returned
* **Then** additional transactions are added to the genus database with UTxOs and STxOs that contain AssetV1 boxes with
  the same minting address and version as specified in `v1Asset`
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new TxOs are returned as part of the stream.

##### Happy Path AssetV2

* **Given** that `v2` has a value that is a string that identifies an AssetV2 group and series constructor
* **And** there are already TxOs (spent and unspent) that have `AssetV2` boxes that match the group and series
  specified by `v2`
* **And** their associated transactions have a confidence factor greater than 0.9
* **When**
    ```
    getTxosByAssetLabel(tam2Asset, 1000, 0.9)
    ```
* **Then** the call immediately begins returning the matching TxOs
* **After** all the matching TxOs in the database have been returned
* **Then** additional transactions are added to the genus database with UTxOs and STxOs that contain AssetV2 boxes with
  the same group and series
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new TxOs are returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAssetLabel("LVL")
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999 and the value passed
  for `timeoutMillis` is 1000.

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAssetLabel("LVL", 1000, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAssetLabel("LVL", 1000, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAssetLabel("LVL", 1000, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTxosByAssetLabel("LVL", 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### createOnChainTransactionIndex

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
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

True if the index was created; False if the index already existed.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path for JSON and pre-population

* **Given** the Genus database does not contain any transaction indexes
* **And** the value of `fooSpec` is an `IndexSpec` object that specifies:
    * name is `fooIndex`
    * fooSpec specifies that the index should be based on transactions with data that is a JSON object a that the
      index should use the value of a field named "id".
    * indexFilter specifies that only records matching `"shipmentNumber"="12345"` should be included in the index
* **And** there are multiple existing transactions in the database that match the filter
* **When**
    ```
    createOnChainTransactionIndex(fooSpec, true, 99999)
    ```
* **Then** the call returns true
* **When**
    ```
    createOnChainTransactionIndex(fooSpec, true, 99999)
    ```
* **Then** the call immediately returns false.
* **When**
   ```
  getExistingTransactionIndexes()
   ```
* **Then** the call returns a collection of one `IndexSpec` object that should be equal to the object used to create
  the `fooIndex` index.
* **Given** that there are transactions in the database that should not be included in the `fooIndex` index, either
  because their data is not a JSON object or because they do not contain `"shipmentNumber"="12345"`
* **When**
  ```
  getIndexedTransactions("fooIndex")  
  ```
* **Then** the call returns all transactions that should be included in the index and none of the transaction that
  should not be included.
* **Given** that the value of `idx` is a list that contains one `IndexMatchValue` that matches the value of the `id`
  field in the data of exactly on of the transactions returned by the previous call
* **When**
  ```
  getIndexedTransactions("fooIndex", idx)
   ```
* **Then** the call should return exactly one transaction that has the correct `id` value in its data

##### Happy Path for JSON without pre-population

* **Given** the previous tests for `getIndexedTransactions` were successful
* **And** there is no existing index in the database named `fooIndex2`
* **And** the value of `fooSpec2` is an `IndexSpec` object that specifies:
    * name is `fooIndex2`
    * fooSpec specifies that the index should be based on transactions with data that is a JSON object and that the
      index should use the value of a field named "id".
    * indexFilter specifies that only records matching `"shipmentNumber"="12345"` should be included in the index
* **And** there are multiple existing transactions in the database that match the filter
* **When**
    ```
    createOnChainTransactionIndex(fooSpec2, false, 99999)
    ```
* **Then** the call returns true
* **When**
   ```
  getExistingTransactionIndexes()
   ```
* **Then** the call returns a collection of two `IndexSpec` objects. One should be equal to `fooSpec` and the other
  equal to `fooSpec2`
* **When**
  ```
  getIndexedTransactions("fooIndex2")  
  ```
* **Then** the call returns an empty stream because the index was not pre-populated.

##### Happy Path for CSV

* **Given** the previous tests for `getIndexedTransactions` were successful
* **And** there is no existing index in the database named `csvIndex`
* **And** the value of `csvSpec` is an `IndexSpec` object that specifies:
    * name is `csvIndex`
    * csvSpec specifies that the index should be based on transactions with data that is in CSV format and that the
      index should use the value of a field named "id".
    * indexFilter specifies that only records matching `"12345"` should be included in the index
* **And** there are multiple existing transactions in the database that match the filter
* **When**
    ```
    createOnChainTransactionIndex(csvSpec, false, 99999)
    ```
* **Then** the call returns true
* **When**
   ```
  getExistingTransactionIndexes()
   ```
* **Then** the call returns a collection of three `IndexSpec` objects. One should be equal to `fooSpec`, one equal
  to `csvSpec2` and one equal to `csvSpec`.
* **When**
  ```
  getIndexedTransactions("csvIndex")  
  ```
* **Then** the call returns all transactions that should be included in the index and none of the transaction that
  should not be included.
* **Given** that the value of `idx` is a list that contains one `IndexMatchValue` that matches the value of the `id` field in the
  data of exactly on of the transactions returned by the previous call
* **When**
  ```
  getIndexedTransactions("csvIndex", idx)
   ```
* **Then** the call should return exactly one transaction that has the correct `id` value in its data

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    createOnChainTransactionIndex(csvSpec)
    ```
* **Then** the value passed to the gRPC library for `populate` and `confidenceFactor` are `false` and 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    createOnChainTransactionIndex(csvSpec, false, 99999)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    createOnChainTransactionIndex(csvSpec, false, 99999)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    createOnChainTransactionIndex(csvSpec, false, 99999)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    createOnChainTransactionIndex(csvSpec, false, 99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getExistingTransactionIndexes

#### Signature(s)

```
  getExistingTransactionIndexes(timeoutMillis: uint64) returns Collection[IndexSpec]
```

#### Description

Return a collection of `IndexSpec` objects, where each `IndexSpec` object corresponds to an index in the Genus database.
The content of each `IndexSpec` object is the same as the `IndexSpec ` object used to create the index.

#### Parameters

* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).

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

The following testing scenarios are required:

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getExistingTransactionIndexes()
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getExistingTransactionIndexes(99999)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getExistingTransactionIndexes(99999)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getExistingTransactionIndexes(99999)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getExistingTransactionIndexes(99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getIndexedTransactions

#### Signature(s)

```
  getIndexedTransactions(indexName: String, keys: List[IndexMatchValue], 
                         maxResults: int32, skipResults: uint64, timeoutMillis: uint64)
      returns Stream[TransactionReceipt]
```

#### Description

Retrieve transactions that are included in the named index. If the `keys` parameter is supplied, then only transactions
whose index records match the specified key values are included in the result.

#### Parameters

* `indexSpec` Is an object that describes the index to be created. It includes
* `keys` A list of values to match against field in records of the named index. The default value for this is an empty
  list, which allows all transactions covered by the index to be returned.
* `maxResults` is the maximum number of transactions to be returned. This parameter can be used with the `skipResults`
  parameter to page forward or backward through the transactions.<br/>
  The default value for this parameter is 2<sup>31</sup>-1.
* `skipResults` is the number of transactions to be skipped. This parameter can be used with the `maxResults` parameter
  to page forward or backward through the transactions.<br/>
  The default value for this parameter is 0.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

A stream of transactions that were found through the index.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

Some happy path cases are covered by tests for other functions.

The following testing scenarios are required:

##### Happy Path for paging

* **Given** the tests for `createOnChainTransactionIndex` and `getExistingTransactionIndexes` have successfully
  completed.
* **And** there is an index in the database named `bigIndex`
* **And** there are at least exactly 25 transactions that are covered by `bigIndex`
* **And** `emptyList` is an empty list of `IndexMatchValue`
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 0)
    ```
* **Then** the call returns 10 transactions
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 10)
    ```
* **Then** the call returns 10 transactions
* **When**
   ```
    getIndexedTransactions("bigIndex", emptyList, 10, 20)
   ```
* **Then** the call returns 5 transactions
* **When**
  ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25)
  ```
* **Then** the call returns no transactions

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getIndexedTransactions("csvIndex")
    ```
* **Then** the values passed to the gRPC library are:
    * for `keys` an empty list of `IndexMatchValue`
    * for `maxResults` 2147483647
    * for `skipResults` 0
    * for `confidenceFactor` 0.9999999
    * for `timeoutMillis` 1000

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25, 99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### dropIndex

#### Signature(s)

```
  dropIndex(indexName: String, timeoutMillis: uint64) returns boolean
```

#### Description

Delete an index from the Genus database.

#### Parameters

* `indexName` The name of the index to be deleted.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value is 1000 (1 second).

#### Returns

True if the index was deleted otherwise false if the index did not exist.

#### Errors

The errors that the method/function produces include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** the tests for `createOnChainTransactionIndex`, `getExistingTransactionIndexes` and 'getIndexedTransactions'
  have successfully completed.
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call returns `true`
* **When**
  ```
    getExistingTransactionIndexes()
  ```
* **Then** the call returns a collection of two `IndexSpec` objects. One should be equal to `fooSpec` and the other
  equal to `fooSpec2`.
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call returns `false`

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    dropIndex("csvSpec")
    ```
* **Then** the value passed to the gRPC library for `timeoutMillis` is 1000

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    dropIndex("csvSpec", 1000)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

