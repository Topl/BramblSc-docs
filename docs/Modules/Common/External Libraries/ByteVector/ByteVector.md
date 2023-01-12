# ByteVector

This page describes a data type named `ByteVector` that is used in the Brambl SDK for some of its methods/functions.

A `ByteVector` object is an immutable vector of bytes, backed by a balanced binary tree of chunks. Most operations are
logarithmic in the depth of this tree, including concatenate, prepend, append, update, and insert. Where possible,
operations return lazy views rather than copying any underlying bytes. Use copy to copy all underlying bytes to a fresh,
array-backed ByteVector.

Below is a description of an interface that defines the behavior of a `ByteVector` object. The details of the class
that implements this interface are not specified in this document. In particular, the constructor(s) for the class will
be implementation specific.

Additional conversion functions/methods beyond those mentioned belos may be useful. The specific types will vary with
the implementation language. Some conversion functions/methods that may be useful will be to streams, I/O streams,
buffers and bit vectors.

## Interface ByteVector

This class is responsible for hashing data using the Blake2b-256 algorithm. It can be implemented as a thin wrapper
around the Blake2b-256 algorithm provided by a library for the implementation language.

### method size

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

### method isEmpty

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

### method nonEmpty

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

### method get

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

### method update

#### Signature(s)

```
update(idx: Long, b: Byte) returns ByteVector
```

#### Description

Create a vector with the byte at the specified index replaced with the specified byte.

This is equivalent to `this.take(idx).append(b).concatenate(this.drop(idx + 1))`.

#### Parameters

* `idx` — The index of the byte to replace.
* `b` — The byte to replace the byte at the specified index with.

#### Returns

The updated vector.

#### Errors

_*None*_

### method insert

#### Signature(s)

```
insert(idx: Long, b: Byte) returns ByteVector
```

#### Description

Returns a vector with the specified byte inserted at the specified index.

This is equivalent to `this.take(idx).append(b).concatenate(this.drop(idx))`.

#### Parameters

* `idx` — The index at which to insert the byte.
* `b` — The byte to insert.

#### Returns

Returns a new `ByteVector` with the insertion.

#### Errors

Signals an error if the index is out of bounds (<0 or >= size).

### method splice

#### Signature(s)

```
splice(idx: Long, b: ByteVector) returns ByteVector
```

#### Description

Returns a vector with the specified byte vector inserted at the specified index.

This is equivalent to `this.take(idx).concatenate(b).concatenate(this.drop(idx))`.

#### Parameters

* `idx` — The index at which to insert the byte vector.
* `b` `ByteVector` — The byte vector to insert.

#### Returns

Returns a new `ByteVector` with the insertion.

#### Errors

_*None*_

### method patch

#### Signature(s)

```
patch(idx: Long, b: ByteVector) returns ByteVector
```

#### Description

Returns a vector with the specified byte vector replacing bytes `idx` to `idx + b.size`. If `idx+b.size` is greater than
the size of this vector, then the result is longer than this vector.

This is equivalent to `this.take(idx).concatenate(b).concatenate(this.drop(idx + b.size))`.

#### Parameters

* `idx` — The index at which to replace the byte vector.
* `b` `ByteVector` — The byte vector to replace the existing bytes.

#### Returns

Returns a new `ByteVector` with the replacement.

#### Errors

_*None*_

### method concatenate

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

### method append

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

### method prepend

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

### method drop

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

### method dropRight

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

### method dropWhile

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

### method take

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

### method takeRight

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

### method takeWhile

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

### method splitAt

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

### method slice

#### Signature(s)

```
slice(from: Long, until: Long) returns ByteVector
```

#### Description

Returns a vector made up of the bytes starting at index `from` up to index `until`.

This is equivalent to `this.drop(from).take(until - from.max(0))`.

#### Parameters

* `from` — The index at which to start the slice.
* `until` — The index at which to end the slice.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method acquire

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

Returns a vector whose contents are the results of taking the first n bytes of this vector.

