# createOnChainTransactionIndex Tests

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
