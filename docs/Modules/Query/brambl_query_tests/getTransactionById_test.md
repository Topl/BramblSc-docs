# getTransactionById Tests


The following testing scenarios are required:

##### Happy Path with No Waiting

* **Given** that the value of `xactnId` is a transaction ID
* **And** that there is already a transaction with the ID `xactnId` in the Genus service's database
* **And** the transaction with ID `xactnId` has a confidence factor greater than 0.99
* **When**
    ```
    getTransactionById(xactnId, 10, 0.9)
    ```
* **Then** the call immediately returns the transaction receipt

##### Happy Path with Waiting

* **Given** that the value of `xactnId` is a transaction ID
* **And** that there is no transaction with the ID `xactnId` in the Genus service's database
* **When**
    ```
    getTransactionById(xactnId, 5000, 0.9)
    ```
* **And Then** A transaction with ID `xactnId` is added to Genus
* **AND Then** Enough blocks are added to Genus to raise the transaction's confidence factor to greater than 0.9 in
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
