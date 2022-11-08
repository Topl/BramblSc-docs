# getIndexedTransactions Tests

The following testing scenarios are required:

##### Happy Path for paging

* **Given** the tests for `createOnChainTransactionIndex` and `getExistingTransactionIndexes` have successfully
  completed.
* **And** there is an index in the database named `bigIndex`
* **And** there are at least exactly 25 transactions that are covered by `bigIndex`
* **And** `emptyList` is an empty list of `IndexMatchValue`
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 0, 0.0)
    ```
* **Then** the call returns 10 transactions
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 10, 0.0)
    ```
* **Then** the call returns 10 transactions
* **When**
   ```
    getIndexedTransactions("bigIndex", emptyList, 10, 20, 0.0)
   ```
* **Then** the call returns 5 transactions
* **When**
  ```
    getIndexedTransactions("bigIndex", emptyList, 10, 25, 0.0)
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

##### Confidence Factor is out of range

* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 20, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getIndexedTransactions("bigIndex", emptyList, 10, 20, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
