# Slot ⇔ Timestamp Conversions

This page describes the tests that must be done to verify the behavior of methods/functions that convert between slot
numbers and Unix timestamps.

The following testing scenarios are required:

##### Happy Path

* **Given** a variable named `zeroTime` whose value is an arbitrary Unix timestamp
* **Then**
    ```
    0 == timestampToSlotNumber(slotNumberToTimestamp(0, 1000, zeroTime), 1000, zeroTime)
    ```
* **And**
    ```
    zeroTime == slotNumberToTimestamp(timestampToSlotNumber(zeroTime, 1000, zeroTime), 1000, zeroTime)
    ```
* **And**
    ```
    zeroTime+99999 == slotNumberToTimestamp(timestampToSlotNumber(zeroTime+99999, 1000, zeroTime), 1000, zeroTime)
    ```


#### Non-Positive Slot Duration
* **Given** a variable named `zeroTime` whose value is an arbitrary Unix timestamp
* **Then**
    ```
    slotNumberToTimestamp(0, 0, zeroTime)
    ```
  produces an error
* **And**
    ```
    timestampToSlotNumber(zeroTime, 1000, zeroTime)
    ```
  produces an error
* **And**
    ```
    slotNumberToTimestamp(0, -1, zeroTime)
    ```
  produces an error
* **And**
    ```
    timestampToSlotNumber(zeroTime, -1, zeroTime)
    ```
  produces an error


#### Slot Number Too Big
