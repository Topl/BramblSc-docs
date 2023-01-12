# Mnemonic

This submodule is responsible for generating and consuming mnemonic phrases.

A mnemonic represents a set of random entropy that can be used to derive a private key or other type of value.
This implementation follows a combination of [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
and [SLIP-0023](https://github.com/satoshilabs/slips/blob/master/slip-0023.md).

## class Language

Represents a set of 2048 words that can be used to create a mnemonic.

### constructor

The details of the constructor for this class are not exposed. Instead, instances of this class are obtained from its
static methods

* `Language.chineseSimplified`
* `Language.chineseTraditional`
* `Lanfuage.czech`
* `Language.english`
* `Language.french`
* `Language.italian`
* `Language.japanese`
* `Language.korean`
* `Language.spanish`

### method filePath

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

### method hash

#### Signature(s)

```
hash() returns String
```

#### Description

Returns an SHA-256 hash of the expected contents of the file identified by `filePath()`.

#### Parameters

_*None*_

#### Returns

Returns an SHA-256 hash of the expected contents of the file identified by `filePath()`.

#### Errors

_*None*_

### _static_ method chineseSimplified

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

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method chineseTraditional

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

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method czech

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

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method english

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

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method french

#### Signature(s)

```
static french() returns Language
```

#### Description

Returns an instance of `Language` representing the French language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the French language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/french.txt.

The value returned by `hash()` should be `"9cbdaadbd3ce9cbaee1b360fce45e935b21e3e2c56d9fcd56b3398ced2371866"`

#### Errors

_*None*_

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method italian

#### Signature(s)

```
static italian() returns Language
```

#### Description

Returns an instance of `Language` representing the Italian language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Italian language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/italian.txt.

The value returned by `hash()` should be `"80d2e90d7436603fd6e57cd9af6f839391e64beac1a3e015804f094fcc5ab24c"`

#### Errors

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

_*None*_

### _static_ method japanese

#### Signature(s)

```
static japanese() returns Language
```

#### Description

Returns an instance of `Language` representing the Japanese language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Japanese language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/japanese.txt.

The value returned by `hash()` should be `"d9d1fde478cbeb45c06b93632a487eefa24f6533970f866ae81f136fbf810160"`

#### Errors

_*None*_

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method korean

#### Signature(s)

```
static korean() returns Language
```

#### Description

Returns an instance of `Language` representing the Korean language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Korean language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/korean.txt.

The value returned by `hash()` should be `"f04f70b26cfef84474ff56582e798bcbc1a5572877d14c88ec66551272688c73"`

#### Errors

_*None*_

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method portuguese

#### Signature(s)

```
static portuguese() returns Language
```

#### Description

Returns an instance of `Language` representing the Portuguese language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Portuguese language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/portuguese.txt.

The value returned by `hash()` should be `"eed387d44cf8f32f60754527e265230d8019e8a2277937c71ef812e7a46c93fd"`

#### Errors

_*None*_

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

### _static_ method spanish

#### Signature(s)

```
static spanish() returns Language
```

#### Description

Returns an instance of `Language` representing the Spanish language.

#### Parameters

_*None*_

#### Returns

Returns an instance of `Language` representing the Spanish language. The contents of the file identified by
its `filePath()` should be the same as the contents of the file
at https://raw.githubusercontent.com/Topl/BramblSc/main/crypto/src/main/resources/bip-0039/spanish.txt.

The value returned by `hash()` should be `"a556a26c6a5bb36db0fb7d8bf579cb7465fcaeec03957c0dda61b569962d9da5"`

#### Errors

_*None*_

#### Testing Procedure

The test for this method is to pass its result to `LanguageWordList.validated` and verify that it returns
a `LanguageWordList` instance that contains the same words as the file.

## class LanguageWordList

This class provides a list of words in a given language. The list of words is used to generate or parse a mnemonic
phrase.

### Constructor

The details of this class's constructor are not specified in this document. The constructor is not intended to be
called directly by user code. Instead, instances of this class should be obtained by calling the static method
`LanguageWordList.validate`.

method value

#### Signature(s)

```
value() returns List[String]
```

#### Description

Returns a List of the words used by mnemonic phrases for this language.

#### Parameters

_*None*_

#### Returns

Returns a List of the words used by mnemonic phrases for this language.

#### Errors

_*None*_

#### Testing Procedure

Testing this method is covered by the tests for `Language.chineseSimplified`, `Language.chineseTraditional`,
`Language.english`, `Language.french`, `Language.italian`, `Language.japanese`, `Language.korean`,
`Language.portuguese`, and `Language.spanish`.

### _static_ method validated

#### Signature(s)

```
static validated(language: Language) returns LanguageWordList
```

#### Description

Returns a `LanguageWordList` instance that contains a list of the mnemonic words for the given language.

#### Parameters

A `Language` instance that represents the language for which a list of mnemonic words is desired.

#### Returns

Returns a `LanguageWordList` instance that contains a list of the mnemonic words for the given language.

#### Errors

* Signal an error if the file identified by the `filePath()` method of the given `Language` instance cannot be read.
* Signal an error if the SHA-256 hash of its contents is not what is expected.

#### Testing Procedure

Testing this method is covered by the tests for `Language.chineseSimplified`, `Language.chineseTraditional`,
`Language.english`, `Language.french`, `Language.italian`, `Language.japanese`, `Language.korean`,
`Language.portuguese`, and `Language.spanish`.

## class MnemonicSizes

This class provides entropy and checksum lengths in bits as described in
[BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). These lengths are based on the size of the
mnemonic phrase in words.

No unit tests are prescribed for this class. It is tested in the course of unit testing other classes such
as [Entropy](#class-entropy).

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

### method wordLength

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

### method entropyLength

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

### method checksumLength

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

### method words<x/>_nn_

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

## class Entropy

This class encapsulates a [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) entropy value.

### constructor

#### Signature(s)

```
Entropy(value: ByteVector)
```

#### Description

Constructs an Entropy object

#### Parameters

* `value` — a [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) that contains the entropy value.

#### Returns

The constructed object

#### Errors

_*None*_

### _static_ method generate

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

#### Testing Procedure

`Entropy.generate().toMnemonicString()` should not signal an error.

### _static_ method toMnemonicString

#### Signature(s)

```
static toMnemonicString(entropy: Entropy, language: Language) returns String
```

#### Description

Constructs a mnemonic string from the entropy value.

#### Parameters

* `entropy` — an `Entropy` object that contains the entropy value.
* `language` — a `Language` object that identifies the language to use for the mnemonic string.
  The default value is `Language.english()`.

#### Returns

The constructed mnemonic string.

#### Errors

Signals an error if:

* The entropy value is not a valid length.
* The checksum of the mnemonic string is not equal to the hash of the entropy value.
* The file identified by the `filePath()` method of the given `Language` instance cannot be read
* The SHA-256 hash of the file's contents is not what is expected.

#### Testing Procedure

**Given**

```
entropy = Entropy.generate()
```

**Then**

```
entropy == Entropy.fromMnemonicString(Entropy.toMnemonicString(entropy), Language.english())
```

### _static_ method fromMnemonicString

#### Signature(s)

```
static fromMnemonicString(mnemonicString: String, language: Language) returns Entropy
```

#### Description

Instantiates an `Entropy` object from a mnemonic string by validating the string and computing the entropy of the string
according to [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) word lists.

#### Parameters

* `mnemonicString` — a mnemonic string to be decoded.
* `language` — a `Language` object that identifies the language to pull the word list from.

#### Returns

The `Entropy` object.

#### Errors

* Signal an error if the file identified by the `filePath()` method of the given `Language` instance cannot be read.
* Signal an error if the SHA-256 hash of its contents is not what is expected.
* Signal an error if the mnemonic string is not a valid length.
* Signal an error if the mnemonic string cannot be decoded.

#### Testing Procedure

**Given**

```
entropy = Entropy.generate()
```

**Then**

```
entropy == Entropy.fromMnemonicString(Entropy.toMnemonicString(entropy), Language.english())
```

### _static_ method fromUuid

#### Signature(s)

```
_static_ fromUuid(uuid: UUID) returns Entropy
```

#### Description

Instantiates an `Entropy` object from a UUID.

#### Parameters

* `uuid` — a `UUID` object to be converted to an `Entropy` object. The actual value of the UUID will be the usual
  representation of a UUID in the implementation language.

#### Returns

The constructed `Entropy` object.

#### Errors

_*None*_

#### Testing Procedure

**Given**
`uuid` is a valid UUID object.

**Then**

`Entropy.fromUuid(uuid).toMnemonicString()` should not signal an error.

### method fromBytes

#### Signature(s)

```
fromBytes(bytes: ByteVector) returns Entropy
```

#### Description

Constructs

#### Parameters

* `bytes` — a [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) that contains the entropy value.

#### Returns

The constructed `Entropy` object.

#### Errors

Signals an error if the length of the given `ByteVector` is not a valid length for entropy.

#### Testing Procedure

**Given**

`byteLengths` is List(16, 20, 24, 28, 32)

**When**
`byteLength` is each element of `byteLengths`

**And**
`bytes` is a `ByteVector` of length `byteLength`

**Then**
`Entropy.toMnemonicString(Entropy.fromBytes(bytes))` should not signal an error.
