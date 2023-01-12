# Signing

The Signing submodule of crypto is responsible for signing data. Currently only one signing scheme is supported, which
is the Ed25519 scheme.

## Interface EllipticCurveSignatureScheme

Classes responsible for signing data using elliptic curve digital signatures implement this interface.

### constant SignatureLength

#### Signature(s)

```
Int SignatureLength
```

#### Description

A constant whose value is the length of the signature in bytes.

### constant KeyLength

#### Signature(s)

```
Int KeyLength
```

#### Description

A constant whose value is the length of the private signing keys in bytes.

### method deriveKeyPairFromEntropy

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

### method sign

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

### method verify

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

### method getVerificationKey

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

This class implements the Ed25519 elliptic curve digital signature scheme as described
in [RFC 8032](https://tools.ietf.org/html/rfc8032).

This class should be implemented as a wrapper for an external library that implements the Ed25519 signing scheme.

**Implements** [EllipticCurveSignatureScheme](#interface-ellipticcurvesignaturescheme)

### _static_ method instance

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

### constant SignatureLength

#### Signature(s)

```
Int SignatureLength
```

#### Description

A constant whose value is the length of the signature in bytes.

### constant KeyLength

#### Signature(s)

```
Int KeyLength
```

#### Description

A constant whose value is the length of the private signing keys in bytes.

### method deriveKeyPairFromEntropy

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

#### Testing Procedure

**Given**

`entropy1` and `entropy2` are two arbitrary entropy values

**And**

`msg1` and `msg2` are two arbitrary  [byte vectors](/docs/Modules/Common/External%20Libraries/ByteVector)

**When**

```
ed25519 = new Ed25519()
keyPair1 = ed25519.deriveKeyPairFromEntropy(entropy1, None)
keyPair2 = ed25519.deriveKeyPairFromEntropy(entropy2, None)
sig = ed25519.sign(keyPair1[0], msg1)
```

**Then**

`ed25519.verify(sig, msg1, keyPair1[0])` should return `true`

`ed25519.verify(sig, msg1, keyPair2[0])` should return `false`

`ed25519.verify(sig, msg2, keyPair1[0])` should return `false`

### method sign

#### Signature(s)

```
sign(privateKey: ByteVector, message: ByteVector) returns ByteVector
```

#### Description

Sign a message using a private signing key.

#### Parameters

* `privateKey` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the private signing
  key to use to sign the message.
* `message` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the message to sign.

#### Returns

A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the signature.

#### Errors

_*None*_

#### Testing Procedure

The test vectors in https://datatracker.ietf.org/doc/html/rfc8032#section-7.1 specify values for `secretKey`, `message`
and `signature`. The test should verify that the signature returned by `sign` matches the expected signature for each
value of `secretKey` and `message`.

### method verify

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

#### Testing Procedure

The test vectors in https://datatracker.ietf.org/doc/html/rfc8032#section-7.1 specify values for `publicKey`, `message`
and `signature`. The test should verify that the `verify` function returns true for the combinations of these values in
the test vectors. The test should also include some combinations of the values from different test vectors for which it
should return false.

### method getVerificationKey

#### Signature(s)

```
getVerificationKey(privateKey: ByteVector) returns ByteVector
```

#### Description
Get the public verification key corresponding to a private signing key.

#### Parameters
* `privateKey` — A [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) containing the private signing
  key to use to derive the public verification key.

#### Returns
The verification key corresponding to the given private signing key.
