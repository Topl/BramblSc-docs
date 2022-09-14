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

### GroupToken

An object representing a Group Constructor Token.

#### Constructor

The construct is private or there is none.

#### Implements

*None*

#### Methods/Functions

* ``` getQuantity ``` \
  Returns the quantity of this token.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Int128 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setQuantity ``` \
  Sets the quantity of this token.
    * *Parameters* 
      * ``` quantity ``` \
      The quantity of this token
        * Type: Int128
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setPolicyEvidence ``` \
  Set the group policy evidence for this constructor token.
    * *Parameters* 
        * ``` policyEvidence ``` \
        The Group Policy Evidence
            * Type: Byte32
            * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getPolicyEvidence ``` \
  Returns the group policy evidence for this constructor token.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte32 \
      The Group Policy Evidence
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### SeriesToken

An object representing a Series Constructor Token.

#### Constructor

The construct is private or there is none.

#### Implements

*None*

#### Methods/Functions

* ``` getQuantity ``` \
  Returns the quantity of this token.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Int128 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setQuantity ``` \
  Sets the quantity of this token.
    * *Parameters* 
      * ``` quantity ``` \
      The quantity of this token
        * Type: Int128
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setPolicyEvidence ``` \
  Set the series policy evidence for this constructor token.
    * *Parameters* 
        * ``` policyEvidence ``` \
        The Series Policy Evidence
            * Type: Byte32
            * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getPolicyEvidence ``` \
  Returns the series policy evidence for this constructor token.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte32 \
      The Series Policy Evidence
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### AssetToken

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

