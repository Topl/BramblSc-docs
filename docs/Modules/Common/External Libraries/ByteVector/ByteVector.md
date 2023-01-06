# ByteVector

This page describes a data type named `ByteVector` that is used in the Brambl SDK for some of its methods/functions.

A `ByteVector` object is an immutable vector of bytes, backed by a balanced binary tree of chunks. Most operations are
logarithmic in the depth of this tree, including ++, :+, +:, update, and insert. Where possible, operations return lazy
views rather than copying any underlying bytes. Use copy to copy all underlying bytes to a fresh, array-backed
ByteVector.

## Interface ByteVector

This class is responsible for hashing data using the Blake2b-256 algorithm. It can be implemented as a thin wrapper
around the Blake2b-256 algorithm provided by a library for the implementation language.

### size

#### Signature(s)

```
size() returns Long
```

#### Description

Returns the number of bytes in this `ByteVector`.

#### Parameters

_*None*_

#### Returns

Returns the number of bytes in this `ByteVector`.

#### Errors

_*None*_

### isEmpty

#### Signature(s)

```
isEmpty() returns Boolean
```

#### Description

Returns true if this vector has no bytes.

#### Parameters

_*None*_

#### Returns

Returns true if this vector has no bytes.

#### Errors

_*None*_

### nonEmpty

#### Signature(s)

```
nonEmpty() returns Boolean
```

#### Description

Returns true if this vector has a non-zero number of bytes.

#### Parameters

_*None*_

#### Returns

Returns true if this vector has a non-zero number of bytes.

#### Errors

_*None*_

### get

#### Signature(s)

```
get(index: Long) returns Byte
```

#### Description

Gets the byte at the specified index.

#### Parameters

* `index` — The index of the byte to get.

#### Returns

Returns the byte at the specified index.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### update

#### Signature(s)

```
update(idx: Long, b: Byte) returns ByteVector
```

#### Description

Create a vector with the byte at the specified index replaced with the specified byte.

#### Parameters

* `idx` — The index of the byte to replace.
* `b` — The byte to replace the byte at the specified index with.

#### Returns

The updated vector.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### insert

#### Signature(s)

```
insert(idx: Long, b: Byte) returns ByteVector
```

#### Description

Returns a vector with the specified byte inserted at the specified index.

#### Parameters

* `idx` — The index at which to insert the byte.
* `b` — The byte to insert.

#### Returns

Returns a new `ByteVector` with the insertion.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### splice

#### Signature(s)

```
splice(idx: Long, b: ByteVector) returns ByteVector
```

#### Description

Returns a vector with the specified byte vector inserted at the specified index.

#### Parameters

* `idx` — The index at which to insert the byte vector.
* `b` `ByteVector` — The byte vector to insert.

#### Returns

Returns a new `ByteVector` with the insertion.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### patch

#### Signature(s)

```
patch(idx: Long, b: ByteVector) returns ByteVector
```

#### Description

Returns a vector with the specified byte vector replacing bytes `idx` to `idx + b.size`.

#### Parameters

* `idx` — The index at which to replace the byte vector.
* `b` `ByteVector` — The byte vector to replace the existing bytes.

#### Returns

Returns a new `ByteVector` with the replacement.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### concatenate

#### Signature(s)

```
concatenate(other: ByteVector) returns ByteVector
```

#### Description

Returns a new byte vector representing this vector's contents followed by the specified vector's contents.

#### Parameters

_*None*_

#### Returns

Returns a new byte vector representing this vector's contents followed by the specified vector's contents.

#### Errors

_*None*_

### append

#### Signature(s)

```
append(other: Byte) returns ByteVector
```

#### Description

Returns a new byte vector representing this vector's contents followed by the specified byte.

#### Parameters

* `other` — The byte to append to this vector.

#### Returns

Returns a new byte vector representing this vector's contents followed by the specified byte.

#### Errors

_*None*_

### prepend

#### Signature(s)

```
prepend(other: Byte) returns ByteVector
```

#### Description

Returns a new byte vector representing this vector's contents preceded by the specified byte.

#### Parameters

* `other` — The byte to prepend to this vector.

#### Returns

Returns a new byte vector representing this vector's contents preceded by the specified byte.

#### Errors

_*None*_

### drop

#### Signature(s)

```
drop(n: Long) returns ByteVector
```

#### Description

Returns a vector of all bytes in this vector except the first n bytes.
The resulting vector's size is `max(0, size - n)`.

#### Parameters

* `n` — The number of bytes to drop from the beginning of this vector. Negative values are treated as 0.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### dropRight

