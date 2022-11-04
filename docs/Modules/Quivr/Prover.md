# Prover

Functions related to creating Proofs

## Bind Proof

### Signature

` bind(tag: bytes, message: bytes) => bytes `

note that tag should only contain a single byte. Protobuf does not have a type for a single byte so this parameter is given by "bytes" 

> TODO: Explain parameters and return type

### Description

Generate a binding for a proof. This binding is a hash of the tag and message.

![diagram](....)

### Test Vectors

The test vectors represent the inputs and outputs of the following: language-agnostic pseudo code:

` binding = Quivr.Prover.bind(tag, message) `

> TODO: embed test vectors

## Prove Height Lock

### Signature

` proveHeight() => ((msg: bytes) => ProofHeightLock) `

> TODO: Explain parameters and return type

### Description

Create a Height Lock Proof.

> TODO: add more

![diagram](./assets/Prover_proveHeight.png)

### Test Vectors

The test vectors represent the inputs and outputs of the following language-agnostic pseudo code:

` proof = Quivr.Proposer.proveHeight()(msg) `

> TODO: embed test vectors