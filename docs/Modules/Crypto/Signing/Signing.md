# Signing

The Signing submodule of crypto is responsible for signing data. Currently only one signing scheme is supported, which
is the Ed25519 scheme. The class that implements it is below. 

There is not currently any interface exposed that would be implemented by `Ed25519` and any additional signing schemes.
Implementers of Brambl should assume that such an interface may be exposed in the future.

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

