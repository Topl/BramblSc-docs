# Generation

This submodule of crypto is responsible for generating key pairs for wallets. There is a nested submodule named
[`mnemonic`](Generation/Mnemonic) that is responsible for generating and consuming mnemonic phrases.

## Interface KeyInitializer

Implementations of this interface are responsible for creating a key pair from an entropy value. This can be used as the
main key pair that a wallet uses to derive child key pairs.

### method fromMnemonicString

#### Signature(s)
 
```
fromMnemonicString(mnemonicString: String, language: Language, password: Option[String]) returns KeyPair
```

#### Description
Compute a secret signing key from a mnemonic string.

#### Parameters
* `mnemonicString` — The mnemonic string to use to compute the secret signing key.
* `language` — The language of the mnemonic string. The default is `Language.english()`.
* `password` — The password to use to compute the secret signing key. The default is `None`.

#### Returns
The secret signing key. This is assumed to be a type of secret signing key from which the public verification key can be
derived.

#### Errors
* Signal an error if the file identified by the `filePath()` method of the given `Language` instance cannot be read.
* Signal an error if the SHA-256 hash of its contents is not what is expected.
* Signal an error if the mnemonic string is not a valid length.
* Signal an error if the mnemonic string cannot be decoded.

## class Ed25519Initializer

Implements the `KeyInitializer` interface for the Ed25519 signing scheme.

### method fromMnemonicString

#### Signature(s)

```
fromMnemonicString(mnemonicString: String, language: Language, password: Option[String]) returns KeyPair
```

#### Description
Compute a secret signing key from a mnemonic string.

#### Parameters
* `mnemonicString` — The mnemonic string to use to compute the secret signing key.
* `language` — The language of the mnemonic string. The default is `Language.english()`.
* `password` — The password to use to compute the secret signing key. The default is `None`.

#### Returns
The secret Ed25519 signing key.

#### Errors
* Signal an error if the file identified by the `filePath()` method of the given `Language` instance cannot be read.
* Signal an error if the SHA-256 hash of its contents is not what is expected.
* Signal an error if the mnemonic string is not a valid length.
* Signal an error if the mnemonic string cannot be decoded.
