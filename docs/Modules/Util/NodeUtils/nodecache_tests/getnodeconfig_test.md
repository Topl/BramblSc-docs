# getNodeConfig Tests

The following testing scenarios are required:

##### Happy Path

* **Given** that there is an object `mockBifrost` that mocks `BifrostQuery.getNodeCache`
* **And** there exists a valid `BifrostConnection` object
* **And** after calling the `NodeCache` contstructor, the `NodeCache` objects gets a
  `co.topl.proto.models.node.NodeConfig` object by calling `BifrostQuery.getNodeConfig` and the returned object is
  available with the test fram a variable named `config`.
* **When**
    ```
    getNodeConfig(mockBifrost, 2000, 18400000)
    ```
* **Then** the call returns an object equal to `config`
* **Then** at least 10 milliseconds elapse
* **When**
  ```
    getNodeConfig(mockBifrost, 100, 1)
  ```
* **Then** this method calls the mocked `BifrostQuery.getNodeCache` with a `timeoutMillis` value of 100
* **Then** the call returns the `co.topl.proto.models.node.NodeConfig` object it just got from the
  mocked `BifrostQuery.getNodeCache`

##### Happy Path

* **Given** that there is an object `mockBifrost` that mocks `BifrostQuery.getNodeCache` and simulates an error from the
  Bifrost node
* **And** at least 10 milliseconds have elapsed
* **When**
    ```
    getNodeConfig(mockBifrost, 2000, 1)
    ```
* **Then** `getNodeConfig` produces the same error as is produced by the mocked `BifrostQuery.getNodeCache`.