#### Signature(s)

```
dropRight(n: Long) returns ByteVector
```

#### Description

Returns a vector of all bytes in this vector except the last n bytes.
The resulting vector's size is `max(0, size - n)`.

#### Parameters

* `n` — The number of bytes to drop from the end of this vector. Negative values are treated as 0.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### dropWhile

#### Signature(s)

```
dropWhile(f: (Byte) returns Boolean) returns ByteVector
```

#### Description

Drops the longest prefix of this vector such that every byte of the prefix satisfies the specific predicate.

#### Parameters

* `f` — The predicate used to test bytes. This is a function that takes a byte and returns a boolean.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### take

#### Signature(s)

```
take(n: Long) returns ByteVector
```

#### Description

Returns a vector of the first n bytes of this vector.
The resulting vector's size is `min(n, size)`.

*Note*: if an exactly n-byte vector is required, use the acquire method instead.

#### Parameters

* `n` — The number of bytes to take from the beginning of this vector. Negative values are treated as 0.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### takeRight

#### Signature(s)

```
takeRight(n: Long) returns ByteVector
```

#### Description

Returns a vector of the last n bytes of this vector.
The resulting vector's size is `min(n, size)`.

#### Parameters

* `n` — The number of bytes to take from the end of this vector. Negative values are treated as 0.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### takeWhile

#### Signature(s)

```
takeWhile(f: (Byte) returns Boolean) returns ByteVector
```

#### Description

Returns the longest prefix of this vector such that every byte of the prefix satisfies the specific predicate.

#### Parameters

* `f` — The predicate used to test bytes. This is a function that takes a byte and returns a boolean.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### splitAt

#### Signature(s)

```
splitAt(n: Long): Array[ByteVector]
```

#### Description

Returns an array of two vectors such that the first element is equal to `take(n)` and the second element is equal to
`drop(n)`.

#### Parameters

* `n` — The index at which to split this vector.

#### Returns

The array of two byte vectors.

#### Errors

_*None*_

### slice

#### Signature(s)

```
slice(from: Long, until: Long) returns ByteVector
```

#### Description

Returns a vector made up of the bytes starting at index from up to index until.

#### Parameters

* `from` — The index at which to start the slice.
* `until` — The index at which to end the slice.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### acquire

#### Signature(s)

```
acquire(n: Long) returns ByteVector
```

#### Description

Returns a vector whose contents are the results of taking the first n bytes of this vector.

_See also_: take

#### Parameters

* `n` — The number of bytes to take from the beginning of this vector. Negative values are treated as 0.

#### Returns

Returns the number of bytes in this `ByteVector`.

#### Errors

If this vector does not contain at least n bytes, an error is signalled.

### consume

#### Signature(s)

```
consume( n: Long, decode: (ByteVector) returns Object) returns Array[Object]
```

#### Description

Consumes the first n bytes of this vector and decodes them with the specified function, resulting in a vector of the
remaining bytes and the decoded value. 

#### Parameters

* `n` — The number of bytes to consume.
* `decode` — The function used to decode the bytes. This is a function that takes a `ByteVector` and returns an object.

#### Returns

Returns an array of two elements: the first element is a byte vector containing the remaining bytes, and the second
element is the decoded value.

#### Errors

If this vector does not have n bytes or an error occurs while decoding, an error is signaled.



### foreach

#### Signature(s)

```
foreach(f: (Byte))
```

#### Description

Apply the specified function to each byte in this vector.

#### Parameters

* `f` — The function to apply to each byte. This is a function that takes a byte and returns nothing.

#### Returns

Returns nothing.

#### Errors

Signals an error if the specified function signals an error.



### startsWith

#### Signature(s)

```
startsWith(b: ByteVector): Boolean
```

#### Description

Returns true if this byte vector starts with the specified vector.

#### Parameters

* `b` — The vector to test as a prefix of the byte vector.

#### Returns

Returns true if this byte vector starts with the specified vector.

#### Errors

_*None*_



### endsWith

#### Signature(s)

```
endsWith(b: ByteVector): Boolean
```

#### Description

Returns true if this byte vector ends with the specified vector.

#### Parameters

* `b` — The vector to test as a suffix of the byte vector.

#### Returns

Returns true if this byte vector ends with the specified vector.

#### Errors

_*None*_

=========================================

### size

#### Signature(s)

```
size() returns Long
```

#### Description

Returns the number of bytes in this `ByteVector`.

#### Parameters

_*None*_

#### Returns

Returns the number of bytes in this `ByteVector`.

#### Errors

_*None*_
