# Prove Then Validate a Transaction

> TODO: Link to models

## Signature(s)

```
proveAndValidate(unprovenTx: IoTransaction, ctx: DynamicContext): Either[List[CredentiallerError], IoTransaction]
```

## Description

This function is a combination of the aforementioned [`prove`](#prove-an-unproven-transaction) and [`validate`](#validate-a-proven-transaction) functions.

> TODO: Add diagram

## Testing Procedure

The test cases and vectors for `proveAndValidate` is a concatenation of the cases defined in [`prove`](./Prove.md#testing-procedure) and [`validate`](./Validate.md#testing-procedure)