#### Errors

If this vector does not contain at least n bytes, an error is signalled.

### method consume

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

### method foreach

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

### method startsWith

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

### method endsWith

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

### method indexOfSlice

#### Signature(s)

```
indexOfSlice(slice: ByteVector): Long
indexOfSlice(slice: ByteVector, from: Long): Long
```

#### Description

Finds the first index of the specified byte pattern in this vector.

#### Parameters

* `slice` — The byte pattern to search for.
* `from` — The index at which to start the search. Defaults to 0.

#### Returns

Returns the index of the first occurrence of the specified byte pattern, or -1 if the pattern is not found.

#### Errors

_*None*_

### method containsSlice

#### Signature(s)

```
containsSlice(slice: ByteVector) returns Boolean
```

#### Description

Determines if the specified slice is in this vector.

#### Parameters

* `slice` — The byte pattern to search for.

#### Returns

Returns true if the specified slice is in this vector.

#### Errors

_*None*_

### method head

#### Signature(s)

```
head() returns Byte
```

#### Description

Returns the first byte in this vector.

#### Parameters

_*None*_

#### Returns

Returns the first byte in this vector.

#### Errors

Signals an error if this vector is empty.

### method headOption

#### Signature(s)

```
headOption() returns Option[Byte]
```

#### Description

Returns the first byte of this vector or None if the vector is empty.

#### Parameters

_*None*_

#### Returns

Returns an Option containing the first byte of this vector or None if the vector is empty.

#### Errors

_*None*_

### method tail

#### Signature(s)

```
tail() returns ByteVector
```

#### Description

Returns a vector containing all bytes in this vector except the first byte.

#### Parameters

_*None*_

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method init

#### Signature(s)

```
init() returns ByteVector
```

#### Description

Returns a vector containing all bytes in this vector except the last byte.

#### Parameters

_*None*_

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method last

#### Signature(s)

```
last() returns Byte
```

#### Description

Returns the last byte in this vector.

#### Parameters

_*None*_

#### Returns

Returns the last byte in this vector.

#### Errors

Signals an error if this vector is empty.

### method tailOption

#### Signature(s)

```
tailOption() returns Option[Byte]
```

#### Description

Returns the last byte of this vector or None if the vector is empty.

#### Parameters

_*None*_

#### Returns

Returns an Option containing the last byte of this vector or None if the vector is empty.

#### Errors

_*None*_

### method padRight

#### Signature(s)

```
padRight(n: Long) returns ByteVector
```

#### Description

Returns an n-byte vector whose contents are this vector's contents followed by 0 or more zero bytes.

#### Parameters

* `n` — The larger size to pad to.

#### Returns

Returns the new padded `ByteVector`.

#### Errors

Signals an error if n is less than the size of this vector.

### method padLeft

#### Signature(s)

```
padLeft(n: Long) returns ByteVector
```

#### Description

Returns an n-bytes vector whose contents are 0 or more zero bytes followed by this vector's contents.

#### Parameters

* `n` — The larger size to pad to.

#### Returns

Returns the new padded `ByteVector`.

#### Errors

Signals an error if n is less than the size of this vector.

### method map

#### Signature(s)

```
map(f: (Byte) returns Byte) returns ByteVector
```

#### Description

Computes a new byte vector where each byte is the result of applying the specified function to the corresponding byte in
this vector. This method returns a view and hence, is O(1). Call compact to generate a new strict vector.

#### Parameters

_*None*_

#### Returns

Returns the new `ByteVector`.

#### Errors

Signals an error if the specified function signals an error.

### method reverse

#### Signature(s)

```
reverse() returns ByteVector
```

#### Description

Returns a vector with the bytes of this vector in reverse order. This method returns a view and hence, is O(1). Call
compact to generate a new strict vector.

#### Parameters

_*None*_

#### Returns

Returns a vector with the bytes of this vector in reverse order.

#### Errors

_*None*_

