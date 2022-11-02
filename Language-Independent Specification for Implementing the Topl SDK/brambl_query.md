# Bramble Query Functions

## Interface GenusBlockQuery

### getBlockById

#### Signature(s)

```
getBlockById(id: models.TypedIdentifier, timeoutMillis: uint64, confidenceFactor: double)
    returns models.BlockV2.Full
```

#### Description

Retrieve a block with the specified `id` from the configured Genus service. This returns its result when there is a
block present in the genus service with the specified id and the confidence factor of the block is greater than or equal
to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `id` the ID of the block to find
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A `BlockV2.Full` that contains the block header and block body for the with block with the specified id.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that there is already a block with the ID *blockId* in the Genus service's database
* **And** block *blockId* has a confidence factor greater than 0.999
* **When**
    ```
    getBlockById(blockId, 10, 0.9)
    ```
* **Then** the call immediately returns the `BlockV2.Full`

##### Happy Path with Waiting

* **Given** that there is no block with the ID *blockId* in the Genus service's database
* **When**
    ```
    getBlockById(blockId, 5000, 0.99)
    ```
* **And Then** A block *blockId* is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the block's confidence factor to greater than 0.99 in
  less than 3 seconds.
* **Then** the call returns the `BlockV2.Full`

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getBlockById(blockId)
    ```
* **Then** the values passed to the gRPC library for `timeoutMillis` and `confidenceFactor` are 2000 and 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getBlockById(blockId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getBlockById(blockId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getBlockById(blockId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getBlockById(blockId, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getBlockByHeight

#### Signature(s)

```
  getBlockByHeight(height: int64, timeoutMillis: uint64, confidenceFactor: double) returns models.BlockV2.Full
```

#### Description

Retrieve the block at the specified height from the configured Genus service, where the height of the genesis block
is 1. This returns its result when there is a block present in the genus service at the specified height and the
confidence factor of the block is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `height` the height of the block to get. The height of the genesis block 1.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A `BlockV2.Full` that contains the block header and block body for the block with at specified height.

#### Error

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that there is already a block at height *h* in the Genus service's database
* **And** the block at height *h* has a confidence factor greater than 0.999
* **When**
    ```
    getBlockByHeight(h, 10, 0.9)
    ```
* **Then** the call immediately returns the `BlockV2.Full`

##### Happy Path with Waiting

* **Given** that there is no block at height *h* in the Genus service's database
* **When**
    ```
    getBlockByHeight(h, 5000, 0.99)
    ```
* **And Then** A block at height *h* is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the block's confidence factor to greater than 0.99 in
  less than 3 seconds.
* **Then** the call returns the `BlockV2.Full`

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getBlockByHeight(h)
    ```
