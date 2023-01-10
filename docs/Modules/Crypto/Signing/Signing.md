# Signing

The Signing submodule of crypto is responsible for signing data. Currently only one signing scheme is supported, which
is the Ed25519 scheme.

## Interface EllipticCurveSignatureScheme

Classes responsible for signing data using elliptic curve digital signatures implement this interface.

### SignatureLength

#### Signature(s)

```
Int SignatureLength
```

#### Description

A constant whose value is the length of the signature in bytes.

### KeyLength

#### Signature(s)

```
Int KeyLength
```

#### Description

A constant whose value is the length of the private signing keys in bytes.

### deriveKeyPairFromEntropy

#### Signature(s)

```
deriveKeyPairFromEntropy(entropy: Entropy, password: Option[String]) returns List[ByteVector]
```

#### Description

Derive a main key pair from an entropy value and a password.

#### Parameters

* `entropy` — The entropy value to use to derive the key pair.
* `password` — The password to use to derive the key pair. The default is `None`.

#### Returns

A list of two [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) objects. The first is the private
signing key and the second is the public verification key.

#### Errors

_*None*_

### sign

#### Signature(s)

```
sign(privateKey: ByteVector, message: ByteVector) returns ByteVector
```

#### Description

Create a signature for a message using a private signing key.

#### Parameters

* `privateKey` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the private signing
  key to use to sign the message.
* `message` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the message to sign.

#### Returns

A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the signature.

#### Errors

_*None*_

### verify

#### Signature(s)

```
verify(signature: ByteVector, message:ByteVector, verificationKey: ByteVector) returns Boolean
```

#### Description

Verify that a signature is valid for a message using a public verification key.

#### Parameters

* `signature` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the signature to
  verify.
* `message` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the message that was
  signed.
* `verificationKey` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the public
  verification key to use to verify the signature.

#### Returns

True if the signature is valid, false otherwise.

#### Errors

_*None*_

### getVerificationKey

#### Signature(s)

```
getVerificationKey(privateKey: ByteVector) returns ByteVector
```

#### Description

Derive a public verification key from a private signing key.

#### Parameters

* `privateKey` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the private signing
  key to use to derive the public verification key.

#### Returns

A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the derived public verification key.

## class Ed25519

This class implements the Ed25519 signing scheme. It is used to sign data and verify signatures. It is also used to
derive key pairs from entropy values and other key pairs.

This class should be implemented as a wrapper for an external library that implements the Ed25519 signing scheme.

### _static_ instance

#### Signature(s)

```
static instance() returns Ed25519
```

#### Description

Return the singleton instance of `Ed25519`.

#### Parameters

_*None*_

#### Returns

Return the singleton instance of `Ed25519`.

#### Errors

_*None*_

### SignatureLength

#### Signature(s)

```
Int SignatureLength
```

#### Description

A constant whose value is the length of the signature in bytes.

### KeyLength

#### Signature(s)

```
Int KeyLength
```

#### Description

A constant whose value is the length of the private signing keys in bytes.

### deriveKeyPairFromSeed

#### Signature(s)

```
deriveKeyPairFromSeed(seed: ByteVector): Array[ByteVector]
```

#### Description

Generate an Ed25519 key pair from the given seed.

#### Parameters

* `seed` — A 32 byte long seed to use to generate the key pair.

#### Returns

An array of length 2 containing the private signing key at index 0 and the public verification key at index 1.

#### Errors

Signals an error if the seed is not 32 bytes long.

