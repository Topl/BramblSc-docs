# Verifier 

Functions related to verifying if a Proof satisfies a Proposition.

## Verify Height Lock

### Signature

` verifyHeight(proposition: PropositionHeightLock, proof: ProofHeightLock) => ((ctx: EvaluationContext) => Boolean) `

* Parameters
  * `proposition`  
  The Height Lock Proposition.
    * Type: `PropositionHeightLock`
    * Required: true
  * `proof`  
  The Height Lock Proof.
    * Type: `ProofHeightLock`
    * Required: true
* Return  
A function to verify the Height Lock Proof against the Height Lock Proposition given an evaluation context.
  * Parameters
    * `ctx`  
    A context to verify the Proposition and Proof against. It provides additional contextual information to the verifier.
      * Type: `EvaluationContext`
      * Required: true
  * Return  
  A flag indicating if the proof is verified.
    * Type: `bool`

### Description

Verify that a given Height Lock Proof satisfies the given Height Lock Proposition and context. In order for the Height Lock to be satisfied, the proof's binding must be verified as well as the proposition's desired height.

![diagram](./assets/Verifier_verifyHeight.png)

### Test Vectors

The test vectors represent the inputs and outputs of the following language-agnostic pseudo code:

` isValid = Quivr.Verifier.verifyHeight(proposition, proof)(ctx) `

> TODO: embed test vectors