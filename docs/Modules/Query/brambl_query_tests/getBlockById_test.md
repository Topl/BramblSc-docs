# getBlockById Tests

The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that the value of `blockId` is a block ID
* **And** there is already a block with the ID `blockId` in the Genus service's database
* **And** block `blockId` has a confidence factor greater than 0.99
* **When**
    ```
    getBlockById(blockId, 10, 0.9)
    ```
* **Then** the call immediately returns the `co.topl.proto.models.block.FullBlock`.

##### Happy Path with Waiting

* **Given** that the value of `blockId2` is a block ID
* **And** that there is no block with the ID `blockId2` in the Genus service's database
* **When**
    ```
    getBlockById(blockId2, 5000, 0.99)
    ```
* **And Then** A block with ID `blockId2` is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the block's confidence factor to greater than 0.99 in
  less than 3 seconds.
* **Then** the call returns the `co.topl.proto.models.block.FullBlock`.

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
