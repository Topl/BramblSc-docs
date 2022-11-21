# Schedule Tests
This page describes the tests that must be done to verify the behavior of methods/functions that convert between slot
numbers and Unix timestamps.

The following testing scenarios are required:

#### Happy Path
* **Given** `minValidSlot` is an arbitrary `uint64
* **And** `maxValidSlot` is an arbitrary `uint64` greater than `minValidSlot`
* **When**
    ```
    Schedule(minValidSlot: uint64, maxValidSlot: uint64, timestamp: int64)
    ```
* **Then**
  should successfully construct a Schedule object with the given values for `minValidSlot`
* **When**
    ```
    Schedule(minValidSlot: uint64, maxValidSlot: uint64, timestamp: int64).signableBytes()
    ```
* **Then**

[//]: # (Sean, please provide the details for this test of signableBytes)

#### Max less than Min
* **Given** `minValidSlot` is an arbitrary `uint64`
* **And** `maxValidSlot` is an arbitrary `uint64` less than `minValidSlot`
* **When**
    ```
    Schedule(minValidSlot: uint64, maxValidSlot: uint64, timestamp: int64)
    ```
* **Then**
  should indicate an error caused by max less than min
