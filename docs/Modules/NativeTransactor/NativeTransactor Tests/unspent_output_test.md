# UnspentOutput Tests

The following testing scenarios are required:

#### Happy Path

* **Given** a variable `a` whose value is an address
* **And** a variable `v` whose value is a `Values.Token`
* **When** 
  ```
  uo ⇦ UnspendOutput(a, v)
  ```
* **Then** a == uo.address
* **And** v == uo.value
* **When**
  ```
  uo.signableBytes()
  ```
* **Then**
  [//]: # (TODO: Sean please add missing details)
