# Verifier 

Functions related to verifying if a Proof satisfies a Proposition

## Verify Height Lock

### Signature

` verifyHeight(proposition: PropositionHeightLock, proof: ProofHeightLock) => ((evalCtx: EvaluationContext) => Boolean) `

> TODO: Explain parameters and return type

### Description

Verify that a given Height Lock Proof satisfies the given Height Lock Proposition and context. 

> TODO: add more

![diagram](./assets/Verifier_verifyHeight.png)

### Test Vectors

The test vectors represent the inputs and outputs of the following language-agnostic pseudo code:

` isValid = Quivr.Verifier.verifyHeight(proposition, proof)(evalCtx) `

> TODO: embed test vectors