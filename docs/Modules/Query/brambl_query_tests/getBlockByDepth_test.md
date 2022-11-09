# getBlockByDepth Tests

The following testing scenarios are required:

##### Happy Path with Varied Confidence Factor

* **Given** that there are already at least six other blocks in the Genus service's database
* **And** no additional blocks are added to the Genus service's database while this test is in progress
* **And** the block at the top of the blockchain has a confidence factor less than 0.9
* **And** there is a block in the blockchain other than the genesis block that has a confidence factor greater than
  0.9
* **When**
    ```
    getBlockByDepth(h, 0.0)
    ```
* **Then** the call immediately returns a `co.topl.proto.models.block.FullBlock` for the block that is at the top of the
  blockchain
* **When**
    ```
    getBlockByDepth(h, 0.9)
    ```
* **Then** the call immediately returns a `co.topl.proto.models.block.FullBlock` for a block that is at a lower height
  in the blockchain.

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
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999 and the value for `timeoutMillis` is
    1000.

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

##### Confidence Factor is out of range

* **When**
    ```
    getBlockByDepth(n, 50, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getBlockByDepth(n, 50, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