* **Then** the values passed to the gRPC library for `timeoutMillis` and `confidenceFactor` are 2000 and 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getBlockByHeight(h, 5000, 0.99)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getBlockByHeight(h, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getBlockByHeight(h, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getBlockByHeight(h, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getBlockByDepth

#### Signature(s)

```
  getBlockByDepth(depth: int64, timeoutMillis: uint64, confidenceFactor: double) returns models.BlockV2.Full
```

#### Description

Retrieve the block at the specified depth from the configured Genus service. This returns its result immediately.
The block at depth 1 is the highest block with a confidence factor that is greater than or
equal to the value of the `confidenceFactor` parameter.

#### Parameters

* `depth` the depth of the block to get. The block at depth 1 is the highest block with a confidence factor that is
  greater than or equal to the value of the `confidenceFactor` parameter.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A `BlockV2.Full` that contains the block header and block body for the block with at specified depth.

#### Error

The errors that the method/function will be able to produce include:

* There is no block at the requested height or the block is not visible due to its confidence factor.
* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path with Varied Confidence Factor

* **Given** that there are already at least six blocks other in the Genus service's database
* **And** no additional blocks are added to the Genus service's database while this test is in progress
* **And** the block at the top of the blockchain has a confidence factor less than .9
* **And** there is a block in the blockchain other than the genesis block that has a confidence factor greater than
  0.99
* **When**
    ```
    getBlockByDepth(h, 0.0)
    ```
* **Then** the call immediately returns a `BlockV2.Full` for the block that is at the top of the blockchain
* **When**
    ```
    getBlockByDepth(h, 0.9)
    ```
* **Then** the call immediately returns a `BlockV2.Full` for a block that is at a lower height in the blockchain.

##### Non Existent Block

* **Given** that the current height of the blockchain is *n* in the Genus service's database
* **When**
    ```
    getBlockByDepth(n+1, 0)
    ```
* **Then** the call returns immediately with an error

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getBlockByDepth(n)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getBlockByDepth(n, 5000, 0.99)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getBlockByDepth(n, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getBlockByDepth(n, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getBlockByDepth(n, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

## Interface GenusTransactionQuery

### getTransactionById

#### Signature(s)

```
  getTransactionById(id: models.TransactionId, timeoutMillis: uint64, confidenceFactor: double) returns TransactionReceipt
```

#### Description

Retrieve a transaction with the specified `id` from the configured Genus service. This returns its result when there is
a
transaction present in the genus service with the specified id and the confidence factor of the block that contains the
transaction is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `id` the ID of the transaction to find.
* `timeoutMillis` The maximum number of milliseconds to wait. The default value will be 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A transaction receipt that includes the specified transaction and genus-supplied metadata.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that there is already a transaction with the ID *xactnId* in the Genus service's database
* **And** transaction *xactnId* has a confidence factor greater than 0.999
* **When**
    ```
    getTransactionById(xactnId, 10, 0.9)
    ```
* **Then** the call immediately returns the transaction receipt

##### Happy Path with Waiting

* **Given** that there is no transaction with the ID *xactnId* in the Genus service's database
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.99)
    ```
* **And Then** A transaction *xactnId* is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the transaction's confidence factor to greater than 0.99 in
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
  getTransactionsByAddressStream(addresses: List[Address], timeoutMillis: uint64, confidenceFactor: double) 
      returns Stream[TransactionReceipt]
```

#### Description

Retrieve transactions that have an input or output associated with any of the specified addresses from the configured
Genus service. This returns a stream of existing and future transactions from the genus service with the specified id
that are in a block with confidence factor greater than or equal to the value of the `confidenceFactor` parameter.

#### Parameters

* `addresses` The addresses to search for.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A stream of transaction receipts that includes the specified transactions and genus-supplied metadata.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service did not return a result before the timeout happened

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already transactions with inputs or outputs associated with the specified addresses (some
  with only an input, some with only an output and some with both) in the Genus service's database
* **And** these transaction have a confidence factor greater than 0.99
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
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A Map whose keys addresses as base58 encoded strings and whose values are a collection of TxOs.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transaction have a confidence factor greater than 0.99
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call immediately returns the matching TxOs in the database

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
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A stream of Maps whose keys addresses as base58 encoded strings and whose values are a collection of TxOs.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error

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
* **Then** additional transactions are added to the genus database that have UTxOs and STxOs that match the request
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
  getTxosByAssetLabel(assetLabel: String, timeoutMillis: uint64, confidenceFactor: double) returns Stream[Txo]
```

#### Description

Retrieve from the configured Genus service TxOs (spent or unspent) that contain the type of asset specified by the
asset label and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.

#### Parameters

* `assetLabel` Is a string that identifies the type of asset in a TxO. The format of the assetLabel depends on the type
  of box that is in the TxO:

    | Box Type | Format                                                                                                                                               |
    |----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Empty    | `"EMPTY"`                                                                                                                                            |
    | Poly     | `"LVL"`                                                                                                                                              |
    | Arbit    | `"TOPL"`                                                                                                                                             |
    | AssetV1  | _version_&#124;_address_<br>where _version_ is the hex value of the version byte and _address_ is the base58 encoded minting address.                |
    | TAM2     | _group_:_series_<br>where _group_ is the base58 encoded ID of the group constructor and _series_ is the base58 encoded id of the series constructor. |

* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 1000 (1 second).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

#### Returns

A stream of TxOs.

#### Errors

The errors that the method/function will be able to produce include:

* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error

#### Testing Procedure

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transactions have a confidence factor greater than 0.99
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAssetLabel("LVL", 0.9)
    ```
* **Then** the call immediately begins returning the matching TxOs in the database
* **After** all the matching TxOs in the database have been returned
* **Then** additional transactions are added to the genus database that have UTxOs and STxOs that match the request
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new TxOs are returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAssetLabel("LVL")
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAssetLabel("LVL", 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAssetLabel("LVL", 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAssetLabel("LVL", 0.9)
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