### method shiftLeft

#### Signature(s)

```
shiftLeft(n: Long) returns ByteVector
```

#### Description

Computes a new byte vector that contains the bits of this vector shifted left by the specified number of bits.

#### Parameters

* `n` — The number of bits to shift left.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method shiftRight

#### Signature(s)

```
shiftRight(n: Long) returns ByteVector
```

#### Description

Computes a new byte vector that contains the bits of this vector shifted right by the specified number of bits.

#### Parameters

* `n` — The number of bits to shift right.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method rotateLeft

#### Signature(s)

```
rotateLeft(n: Long) returns ByteVector
```

#### Description

Computes a new byte vector that contains the bits of this vector rotated left by the specified number of bits.

#### Parameters

* `n` — The number of bits to rotate left.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method rotateRight

#### Signature(s)

```
rotateRight(n: Long) returns ByteVector
```

#### Description

Computes a new byte vector that contains the bits of this vector rotated right by the specified number of bits.

#### Parameters

* `n` — The number of bits to rotate right.

#### Returns

Returns the new `ByteVector`.

#### Errors

_*None*_

### method compact

#### Signature(s)

```
compact() returns ByteVector
```

#### Description

Returns a vector with the same contents but represented as a single tree node internally.
This may involve copying data, but has the advantage that lookups index directly into a single node rather than
traversing a logarithmic number of nodes in this tree.
Calling this method on an already compacted vector is a no-op.

#### Parameters

_*None*_

#### Returns

Returns the compacted `ByteVector`.

#### Errors

_*None*_

### method partialCompact

#### Signature(s)

```
partialCompact(chunkSize: Long) returns ByteVector
```

#### Description

Invokes compact on any subtrees whose size is <= chunkSize.

#### Parameters

* `chunkSize` — The threshold size of chunks to compact.

#### Returns

Returns the compacted `ByteVector`.

#### Errors

_*None*_

### method copy

#### Signature(s)

```
copy() returns ByteVector
```

#### Description

Returns a vector with the same contents as this vector but with a single compacted node made up by evaluating all
internal nodes and concatenating their values.

#### Parameters

_*None*_

#### Returns

Returns the copied `ByteVector`.

#### Errors

_*None*_

### method toArray

#### Signature(s)

```
toArray returns Array[Byte]
```

#### Description

Allocate a new array and copy the contents of this vector into it.

#### Parameters

_*None*_

#### Returns

Returns the byte array.

#### Errors

_*None*_

### method copyToArray

#### Signature(s)

```
copyToArray(xs: Array[Byte], start: Int)
copyToArray(xs: Array[Byte], start: Int)copyToArray(xs: Array[Byte], start: Int, offset: Long, size: Int)
```

#### Description

Copies the contents of this vector into the specified array starting at the specified index. Bytes that do not fit in
the array are silently dropped.

#### Parameters

* `xs` — The array to copy into.
* `start` — The index in the array `xs` to start copying at.
* `offset` — The offset in this vector to start copying from. Defaults to zero.
* `size` — The number of bytes to copy.

#### Returns

_*None*_

#### Errors

### method toHex

#### Signature(s)

```
toHex() returns String
```

#### Description

Returns a hexadecimal string representation of this vector. Each byte is represented by two hexadecimal digits.

#### Parameters

_*None*_

#### Returns

Returns the number of bytes in this `ByteVector`.

#### Errors

_*None*_

### method hashCode

#### Signature(s)

```
hashCode() returns Int
```

#### Description

Calculates a hash code for this vector. The result is cached.

#### Parameters

_*None*_

#### Returns

Returns the hashcode.

#### Errors

_*None*_

### method equals

#### Signature(s)

```
equals(that: Object) returns Bool
```

#### Description

Returns true if `that` is a `ByteVector` that has the same content as this.

#### Parameters

_*None*_

#### Returns

Returns true if `that` is a `ByteVector` that has the same content as this.

#### Errors

_*None*_

