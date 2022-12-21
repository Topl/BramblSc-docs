# Validate a Proven Transaction

> TODO: Link to models

## Signature(s)

```
validate(tx: IoTransaction, ctx: DynamicContext): List[CredentiallerError]
```

## Description

Validate if an IoTransaction is satisfactorily proven. An IoTransaction is satisfactorily proven if the attestations of all inputs have their threshold met.

> TODO: Add diagram

### Parameters

* `tx`  
    The transaction to validate.
    * Type: IoTransaction
    * Required
* `ctx`  
    The context in which to validate the transaction.
    * Type: DynamicContext
    * Required

### Returns

List[[CredentiallerError](../../Common/Models/Errors.md#credentiallererror)

The list of validation errors that occured, if any.

## Testing Procedure

### Test Cases

The following test cases only consider a transaction of 3 : a : A => 3 : a : B. That is, a single input to single output transaction where the quantity and asset type do not change but the Address does.

#### Transaction Input with Attestation Type Image32/64

![diagram](./images/validate/attestationImage.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation type `Image32` or `Image64`
* **And** `ctx` is an arbitrary DynamicContext
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  TBD

```json

```

#### Transaction Input with Attestation Type Commitment32/64

![diagram](./images/validate/attestationCommitment.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation type `Commitment32` or `Commitment64`
* **And** `ctx` is an arbitrary DynamicContext
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  TBD

```json

```

#### Transaction Input with Proofs Whose TransactionBind Does Not Match the Context SignableBytes

![diagram](./images/validate/invalidBinding.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation with proofs that are bound to `tx`
* **And** `ctx` is a DynamicContext containing arbitrary `signableBytes` unrelated to `tx`
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate Whose Threshold is Unobtainable

![diagram](./images/validate/thresholdUnobtainable.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with `challenges` and `responses` having length 1
* **And** The predicate's threshold is 2
* **And** `ctx` is an arbitrary DynamicContext
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And Locked Challenge

![diagram](./images/validate/locked.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with only a locked proposition in the `challenges`
* **And** A locked proof in the `responses`
* **And** The predicate's threshold is 1
* **And** `ctx` is an arbitrary DynamicContext
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And None-Proofs

![diagram](./images/validate/noneProofs.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with 5 propositions in `challenges`
* **And** `responses` contains 5 `None` values
* **And** The predicate's threshold is 1
* **And** `ctx` is an arbitrary DynamicContext
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And DigitalSignature But Signature Verifier not in Context

![diagram](./images/validate/signatureVerifierNotFound.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a DigitalSignature proposition 
* **And** DigitalSignature proposition uses routine "curve25519"
* **And** `responses` contains a DigitalSignature proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `signingRoutines` does *not* contain "curve25519"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And DigitalSignature With Invalid Proof

![diagram](./images/validate/signatureProofInvalid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a DigitalSignature proposition 
* **And** DigitalSignature proposition uses routine "curve25519"
* **And** `responses` contains a DigitalSignature proof that was created with a different key than the proposition
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `signingRoutines` contains "curve25519"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And DigitalSignature With Valid Proof

![diagram](./images/validate/signatureProofValid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a DigitalSignature proposition 
* **And** DigitalSignature proposition uses routine "curve25519"
* **And** `responses` contains a DigitalSignature proof that was created with the same key as the proposition
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `signingRoutines` contains "curve25519"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  The transaction is valid thus an empty list is returned

```json

```

#### Transaction Input with Attestation Type Predicate And Digest But Digest Verifier not in Context

![diagram](./images/validate/digestVerifierNotFound.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a Digest proposition 
* **And** Digest proposition uses routine "blake2b256"
* **And** `responses` contains a Digest proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `hashingRoutines` does *not* contain "blake2b256"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And Digest With Invalid Proof

![diagram](./images/validate/digestProofInvalid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a Digest proposition 
* **And** Digest proposition uses routine "blake2b256"
* **And** `responses` contains a Digest proof that contains a preimage that does *not* match the proposition
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `hashingRoutines` contains "blake2b256"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And Digest With Valid Proof

![diagram](./images/validate/digestProofValid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a Digest proposition 
* **And** Digest proposition uses routine "blake2b256"
* **And** `responses` contains a Digest proof that contains the correct preimage
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `hashingRoutines` contains "blake2b256"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  The transaction is valid thus an empty list is returned

```json

```

#### Transaction Input with Attestation Type Predicate And HeightRange But Height not in Context Datums

![diagram](./images/validate/heightNotFound.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a HeightRange proposition 
* **And** HeightRange proposition uses chain "header"
* **And** `responses` contains a HeightRange proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `datums` does *not* contain a height value for "header"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And HeightRange But not Satisfied

![diagram](./images/validate/heightInvalid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a HeightRange proposition 
* **And** HeightRange proposition uses chain "header", min: 2, and max: 15
* **And** `responses` contains a HeightRange proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `datums` contains the height value 100 for "header"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And HeightRange Satisfied

![diagram](./images/validate/heightValid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a HeightRange proposition 
* **And** HeightRange proposition uses chain "header", min: 2, and max: 15
* **And** `responses` contains a HeightRange proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext whose `datums` contains the height value 10 for "header"
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  The transaction is valid thus an empty list is returned

```json

```

#### Transaction Input with Attestation Type Predicate And TickRange But not Satisfied

![diagram](./images/validate/tickInvalid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a TickRange proposition 
* **And** TickRange proposition uses min: 2, and max: 15
* **And** `responses` contains a TickRange proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext value for `currentTick` is 50
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  A list containing the error [`CR003`](../../Common/Models/Errors.md#cr003-validationerror) is returned

```json

```

#### Transaction Input with Attestation Type Predicate And TickRange Satisfied

![diagram](./images/validate/tickValid.png)

* **Given** `tx` is an IoTransaction with a single input with an attestation `Predicate` with a TickRange proposition 
* **And** TickRange proposition uses min: 2, and max: 15
* **And** `responses` contains a TickRange proof
* **And** The predicate's threshold is 1
* **And** `ctx` is a DynamicContext value for `currentTick` is 10
* **When**
    ```
    validate(tx: IoTransaction, ctx: DynamicContext)
    ```
* **Then**
  The transaction is valid thus an empty list is returned

```json

```

### Test Vectors

```json

```
