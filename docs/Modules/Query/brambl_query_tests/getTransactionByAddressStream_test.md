# getTransactionByAddressStream Tests


The following testing scenarios are required:

##### Happy Path

* **Given** that there are already transactions with inputs or outputs associated with the specified addresses (some
  with only an input, some with only an output and some with both) in the Genus service's database
* **And** these transaction have a confidence factor greater than 0.9
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call immediately returns transaction receipts for the matching transactions in the database
* **Then** additional transactions are added to the genus database that have inputs or outputs associated with the
  specified addresses (some with only an input, some with only an output and some with both)
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** the new transactions are returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTransactionsByAddressStream(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTransactionsByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTransactionsByAddressStream(xactnId, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

##### Confidence Factor is out of range

* **When**
    ```
    getTransactionsByAddressStream(xactnId, 50, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getTransactionsByAddressStream(xactnId, 50, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
