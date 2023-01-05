# Hash

This sub-module of crypto is responsible for hashing data. It contains the classes described below. It is likely that
there will be more in the future.

## Class Blake2b256

This class is responsible for hashing data using the Blake2b256 algorithm. It can be implemented as a thin wrapper
around the Blake2b256 algorithm provided by a library for the implementation language.

### Constructor

#### Signature(s)

```
Blake2b256()
```

#### Description

Construct a `Blake2b256` object.

#### Parameters

_*None*_

#### Returns

The constructed `Blake2b256` object.

#### Errors

_*None*_

#### Testing Procedure

The test for the constructor is included in the test for the `hash` method.

### hash

#### Signature(s)

```
hash(bytes: ByteVector) returns ByteVector
hash(byteVectorList: List[ByteVector]) returns ByteVector
```

#### Description

Hash the given data using the Blake2b256 algorithm.

For implementation languages that support repeating parameters, the first signature should be used with a parameter that
is allowed to occur one or more times. For implementation languages that do not support repeating parameters, the second
signature should be used with a parameter that is a list of `ByteVector` objects.

#### Parameters

* bytes — The data to be hashed. This parameter may occur one or more times. This applies only to implementation
  languages that support repeating parameters.
* byteVectorList — The data to be hashed. This parameter is a list of `ByteVector` objects. This applies only to
  implementation languages that do not support repeating parameters.

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

the testing procedure for this method/functions
is [described on a separate page](Hash/Hash%20Tests/Blake2b256Tests).
