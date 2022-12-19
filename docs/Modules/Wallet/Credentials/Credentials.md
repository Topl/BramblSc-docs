# Credentials

The Credentialler is a local prover that is able to create the proofs needed for a transaction. It's main purpose is to take in an unproven transaction (see [Transaction Builder](../NativeTransactor/NativeTransactor.md)) and generate the proven transaction. To achieve this, the Credentialler has access to all the secrets (keys) and UTxO states within a wallet.

## Module Credentialler

Functions:

```
prove(unprovenTx: IoTransaction): IoTransaction
```

```
proveInput(unprovenInput: SpentTransactionOutput, msg: SignableBytes): SpentTransactionOutput
```

```
getProof(msg: SignableBytes, proposition: Proposition, idx: Indices): Option[Proof]
```

```
validate(tx: IoTransaction, ctx: ValidationContext): Boolean
```

```
proveAndValidate(unprovenTx: IoTransaction, ctx: ValidationContext): Either[ValidationError, IoTransaction]
```

## Class ValidationContext extends DynamicContext[Option, String]

members: 

hashingRoutines, signingRoutines, interfaces (TBD), signableBytes, currentTick, datums
