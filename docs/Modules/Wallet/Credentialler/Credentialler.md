# Credentials

The Credentialler is a local prover that is able to create the proofs needed for a transaction. It's main purpose is to take in an unproven transaction (see [Transaction Builder](../NativeTransactor/NativeTransactor.md)) and generate the proven transaction. To achieve this, the Credentialler has access to all the secrets (keys) and UTxO states within a wallet.