# UnprovenIoTx Tests

The following testing scenarios are required:

#### Happy Path

* **Given** a variable `ins` whose value is a `List[UnprovenInput]`
* **And** a variable `outs` whose value is a `List[UnspentOutput]`
* **And** a variable `s` whose value is a `Schedule`
* **And** a variable `m` whose value is a `Metadata`
* **When**
  ```
  utx ⇦ UnprovenIoTx(ins, outs, s, m)
  ```
* **Then** ins == utx.inputs
* **And** outs == utx.outputs
* **And** s == utx.schedule
* **And** m == utx.metadata
* **When**
  ```
  utx.signableBytes()
  ```
* **Then**
  [//]: # (TODO: Sean please add missing details)
