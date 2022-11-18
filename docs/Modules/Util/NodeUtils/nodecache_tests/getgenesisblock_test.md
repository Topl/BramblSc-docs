# getGenesisBlock Tests

The following testing scenarios are required:

##### Happy Path

* **Given** that there is an object `mockBifrost` that mocks `BifrostQuery.getNodeCache`
* **And** there exists a valid `BifrostConnection` object
* **And** after calling the `NodeCache` constructor, the `NodeCache` objects gets a
  `co.topl.proto.models.FullBlock` object by calling `BifrostQuery.getBlockByHeight(1)`.
* **When**
    ```
    getGenesisBlock()
    ```
* **Then** the call returns an `FullBlock` object that was previously obtained from `BifrostQuery.getBlockByHeight(1)`.

##### Error Path

* **Given** that there is an object `mockBifrost` that mocks `BifrostQuery.getBlockByHeight(1)` and simulates an error from the
  Bifrost node
* **When**
    ```
    getGenesisBlock(mockBifrost, 2000, 1)
    ```
* **Then** `getNodeConfig` produces the same error as is produced by the mocked `BifrostQuery.getBlockByHeight(1)`.
