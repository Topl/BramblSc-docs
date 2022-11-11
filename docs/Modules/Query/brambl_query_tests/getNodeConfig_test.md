# getNodeConfig Tests

The following testing scenarios are required:

##### Happy Path

* **Given** that an implementation of `GenusBlockQuery` is instantiated and configured to connect to a working Bifrost
  node
* **When**
    ```
    getNodeConfig(2000)
    ```
* **Then** the call immediately returns the `co.topl.proto.models.node.NodeConfig`.

##### Default Parameter Values

* **Given** that calls to the underlying gRPC library are mocked
* **When**
    ```
    getNodeConfig()
    ```
* **Then** the value passed to the gRPC library for `timeoutMillis` is 2000

##### No properly configured Bifrost node

* **Given** that there is no properly configured bifrost node
* **When**
    ```
    getNodeConfig(2000)
    ```
* **Then** the call produces an error indicating there is no properly configured Bifrost node.

##### Unable to send request to Bifrost Node

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that the request could not be
  sent
* **When**
    ```
    getNodeConfig(2000)
    ```
* **Then** the call produces an error indicating that the request could not be sent

##### The Bifrost node returned an error

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to return an error indicating that there was a problem
  processing the request
* **When**
    ```
    getNodeConfig(2000)
    ```
* **Then** the call produces an error indicating that there was a problem processing the request.

##### The Bifrost node did not return a result before the timeout happened

* **Given** that calls to the underlying gRPC library are mocked
* **And** mocked calls to the gRPC library are configured to never return
* **When**
    ```
    getNodeConfig(2000)
    ```
* **Then** the call produces an error indicating that there was a timeout error.
