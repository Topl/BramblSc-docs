# getTxosByAddress Tests
The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transaction have a confidence factor greater than 0.9
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call immediately returns matching TxOs from the database

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAddress(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAddress(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTxosByAddress(addresses, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

##### Confidence Factor is out of range

* **When**
    ```
    getTxosByAddress(addresses, 50, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getTxosByAddress(addresses, 50, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
