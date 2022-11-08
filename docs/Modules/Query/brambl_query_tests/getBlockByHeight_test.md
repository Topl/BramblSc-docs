# getBlockByHeight Tests

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that there is already a block at height *h* in the Genus service's database
* **And** the block at height *h* has a confidence factor greater than 0.99
* **When**
    ```
    getBlockByHeight(h, 10, 0.9)
    ```
* **Then** the call immediately returns the `co.topl.proto.models.block.FullBlock`

##### Happy Path with Waiting

* **Given** that there is no block at height *h* in the Genus service's database
* **When**
    ```
    getBlockByHeight(h, 5000, 0.99)
    ```
* **And Then** A block at height *h* is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the block's confidence factor to greater than 0.99 in
  less than 3 seconds.
* **Then** the call returns the `co.topl.proto.models.block.FullBlock`

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

##### Confidence Factor is out of range

* **When**
    ```
    getBlockByHeight(h, 50, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getBlockByHeight(h, 50, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
