# Lower Level API

## Transaction-Related Interfaces

#### **BifrostClient**

All classes that can be used a client to interact with Topl bifrost nodes implement this interface.

##### Note

It is possible and likely that public methods/functions will be added to this interface in the future. Implementations of this interface should not make any assumptions about members not being added to this interface.

##### Type Parameters

*None*

##### Implemented By

[BifrostTetraClient](#bifrosttetraclient)

##### Methods/Functions

*No public methods/functions*

##### Implementation Notes

*None*

---

### MintableToken

This interface is implemented by objects that represent a mintable token.

#### Implemented by

[GroupConstructor](#groupconstructor), [SeriesConstructor](#seriesconstructor), [AssetConstructor](#assetconstructor)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

--- 

### SupplyType

This interface is implemented by objects that represent a minting token supply policy.

#### Implemented by

The return values of [SupplyTypeFactory](#supplytypefactory)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### Auth

This interface is implemented by objects that represent authorization information necessary to access off-chain data.

#### Implemented by

The return values of [AuthFactory](#authfactory)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### CommitType

This interface is implemented by objects that represent the commitment scheme for a Series Policy.

#### Implemented by

The return values of [CommitTypeFactory](#committypefactory)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### Policy

This interface is implemented by objects that represent an off-chain Group or Series Policy.

#### Implemented by

[GroupPolicy](#grouppolicy), [SeriesPolicy](#seriespolicy)

#### Methods/Functions

* ``` getId ``` \
  Returns the ID associated with this policy. This should be identifiable via the fields in the implementing classes.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte32
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getEvidence ``` \
  Returns the evidence for this policy.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte32
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setRegistrationUtxo ``` \
  Sets the arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this group policy has been generated previously. This box ID must be unique for policy registrations across transactions.
    * *Parameters* 
      * ` boxId ` \
      The Box ID
        * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

## Transaction-Related Classes

### AuthFactory

A utility class to provide authorization objects necessary to access off-chain data.

#### Constructor

The construct is private or there is none.

#### Implements

The return values of all functions return an implementation of [Auth](#auth)

#### Methods/Functions

* ``` public ``` \
  Returns Auth object used for a publicly accessible resource
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [Auth](#auth)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` oidc_m2m ``` \
  Returns Auth object used for a resource accessible by OpenId Connect Machine to Machine
    * *Parameters* 
      * ` clientId ` \
      TBD
        * Type: String
        * Optional: no
      * ` clientSecret ` \
      TBD
        * Type: String
        * Optional: no
      * ` idP ` \
      TBD
        * Type: String
        * Optional: no
      * ` audience ` \
      TBD
        * Type: String
        * Optional: no
    * *Returns* \
      Result
        * S = [Auth](#auth)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### SupplyTypeFactory

A utility class to provide token supply policies.

#### Constructor

The construct is private or there is none.

#### Implements

The return values of all functions return an implementation of [SupplyType](#supplytype)

#### Methods/Functions

* ``` capped ``` \
  Represents a capped supply policy. The production of tokens with this type will be limited to a set maximum.
    * *Parameters* 
        * ``` maxSupply ``` \
        The maximum supply of a token that this policy will allow to exist.
            * Type: UInt128
            * Optional: no
    * *Returns* \
      Result
        * S = [SupplyType](#supplytype) \
      An object that indicates that the supply of a token is capped at the time of its initial minting. There will never be more than the max quantity.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` fixed ``` \
  Represents a fixed supply policy. The production of tokens with this type will be restricted after the initial minting.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [SupplyType](#supplytype) \
      An object that indicates that the supply of a token is fixed at the time of its first (and only) minting.
      There will never be any more.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` unlimited ``` \
  Represents an unlimited supply policy. The production of tokens with this type will not be limited based on quantity.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [SupplyType](#supplytype) \
      An object that indicates that the supply of a token is unlimited.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### CommitTypeFactory

A utility class to provide supply policy commitment types.

#### Constructor

The construct is private or there is none.

#### Implements

The return values of all functions return an implementation of [CommitType](#committype)

#### Methods/Functions

* ``` hash ``` \
  Returns an object that represents a Hash commitment type.
    * *Parameters* 
      * ``` hashAlgo ``` \
      Type of hashing algorithm to use
        * Type: MessageDigester
        * Optional: yes
        * Default: TBD
    * *Returns* \
      Result
        * S = [CommitType](#committype) \
      An object that represents a Hash commitment type
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` merkleTree ``` \
  Returns an object that represents a MerkleTree commitment type.
    * *Parameters* 
      * ``` hashAlgo ``` \
      Type of hashing algorithm to use
        * Type: MessageDigester
        * Optional: yes
        * Default: TBD
      * ``` blockSize ``` \
      Block size to use in Bytes.
        * Type: UInt16
        * Optional: yes
        * Default: 1024
    * *Returns* \
      Result
        * S = [CommitType](#committype) \
      An object that represents a MerkleTree commitment type
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` rsaAccumulator ``` \
  Returns an object that represents an RSA Accumulator commitment type.
    * *Parameters* 
      * ``` bitSize ``` \
      Bit size to use.
        * Type: UInt32
        * Optional: yes
        * Default: 2048
    * *Returns* \
      Result
        * S = [CommitType](#committype) \
      An object that represents an RSA Accumulator commitment type
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### GroupPolicy

Objects of this class represents an off-chain Group Policy.

#### Constructor

* ``` label ``` \
The label for defining the name of a group, constraints?
    * Type: String
    * Optional: no
* ``` fixedSeriesPolicy ``` \
Restrict the Group to have only a single type of series token that is applicable to this Group
    * Type: Byte32
    * Optional: yes
* ``` supplyControlForSeries ``` \
Defines the expected on-chain behavior for how many Series may be "assigned" to a Group
    * Type: [SupplyType](#supplytype)
    * Optional: no
* ``` mintConditionsForSeries ``` \
Defines the proposition that must be stamped on a Group Constructor (is this needed?)
    * Type: [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
    * Optional: no
* ``` registrationUtxo ``` \
An arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this group policy has been generated previously. This box ID must be unique for policy registrations across transactions.
    * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
    * Optional: yes

#### Implements

[Policy](#policy)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### SeriesPolicy

Objects of this class represents an off-chain Series Policy.

#### Constructor

* ``` label ``` \
The label for defining the name of a series, constraints?
    * Type: String
    * Optional: no
* ``` interGroupFungible ``` \
Should the protocol consider this series fungible with other like tokens that share this group id? (may go between series)
    * Type: Boolean
    * Optional: no
* ``` interSeriesFungible ``` \
Should the protocol consider this series fungible with other like tokens that share this series id? (may go between groups)
    * Type: Boolean
    * Optional: no
* ``` quantityIncrease ``` \
Should the protocol allow the "quantity" field in an asset token of this type to increase?
    * Type: Boolean
    * Optional: no
* ``` quantityDecrease ``` \
Should the protocol allow the "quantity" field in an asset token of this type to decrease?
    * Type: Boolean
    * Optional: no
* ``` supplyControlForAssets ``` \
Defines the expected on-chain behavior for how many Asset Tokens may be "produced" within a Series
    * Type: [SupplyType](#supplytype)
    * Optional: no
* ``` mintControlForAssets ``` \
Defines the proposition that must be stamped on a Series Constructor (is this needed?)
    * Type: Proposition
    * Optional: no
* ``` registrationUtxo ``` \
An arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this series policy has been generated previously. This box ID must be unique for policy registrations across transactions.
    * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
    * Optional: yes
* ``` commitScheme ``` \
This value defines the expected type of committment that users should employee when verifying data on asset tokens within this series. 
    * Type: [CommitType](#committype)
    * Optional: no
* ``` metadataScheme ``` \
A (possibly mixin based) metadata definition that allows for application level data constructs. Possible schemes that this value could denote include HasUnit, HasDecimals, MimePointer, LookupKey, Labeled, Unstructured, Versionable, and more.
    * Type: TBD
    * Optional: no

#### Implements

[Policy](#policy)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### ConstructorToken

An object representing a Group or Series Constructor Token.

#### Constructor

* ``` quantity ``` \
The quantity of this Constructor token.
    * Type: UInt128
    * Optional: no
* ``` policyevidence ``` \
The policy evidence for this constructor token.
    * Type: Byte32
    * Optional: no

#### Implements

*None*

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### AssetTokenV2

An object representing a V2 Asset Token.

#### Constructor

* ``` label ``` \
The asset label of this token. The label encompasses the IDs of the group and series it belongs to
    * Type: String
    * Optional: no
* ``` quantity ``` \
The quantity of this token
    * Type: Int128
    * Optional: no
* ``` commitRoot ``` \
The commitment root for this token.
    * Type: Byte127
    * Optional: no
* ``` metadata ``` \
Optional metadata associated with this token.
    * Type: Byte127
    * Optional: yes

#### Implements

*None*

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### TransactionInput

An instance of this class represents [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22)

#### Constructor

> 🚧 Note
> We are assuming that the proposition associated with the box is available to us.

* ``` boxId ``` \
The ID of the box that this input is associated to.
    * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
    * Optional: no
* ``` proof ``` \
The proof needed to consume the box
    * Type: [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
    * Optional: yes


#### Implements

*None*

#### Methods/Functions

* ``` getBoxId ``` \
  Returns the boxId associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getProposition ``` \
  Returns the proposition associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setProof ``` \
  Add the proof associated with this TransactionInput to satisfy the proposition.
    * *Parameters* 
      * `proof` \
      The proof to satisfy this input's proposition.
        * Type: [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getProof ``` \
  Returns the proof associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getValue ``` \
  Returns the value associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = [BoxValue](BoxValue) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken) \
        > 🚧 Note
        > AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

In general, the Proposition and Value will be obtainable in the local wallet via the supplied `boxId`

---

### GroupConstructor

An instance of this class represents a mintable Group Constructor Token.

#### Constructor

* ``` policy ``` \
The group policy tied to this GroupConstructor token.
    * Type: [GroupPolicy](#grouppolicy)
    * Optional: no

#### Implements

[MintableToken](#mintabletoken)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### SeriesConstructor

An instance of this class represents a mintable Series Constructor Token.

#### Constructor

* ``` policy ``` \
The series policy tied to this SeriesConstructor token.
    * Type: [SeriesPolicy](#seriespolicy)
    * Optional: no

#### Implements

[MintableToken](#mintabletoken)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### AssetConstructor

An instance of this class represents a mintable Asset Constructor Token.

#### Constructor

* ``` groupPolicy ``` \
The group policy tied to this AssetConstructor token.
    * Type: [GroupPolicy](#grouppolicy)
    * Optional: no
* ``` seriesPolicy ``` \
The series policy tied to this AssetConstructor token.
    * Type: [SeriesPolicy](#seriespolicy)
    * Optional: no

#### Implements

[MintableToken](#mintabletoken)

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### TransactionOutput

An object representing a transaction output.

###### Type Parameters

*None*

#### Constructor

> 🚧 Note
> AssetTokenV2 and ConstructorToken will be reflected as a [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) in protobuff in the near future.

* ``` address ``` \
The address of this output.
    * Type: [Address](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/address.proto#L10)
    * Optional: no
* ``` value ``` \
An object representing the value contained in this output.
    * Type: [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [ConstructorToken](#constructortoken) | [AssetTokenV2](#assettokenv2)
    * Optional: no
* ``` minting ``` \
An optional object representing the policy which determines if minting is allowed. If not provided, the output is not considered a minting output
    * Type: [MintableToken](#mintabletoken)
    * Optional: yes

#### Implements

*None*

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### Transaction

An object representing a [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11).

###### Type Parameters

*None*

#### Constructor

* ``` inputs ``` \
The inputs of this transaction.
    * Type: Array of [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22)
    * Optional: no
* ``` outputs ``` \
The outputs of this transaction.
    * Type: Array of [Transaction.Output](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L33)
    * Optional: no
* ``` schedule ``` \
An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
    * Type: [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42)
    * Optional: yes
    * Default: TBD
* ``` data ``` \
Data to be associated with this transaction. Has no effect on the protocol level.
    * Type: Byte127
    * Optional: yes

#### Implements

*None*

#### Methods/Functions

* ``` getUnprovenInputs ``` \
  Returns the inputs to this transaction without a proof.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Array of [TransactionInput](#transactioninput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

# EZ API

## Transaction-Related Classes

### BifrostTetraClient

This class contains functions to assist in creating common easy-to-use components to initiate transactions.

#### Implemented by

*No public implementations*

#### Methods/Functions

* ``` input ``` \
  Returns a built [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22)
    * *Parameters* 
        * ``` requiredQuantity ``` \
        The required quantity that this input needs
            * Type: UInt128
            * Optional: no
        * `assetIdentifier` \
        An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, LVL type, TOPL type, etc) 
          * Type: String
          * Optional: no
        * `path` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the input will be obtained. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `proof` \
        The proof to use with this input. 
          * Type: [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
          * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `path` is invalid
            * A token defined by `assetType` does not exist
            * The quantity of `assetType` does not exist in `path` location
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` output ``` \
  Returns a built minting [Transaction.Output](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L33)
    * *Parameters* 
        * `path` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) where the output will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `value` \
        The value of this output.
          * Type: [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) ([EmptyBoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L35), PolyBoxValue, [ArbitBoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L42), AssetV1BoxValue) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken)
          * Optional: no
        * `minting` \
        The mintable token. Required if this is a minted output.
          * Type: [MintableToken](#mintabletoken)
          * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction.Output](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L33)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Entity at `path` does not exist
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerConstructor ``` \
  Returns a built [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for registering a Group or Series Constructor Token
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        TThe path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the input will be obtained and fee change will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42)
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` policy ``` \
        The policy that we are registering.
            * Type: [Policy](#policy)
            * Optional: no
        * ``` tokenQuantity ``` \
        The quantity of constructor token to create.
            * Type: UInt128
            * Optional: no
        * ``` outputPath ``` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) where the created token will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
    * *Returns* \
      Result
        * S = [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintAsset ``` \
  Returns a built [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for minting a new V2 Asset Token.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the input will be obtained and fee change will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42)
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` assetLabel ``` \
        The label of the v2 asset token we are minting. This label includes the corresponding group ID and series ID.
            * Type: String
            * Optional: no
        * ``` constructorPath ``` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`)  from where the group and series constructor tokens will be obtained and their change will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
        * ``` tokenQuantity ``` \
        The quantity of asset tokens to create.
            * Type: UInt128
            * Optional: no
        * ``` metadata ``` \
        Optional metadata to include with the minted asset token. If the output data is hosted off-chain, then this is the URL where the data is hosted.
            * Type: Byte127
            * Optional: yes
        * ``` offChainAuth ``` \
        Required for outputs that store off-chain data. An object that provides authorization information to access the off-chain data.
            * Type: [Auth](#auth)
            * Optional: yes
            * Default: If not provided, output would be considered on-chain
        * ``` outputPath ``` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) where the created token will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
    * *Returns* \
      Result
        * S = [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * SeriesPolicy is not a type TTXX
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` transfer ``` \
  Returns a built [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for transferring tokens.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the input will be obtained and fee change will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42)
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * `assetIdentifier` \
        An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, LVL type, TOPL type, etc) 
          * Type: String
          * Optional: no
        * `inputPath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the input will be obtained and it's change will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `quantity` \
        The quantity of the token that we are transferring.
          * Type: String
          * Optional: yes
          * Default: All quantity in all boxes of `assetType` within `inputPath`
        * ``` metadata ``` \
        Optional metadata to include with the minted asset token. If the data is hosted off-chain, then this is the URL where the data is hosted.
            * Type: Byte127
            * Optional: yes
        * ``` offChainAuth ``` \
        Required for outputs that store off-chain data. An object that provides authorization information to access the off-chain data.
            * Type: [Auth](#auth)
            * Optional: yes
            * Default: If not provided, output would be considered on-chain
        * ` outputPath ` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) where the output will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
    * *Returns* \
      Result
        * S = [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

# Examples and Diagrams

Note that the following examples are done in language agnostic pseudo-code. Also note that any calls prefixed with Brambl (for e.x., `Brambl.someFunction()`) means that the function will be defined elsewhere in the Brambl library.

## Creating Inputs

### Directly from box
Using lower level: TransactionInput(boxId)

### Derived from requirements
using EZ API: BifrostTetraClient.input(...)

## Creating Outputs

### Directly from arguments
Using lower level: TransactionOutput(...)

### Derived from requirements
Using EZ API: BifrostTetraClient.output(...)

## Creating Transactions

### Directly from arguments
Using lower level: Transaction(...)

### Based on common use-cases

#### Register a Group Policy
groupPolicy = GroupPolicy(...)
BifrostTetraClient.registerContructor(...)

#### Register a Series Policy
seriesPolicy = SeriesPolicy(...)
BifrostTetraClient.registerContructor(...)

#### Mint an Asset

##### Using pre-existing Group and Series Tokens
groupPolicy = GroupPolicy(...)
BifrostTetraClient.registerContructor(...)
seriesPolicy = SeriesPolicy(...)
BifrostTetraClient.registerContructor(...)
---- some time later ----
BifrostTetraClient.mintAsset(...)

##### Group and Series Tokens Not Yet Registered 
BifrostTetraClient.registerAsset(...)

#### Transfer a Token
BifrostTetraClient.transfer(...)

## Handling Off-Chain Data

In some cases, you may want the optional data associated with an asset token output to be hosted else-where. Certain parameters in the EZ API will facilitate this; specifically, `metadata` and `offChainAuth` in `BifrostTetraClient.mintAsset` and `BifrostTetraClient.transfer`. 

For on-chain data `metadata` is optional but, if provided, can be anything. For off-chain data `metadata` is required and *must* be the URL in which the hosted data resides.

For on-chain data `offChainAuth` should not be speficied. For off-chain data, `offChainAuth` is required.

Please note that this is only possible for asset tokens. Off-chain data is not possible for TOPL, LVL, or ConstructorToken outputs.

An example of an off-chain transfer:
```
BifrostTetraClient.transfer(
  assetIdentifier=Brambl.assetType("wheat")
  metadata="https://example.com"
  offChainAuth=AuthFactory.public()
)
```