# getTxosByAssetLabel Tests

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
