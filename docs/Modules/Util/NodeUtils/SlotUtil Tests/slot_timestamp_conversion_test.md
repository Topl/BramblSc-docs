# Slot ⇔ Timestamp Conversions

This page describes the tests that must be done to verify the behavior of methods/functions that convert between slot
numbers and Unix timestamps.

The following testing scenarios are required:

##### Happy Path

* **Given** an instance of `SlotUtil` that is the value of the variable `su`
* **And** that `su` was constructed with a mock instance of `NodeCache` that is configured so that
    * `getNodeConfig` returns a `NodeConfig` object that specified a slot duration of 1000 milliseconds
    * `getGenesisBlock` returns a `FullBlock` that contains a `BlockHeader` that contains a timestamp with an arbitrary
      positive value _t<sub>0</sub>_
* **And** `t1` is an arbitrary Unix timestamp greater than _t<sub>0 and less than </sub>_ 999,999,999,999.
* **Then**
    ```
    0 == su.timestampToSlotNumber(su.slotNumberToTimestamp(0))
    ```
* **And**
    ```
    t1 == su.slotNumberToTimestamp(su.timestampToSlotNumber(t1))
    ```
* **And**
    ```
    t1+99999 == su.slotNumberToTimestamp(su.timestampToSlotNumber(t1+99999))
    ```

#### Slot Number Too Big

* **Given** an instance of `SlotUtil` that is the value of the variable `su`
* **And** that `su` was constructed with a mock instance of `NodeCache` that is configured so that
  * `getNodeConfig` returns a `NodeConfig` object that specified a slot duration of 1000 milliseconds
  * `getGenesisBlock` returns a `FullBlock` that contains a `BlockHeader` that contains a timestamp with an arbitrary
    positive value
* **And** a variable named `slotNumber` whose value is 4,611,686,018,427,387,904
* **Then**
    ```
    su.slotNumberToTimestamp(slotNumber)
    ```
  produces an error indicating that the slot number is too big to be represented as a Unix timestamp.

#### Timestamp too Early

* **Given** an instance of `SlotUtil` that is the value of the variable `su`
* **And** that `su` was constructed with a mock instance of `NodeCache` that is configured so that
  * `getNodeConfig` returns a `NodeConfig` object that specified a slot duration of 1000 milliseconds
  * `getGenesisBlock` returns a `FullBlock` that contains a `BlockHeader` that contains a timestamp with the value
    1668784352
* **Then**
    ```
    TimestampToSlotNumber(1668784350)
    ```
  produces an error indicating that the timestamp is before slot 0.

