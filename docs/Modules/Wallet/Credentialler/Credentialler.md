# Credentials

The Credentialler is a local prover that is able to create the proofs needed for a transaction. It's purpose is to take an unproven transaction (see [Transaction Builder](../../NativeTransactor/NativeTransactor.md)) and generate a proven transaction. To achieve this, the Credentialler has access to all the secrets (keys) and UTxO states within a wallet using the [Interface module](#) and creates proofs using the [Quivr module](#).

The Credentialler can also validate if a given IoTransaction is satisfactorily proven.