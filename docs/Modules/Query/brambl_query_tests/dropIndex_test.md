# dropIndex Tests

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

