# UnspentOutput Tests

The following testing scenarios are required:

#### Happy Path

* **Given** a variable `a` whose value is an address
* **And** a variable `v` whose value is a `Values.Token`
* **And** a variable `m` whose value is an arbitrary array of bytes 64 bytes in length
* **When** 
  ```
  uo ⇦ UnspendOutput(a, v)
  ```
* **Then** a == uo.address
* **And** v == uo.value
* **And** uo.metadata has a value indicating that there is no metadata
* **When**
  ```
  uo2 ⇦ UnspendOutput(a, v, m)
  ```
* **Then** a == uo2.address
* **And** v == uo2.value
* **And** m == uo2.metadata
* **When**
  ```
  uo2.signableBytes()
  ```
* **Then**
  [//]: # (TODO: Sean please add missing details)
