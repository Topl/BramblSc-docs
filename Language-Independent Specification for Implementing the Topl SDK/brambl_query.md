# Bramble Query Functions

## Interface GenusBlockQuery

### getBlockById

#### Signature(s)

```
getBlockById(id: models.TypedIdentifier, timeoutMillis: uint64, confidenceFactor: double) returns models.BlockV2.Full
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
    getBlockById(blockId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getBlockByHeight

#### Signature(s)

```
  getBlockByHeight(height: int64, timeoutMillis: uint64, confidenceFactor: double) returns models.BlockV2.Full
```

#### Description

Retrieve the block at the specified from the configured Genus service. This returns its result when there is a
block present in the genus service at the specified height and the confidence factor of the block is greater than or
equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

#### Parameters

* `height` the height of the block to get. The height of the genesis block 1.
* `timeoutMillis`  The maximum number of milliseconds to wait. The default value will be 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

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
    getBlockByHeight(h, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

### getBlockByDepth

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
    getTransactionById(xactnId, 5000, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.
