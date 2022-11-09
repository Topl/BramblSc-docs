# Proposer

This document describes the functions that the Quivr library within the SDK provides for creating Propositions. 

The syntax of the types used throughout this specification are explained in a [separate page](../../Overview/Types.md).

## Propose Height Range

### Signature

```
proposeHeight(chain: string, min: uint64, max: uint64) => Proposition[PropositionContextualHeightLock]
```

* Parameters
  * `chain`  
  A label denoting the chain for which the height requirements will be tested against. This value must refer to a valid label in the evaluation context during verification. 
    * Type: string
    * Required: true
  * `min`  
  The minimum allowable block height, inclusive. This value must satisfy the following range: 1 <= `min` <= 2<sup>63</sup>-1. Must be less than or equal to `max`.
    * Type: `uint64`
    * Required: true
  * `max`  
  The maximum allowable block height, inclusive. This value must satisfy the following range: 1 <= `min` <= 2<sup>63</sup>-1. Must be greater than or equal to `min`.
    * Type: `uint64`
    * Required: true
* Return  
The created Height Lock Proposition. A Height Lock Proposition specifies the minimum height that a blockchain must be, the maximum height that a blockchain must be, and a label denoting the chain for which these minimum and maximum values must be verified against. 
  * Type: `Proposition[PropositionContextualHeightLock]`

### Errors

The errors that the method/function will produce include:

* `min` or `max` parameters are not provided.
* `min` or `max` is out of range. Acceptable values are 1 to 9223372036854775807 inclusive.
* `max` is less than `min`

### Description

Creates a Height Lock Proposition. A Height Lock Proposition requires that its containing transaction joins a block whose height is valid. The height of the block will be specified by the parameter `chain`. A given block height is valid if both of the following conditions are true:

* height is less than or equal to `max`
* height is greater than or equal to `min`

If any of the provided parameters are invalid, then an error will occur. The error will be presented in a way that adheres to the best practices of the implementing language.

![diagram](./assets/Proposer_proposeHeight.png)

### Tests

The testing procedure and vectors are provided in a [separate page](ProposerTests.md#propose-height-range-tests).