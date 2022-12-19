# Credentials

The Credentialler is a local prover that is able to create the proofs needed for a transaction. It's main purpose is to take in an unproven transaction (see [Transaction Builder](../NativeTransactor/NativeTransactor.md)) and generate the proven transaction. To achieve this, the Credentialler has access to all the secrets (keys) and UTxO states within a wallet.

## Module Credentialler

### Prove an Unproven Transaction

> TODO: Link to models

```
prove(unprovenTx: IoTransaction): Either[List[ProverError], IoTransaction]
```

#### Description

TBD

#### Test Vectors

TBD

### Validate a Proven Transaction

> TODO: Link to models

```
validate(tx: IoTransaction, ctx: ValidationContext): List[ValidationError]
```

#### Description

TBD

#### Test Vectors

TBD

### Prove Then Validate a Transaction

This function is a combination of the aforementioned [`prove`](#prove-an-unproven-transaction) and [`validate`](#validate-a-proven-transaction) functions.

> TODO: Link to models

```
proveAndValidate(unprovenTx: IoTransaction, ctx: ValidationContext): Either[List[CredentiallerError], IoTransaction]
```

#### Description

TBD

#### Test Vectors

TBD