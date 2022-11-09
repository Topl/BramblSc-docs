# Verifier

Functions related to verifying if a Proof satisfies a Proposition.

The syntax of the types used throughout this specification are explained in a [separate page](../../Overview/Types.md).

## Verify Height Range

### Signature

```
verifyHeight(proposition: Proposition[PropositionContextualHeightLock], proof: Proof[ProofContextualHeightLock], context: DynamicContext) => Boolean
```

* Parameters
  * `proposition`  
  The Height Lock Proposition.
    * Type: `Proposition[PropositionContextualHeightLock]`
    * Required: true
  * `proof`  
  The Height Lock Proof.
    * Type: `Proof[ProofContextualHeightLock]`
    * Required: true
  * `context`  
  A context to verify the Proposition and Proof against. It provides additional contextual information (such as height, transaction signable bytes and more) to the verifier.
    * Type: `DynamicContext`
    * Required: true
* Return  
  A flag indicating if the Height Lock Proof is verified against the Height Lock Proposition given the evaluation context.
    * Type: `bool`

### Errors

The errors that the method/function will produce include:

* `proposition`, `proof`, or `context` parameters are not provided.

### Description

Verifies that a given Height Lock Proof satisfies the given Height Lock Proposition and context. In order for Proofs to verified, the following two conditions must be satisfied:

* Proposition must be satisfied
* The Proof's binding verified.

To satisfy a Height Lock Proposition, the height requirements within the Proposition must be satisfied by the height of the blockchain (given by `chain` in the Proposition and `context`).

To verify the Proof's binding, the transactionBind within the Proof must match an expected binding that's created using the signable bytes of the transaction (given by `context`).

![diagram](./assets/Verifier_verifyHeight.png)

### Tests

The testing procedure and vectors are provided in a [separate page](VerifierTests.md#verify-height-range-tests).