* ``` box ``` \
The box that this input is associated to.
    * Type: Box
    * Optional: no

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
        * S = BoxValue | [AssetToken](#assettoken) | [GroupToken](#grouptoken) | [SeriesToken](#seriestoken) \
        > 🚧 Note
        > AssetToken, GroupToken, and SeriesToken will be reflected as a BoxValue in protobuff in the near future. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

In general, the Proposition, Proof and Value will be obtainable in the local wallet via the supplied `boxId`

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
> AssetToken, GroupToken, and SeriesToken will be reflected as a BoxValue in protobuff in the near future.

* ``` address ``` \
The address of this output.
    * Type: Address
    * Optional: no
* ``` value ``` \
An object representing the value contained in this output.
    * Type: BoxValue | [GroupToken](#grouptoken) | [SeriesToken](#seriestoken) | [AssetToken](#assettoken)
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

### OutputFactory

Utility class used to build transaction outputs.

#### Implements

*None*

#### Methods/Functions

* ``` nanoPoly ``` \
  Build a nanopoly output. This is generally only used in transfers.
    * *Parameters* 
        * ``` address ``` \
        The address where the output NanoPolys will reside
            * Type: Address
            * Optional: no
        * ``` quantity ``` \
        The quantity of NanoPolys to include in the output.
            * Type: UInt128
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)\<NanoPoly>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` assetToken ``` \
  Build an asset token output. 
    * *Parameters* 
        * ``` address ``` \
        The address where the output asset token(s) will reside
            * Type: Address
            * Optional: no
        * ``` quantity ``` \
        The quantity of the asset token(s) to include in the output.
            * Type: UInt128
            * Optional: no
        * ``` assetLabel ``` \
        The label that the output asset token is associated with. This label includes its associated Group ID and Series ID.
            * Type: String
            * Optional: no
        * ``` commitRoot ``` \
        The commitment root of the token
            * Type: Byte127
            * Optional: no
        * ``` metadata ``` \
        Optional metadata associated with this token.
            * Type: Byte127
            * Optional: yes
      Result
        * S = [TransactionOutput](#transactionoutput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

# EZ API

## Transaction-Related Classes


### TransactionFactory

This interface is implemented by objects that build transactions.

#### Implemented by

*No public implementations*

#### Methods/Functions

* ``` registerAssetGroup ``` \
  Registers an asset group.
    * *Parameters* 
        * ``` feeInput ``` \
        Fee for the registration transaction. Type of the value is expected to be NanoPoly
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` feeQuantity ``` \
        Quantity of NanoPolys to use for the fee
            * Type: UInt128
            * Optional: yes
            * Default: 100
        * ``` changeAddress ``` \
        The address to contain any excess funds
            * Type: Address
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` groupPolicy ``` \
        The policy of the group that we are registering.
            * Type: [GroupPolicy](#grouppolicy)
            * Optional: no
        * ``` tokenQuantity ``` \
        The quantity of group constructor token to creatae.
            * Type: UInt128
            * Optional: no
        * ``` outputAddress ``` \
        The address to contain the newly created group constructor token.
            * Type: Address
            * Optional: no
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Not enough funds to satisfy the fee quantity
            * The fee input is not a NanoPoly type
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerAssetSeries ``` \
  Registers an asset series.
    * *Parameters* 
        * ``` feeInput ``` \
        Fee for the registration transaction. Type of the value is expected to be NanoPoly
            * Type: [TransactionInput](#transactioninput)
            * Optional: yes
            * Default: If not provided, the fee will be taken from excess input.
        * ``` feeQuantity ``` \
        Quantity of NanoPolys to use for the fee
            * Type: UInt128
            * Optional: yes
            * Default: 100
        * ``` changeAddress ``` \
        The address to contain any excess funds
            * Type: Address
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` seriesPolicy ``` \
        The policy of the series that we are registering.
            * Type: [SeriesPolicy](#seriespolicy)
            * Optional: no
        * ``` tokenQuantity ``` \
        The quantity of series constructor token to creatae.
            * Type: UInt128
            * Optional: no
        * ``` outputAddress ``` \
        The address to contain the newly created series constructor token.
            * Type: Address
            * Optional: no
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Not enough funds to satisfy the fee quantity
            * The fee input is not a NanoPoly type
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintAssetToken ``` \
  Mints an asset token
    * *Parameters* 
        * ``` feeInput ``` \
        Fee for the registration transaction. Type of the value is expected to be NanoPoly
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` feeQuantity ``` \
        Quantity of NanoPolys to use for the fee
            * Type: UInt128
            * Optional: yes
            * Default: 100
        * ``` changeAddress ``` \
        The address to contain any excess funds
            * Type: Address
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` groupConstructorToken ``` \
        The input containing the group constructor token for this new asset token.
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` seriesConstructorToken ``` \
        The input containing the series constructor token for this new asset token.
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` output ``` \
        The minted asset token output.
            * Type: [TransactionOutput](#transactionoutput)
            * Optional: no
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Not enough funds to satisfy the fee quantity
            * The fee input is not a NanoPoly type
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` transferAsset ``` \
  Transfers asset tokens
    * *Parameters* 
        * ``` feeInput ``` \
        Fee for the registration transaction. Type of the value is expected to be NanoPoly
            * Type: [TransactionInput](#transactioninput)
            * Optional: yes
            * Default: If not provided, the fee will be taken from excess funds in the inputs.
        * ``` feeQuantity ``` \
        Quantity of NanoPolys to use for the fee
            * Type: UInt128
            * Optional: yes
            * Default: 100
        * ``` changeAddress ``` \
        The address to contain any unclaimed assets
            * Type: Address
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` inputs ``` \
        The token inputs to transfer.
            * Type: Array of [TransactionInput](#transactioninput)
            * Optional: no
        * ``` outputs ``` \
        The transferred outputs.
            * Type: [TransactionOutput](#transactionoutput)
            * Optional: no
            * Optional: yes
    * *Returns* \
      Result
        * S = Transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Not enough funds to satisfy the fee quantity
            * The fee input is not a NanoPoly type
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.


#### Implementation Notes

Registering a series and group policy cannot directly take in the output since the registrationUtxo is going to be bound to the box ID of the fee which will affect the policyEvidence field on the output value.