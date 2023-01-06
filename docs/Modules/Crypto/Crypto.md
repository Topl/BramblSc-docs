# Crypto

This page describes the Brambl SDK's Crypto module. The Crypto module is responsible for cryptographic operations within
the Brambl SDK. The module is broken down into the following submodules:

* [generation](Crypto/Generation) — Responsible for generating keys pair for wallets.
* [hash](Crypto/Hash) — Responsible for hashing data.
* [signing](Crypto/Signing) — Responsible for signing data.

These make use of [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) objects to represent binary data.