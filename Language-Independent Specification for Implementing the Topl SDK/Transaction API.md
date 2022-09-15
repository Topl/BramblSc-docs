# Lower Level API

## Transaction-Related Interfaces

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
* ``` setRegistrationUtxO ``` \
  Sets the arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this group policy has been generated previously. This box ID must be unique for policy registrations across transactions.
    * *Parameters* 
      * ` boxId ` \
      The Box ID
        * Type: Box.Id
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
    * Type: Proposition
    * Optional: no
* ``` registrationUtxo ``` \
An arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this group policy has been generated previously. This box ID must be unique for policy registrations across transactions.
    * Type: Box.Id
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
    * Type: Box.Id
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

An object representing an Asset Token.

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

An instance of this class represents Transaction.Input

#### Constructor

> 🚧 Note
> We are assuming that the proposition associated with the box is available to us.

* ``` boxId ``` \
The ID of the box that this input is associated to.
    * Type: Box.Id
    * Optional: no
* ``` proof ``` \
The proof needed to consume the box
    * Type: Proof
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
        * S = Box.Id
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getProposition ``` \
  Returns the proposition associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Proposition
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setProof ``` \
  Add the proof associated with this TransactionInput to satisfy the proposition.
    * *Parameters* 
      * `proof` \
      The proof to satisfy this input's proposition.
        * Type: Proof
        * Optional: no
    * *Returns* \
      Result
        * S = Proof
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getProof ``` \
  Returns the proof associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Proof
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getValue ``` \
  Returns the value associated with this TransactionInput.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = BoxValue | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken) \
        > 🚧 Note
        > AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

In general, the Proposition and Value will be obtainable in the local wallet via the supplied `boxId`

---

### GroupConstructor

An instance of this class represents a Group Constructor Token.

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

An instance of this class represents a Series Constructor Token.

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

An instance of this class represents an Asset Constructor Token.

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
> AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future.

* ``` address ``` \
The address of this output.
    * Type: Address
    * Optional: no
* ``` value ``` \
An object representing the value contained in this output.
    * Type: BoxValue | [ConstructorToken](#constructortoken) | [AssetTokenV2](#assettokenv2)
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

# EZ API

## Transaction-Related Classes

### Client

This class contains functions to assist in creating common easy-to-use components to initiate transactions.

#### Implemented by

*No public implementations*

#### Methods/Functions

* ``` input ``` \
  Returns a built Transaction.Input
    * *Parameters* 
        * ``` requiredQuantity ``` \
        The required quantity that this input needs
            * Type: UInt128
            * Optional: no
        * `assetType` \
        A human readable label which maps to a type of asset (a AssetV2 token, NanoPoly, NanoArbit, etc) 
          * Type: String
          * Optional: no
        * `path` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`)  from where the input will be obtained. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
    * *Returns* \
      Result
        * S = Transaction.Input
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Entity at yName does not exist
            * A token defined by assetType does not exist
            * The quantity of assetType does not exist in yName location
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` output ``` \
  Returns a built minting Transaction.Output
    * *Parameters* 
        * `path` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`)  where the output will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `value` \
        The value of this output.
          * Type: BoxValue (EmptyBoxValue, PolyBoxValue, ArbitBoxValue, AssetV1BoxValue) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken)
          * Optional: no
        * `minting` \
        The mintable token. Required if this is a minted output.
          * Type: [MintableToken](#mintabletoken)
          * Optional: yes
    * *Returns* \
      Result
        * S = Transaction.Output
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Entity at yName does not exist
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerConstructor ``` \
  Returns a built Transaction for registering a Group or Series Constructor Token
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        TThe path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) from where the input will be obtained. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `changePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) where any excess tokens will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
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
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) where the created token will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintAsset ``` \
  Returns a built Transaction for minting a new V2 Asset Token.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`)  from where the input will be obtained. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `changePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) where any excess tokens will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` assetLabel ``` \
        The label of the asset we are minting. This label includes the corresponding group ID and series ID.
            * Type: String
            * Optional: no
        * ``` tokenQuantity ``` \
        The quantity of asset tokens to create.
            * Type: UInt128
            * Optional: no
        * ``` metadata ``` \
        Optional metadata to include with the minted asset token.
            * Type: Byte127
            * Optional: yes
        * ``` outputPath ``` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) where the created token will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` transfer ``` \
  Returns a built Transaction for transferring tokens.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`)  from where the input will be obtained. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * `changePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) or address (i.e., the `x/y/z` in `x/y/z`) where any excess tokens will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` inputs ``` \
        The explicit inputs of this transfer.
            * Type: Array of Transaction.Input
            * Optional: no
        * ``` outputs ``` \
        The explicit outputs of this transfer.
            * Type: Array of Transaction.Output
            * Optional: no
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*