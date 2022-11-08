# getTxosByAddressStream Tests

The following testing scenarios are required:

##### Happy Path

* **Given** that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus
  service's database
* **And** these transaction have a confidence factor greater than 0.99
* **And** `addresses` is the list of addresses
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call immediately returns the matching TxOs in the database
* **Then** additional transactions are added to the genus database that have UTxOs or STxOs that match the request
* **When** these new transactions are deep enough in the blockchain to have a confidence factor greater than .9
* **Then** a map of the new TxOs is returned as part of the stream.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getTxosByAddressStream(addresses)
    ```
* **Then** the value passed to the gRPC library for `confidenceFactor` is 0.9999999

##### No properly configured Genus service

* **Given** that there is no properly configured genus service
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating there is no properly configured genus service

##### Unable to send request to Genus service

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The genus service returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getTxosByAddressStream(addresses, 0.9)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Genus service did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getTxosByAddressStream(addresses, 50, 0.99)
    ```
* **Then** the call produces an error indicating that there was a timeout error.

##### Confidence Factor is out of range

* **When**
    ```
    getTxosByAddressStream(addresses, 50, 1.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
* **When**
    ```
    getTxosByAddressStream(addresses, 50, -0.001)
    ```
* **Then** the call produces an error indicating that `confidenceFactor` is out of range.
