# NodeCache Constructor Test

Failure cases for the constructor are exercised by tests of member methods/functions.

The following testing scenarios are required:

##### Happy Path

* **Given** that there is an object `mockBifrost` that mocks `BifrostQuery.getNodeCache`
  and `BifrostQuery.getGenesisBlock(1)`
* **And** there exists a valid `BifrostConnection` object that is the value of the variable `connection`
* **When**
    ```
    NodeCache(connection, 2000)
    ```
* **Then** the constructor returns without error
* **And** calls are made to the mocked `BifrostQuery.getNodeCache` and `BifrostQuery.getGenesisBlock(1)`
    * **If** The implementation is supposed to make the calls synchronously, then the calls must happen before the
      constructor returns.
    * **Otherwise**, the calls to the mocked methods/functions must have happened within an implementation defined
      amount of time from the constructor returning.
