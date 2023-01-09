# Mnemonic

This sub-module is responsible for generating and consuming mnemonic phrases.

A mnemonic represents a set of random entropy that can be used to derive a private key or other type of value.
This implementation follows a combination of [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
and [SLIP-0023](https://github.com/satoshilabs/slips/blob/master/slip-0023.md).

## class Language

Represents a set of 2048 words that can be used to create a mnemonic.

### constructor

The details of the constructor for this class are not exposed. Instead, instances of this class are obtained from its
static methods.

### filePath

#### Signature(s)

```
filePath() returns String
```

#### Description

Returns a string representing the path to the file containing the words for this language.

#### Parameters

_*None*_

#### Returns

Returns a string representing the path to the file containing the words for this language. The format of the file path
is implementation specific, but it should be usable by `LanguageWordList.validated` to read the file.

#### Errors

_*None*_

### hash

#### Signature(s)

```
hash() returns String
```

#### Description

Returns a SHA-256 hash of the expected contents of the file identified by `filePath()`.

#### Parameters

_*None*_

#### Returns

Returns a SHA-256 hash of the expected contents of the file identified by `filePath()`.

#### Errors

_*None*_


### chineseSimplified

#### Signature(s)

```
static chineseSimplified() returns Language
```

#### Description

Returns an instance of `Language` representing the Chinese Simplified language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Chinese Simplified language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/chinese_simplified.txt.

The value returned by `hash()` should be `"bfd683b91db88609fabad8968c7efe4bf69606bf5a49ac4a4ba5e355955670cb"`

#### Errors

_*None*_



### chineseTraditional

#### Signature(s)

```
static chineseTraditional() returns Language
```

#### Description

Returns an instance of `Language` representing the Chinese Traditional language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Chinese Traditional language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/chinese_traditional.txt.

The value returned by `hash()` should be `"85b285c4e0e3eb1e52038e2cf4b4f8bba69fd814e1a09e063ce3609a1f67ad62"`

#### Errors

_*None*_



### czech

#### Signature(s)

```
static czech() returns Language
```

#### Description

Returns an instance of `Language` representing the Czech language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Czech language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/czech.txt.

The value returned by `hash()` should be `"f9016943461800f7870363b4c301c814dbcb8f4de801e6c87d859eba840469d5"`

#### Errors

_*None*_



### english

#### Signature(s)

```
static english() returns Language
```

#### Description

Returns an instance of `Language` representing the English language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the English language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/english.txt.

The value returned by `hash()` should be `"ad90bf3beb7b0eb7e5acd74727dc0da96e0a280a258354e7293fb7e211ac03db"`

#### Errors

_*None*_

===========================

## class MnemonicSizes

This class provides entropy and checksum lengths in bits as described in
[BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). These lengths are based on the size of the
mnemonic phrase in words.

No unit tests are prescribed for this class. It is tested in the course of unit testing other classes such
as [Entropy](#entropy).

### constructor

#### Signature(s)

```
MnemonicSizes(wordLength: Int)
```

#### Description

Constructs a `MnemonicSizes` object that provides
the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropy length and checksum length for
the given word length.

#### Parameters

* `wordLength` — The length of a mnemonic phrase in
  words. [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) requires this to be a multiple of 3.

#### Returns

The constructed object with values set for the `wordLength`, `entropyLength` and `checksumLength` fields.

#### Errors

Signal an error if `wordLength` is not a multiple of 3.

### wordLength

#### Signature(s)

```
wordLength() returns Int
```

#### Description

Returns the wordLength value that this `MenomicSizes` object was constructed for.

#### Parameters

_*None*_

#### Returns

Returns the wordLength value that this `MenomicSizes` object was constructed for.

#### Errors

_*None*_

### entropyLength

#### Signature(s)

```
entropyLength() returns Int
```

#### Description

Returns the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropyLength value based on the
wordLength value that this `MenomicSizes` object was constructed for.

#### Parameters

_*None*_

#### Returns

Returns the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropyLength value based on the
wordLength value that this `MenomicSizes` object was constructed for.

#### Errors

_*None*_

### checksumLength

#### Signature(s)

```
checksumLength() returns Int
```

#### Description

Returns the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) checksumLength value based on the
wordLength value that this `MenomicSizes` object was constructed for.

#### Parameters

_*None*_

#### Returns

Returns the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropyLength value based on the
wordLength value that this `MenomicSizes` object was constructed for.

#### Errors

_*None*_

### words<x/>_nn_

#### Signature(s)

```
words12() returns MnemonicSize
words15() returns MnemonicSize
words18() returns MnemonicSize
words21() returns MnemonicSize
words24() returns MnemonicSize
```

#### Description

Returns a singleton `MnemonicSize` object for a mnemonic word length of 12, 15, 18, 21 or 24.

#### Parameters

_*None*_

#### Returns

Returns a singleton `MnemonicSize` object for a mnemonic word length of 12, 15, 18, 21 or 24.

#### Errors

_*None*_

## Entropy

This class encapsulates a [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropy value.

### constructor

#### Signature(s)

```
Entropy(value: ByteVector)
```

#### Description

Constructs an Entropy object

#### Parameters

* `value` — a `ByteVector` that contains the entropy value.

#### Returns

The constructed object

#### Errors

_*None*_

### generate

#### Signature(s)

```
static generate(size: MnemonicSizes)
```

#### Description

Generates an entropy object with pseudo-random content.

#### Parameters

* `size` — a `MnemonicSizes` object appropriate for the mnemonic length to be generated.<br/>
  The default value is `MnemonicSizes.words12()`

#### Returns

The generated entropy.

#### Errors

_*None*_

#### Implementation Notes

There should not be any need to make this thread-safe. The only time this is called is when a new wallet is created.

### toMnemonicString

#### Signature(s)

```
MnemonicSizes(wordLength: Int)
```

#### Description

Constructs

#### Parameters

* `wordLength` — The length of a mnemonic phrase in words. BIP-39 requires this to be a multiple of 3.

#### Returns

The constructed

#### Errors

_*None*_

============================

### name

#### Signature(s)

```
MnemonicSizes(wordLength: Int)
```

#### Description

Constructs

#### Parameters

* `wordLength` — The length of a mnemonic phrase in words. BIP-39 requires this to be a multiple of 3.

#### Returns

The constructed

#### Errors

_*None*_

