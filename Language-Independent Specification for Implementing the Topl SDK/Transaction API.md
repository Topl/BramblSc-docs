# Lower Level API

## Transaction-Related Interfaces

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
* ``` getEvidence ``` \
  Returns the associated policy evidence.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte32
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### TransactionBuilder

This interface is implemented by objects that build transactions.

#### Implemented by

*No public implementations*

#### Methods/Functions

* ``` registerAssetGroup ``` \
  Registers an asset group.
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)\<NanoPoly>
            * Optional: no
        * ``` output ``` \
        The registered group constructor token output.
            * Type: [TransactionOutput](#transactionoutput)\<[GroupToken](#grouptoken)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) containing the [GroupToken](#grouptoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerAssetSeries ``` \
  Registers an asset series.
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` output ``` \
        The registered group constructor token output.
            * Type: [TransactionOutput](#transactionoutput)\<[GroupToken](#grouptoken)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) containing the [Seriestoken](#seriestoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintAssetToken ``` \
  Mints an asset token
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)\<NanoPoly>
            * Optional: no
        * ``` groupConstructorToken ``` \
        The group constructor token for this new asset token.
            * Type: [TransactionInput](#transactioninput)\<[GroupToken](#grouptoken)>
            * Optional: no
        * ``` seriesConstructorToken ``` \
        The series constructor token for this new asset token.
            * Type: [TransactionInput](#transactioninput)\<[SeriesToken](#seriestoken)>
            * Optional: no
        * ``` output ``` \
        The minted asset token output.
            * Type: [TransactionOutput](#transactionoutput)\<[OnChainAsset](#onchainasset)|[OffChainAsset](#offchainasset)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) with the [AssetToken](#assettoken) (either [OnChainAsset](#onchainasset) or [OffChainAsset](#offchainasset))
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` transferAsset ``` \
  Transfers asset tokens
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)\<NanoPoly>
            * Optional: no
        * ``` inputs ``` \
        The token inputs to transfer.
            * Type: Array of [TransactionInput](#transactioninput)\<[AssetToken](#assettoken)|NanoPoly>
            * Optional: no
        * ``` outputs ``` \
        The transferred outputs.
            * Type: [TransactionOutput](#transactionoutput)\<[AssetToken](#assettoken)|NanoPoly>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.


#### Implementation Notes

*None*

---

### AssetToken

An object representing an Asset Token.

#### Implemented by

[OnChainAsset](#onchainasset), [OffChainAsset](#offchainasset)

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
* ``` setAssetLabel ``` \
  Set the asset label associated with this asset token. This value represents the Group ID and Series ID that this token is associated with.
    * *Parameters* 
        * ``` label ``` \
        The asset label
            * Type: String
            * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getAssetLabel ``` \
  Returns the asset label associated with this asset token. This value represents the Group ID and Series ID that this token is associated with.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = String \
      The asset label.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getCommitRoot ``` \
  Returns the commitment hash of this asset.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Byte127 \
      The commit root.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

The data that the commit root is based off of depends on the implementing class.

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
    * *Parameters* \
    *None* 
    * *Returns* \
      Result
        * S = [CommitType](#committype) \
      An object that represents a Hash commitment type
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` merkleTree ``` \
  Returns an object that represents a MerkleTree commitment type.
    * *Parameters* \
    *None* 
    * *Returns* \
      Result
        * S = [CommitType](#committype) \
      An object that represents a MerkleTree commitment type
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` rsaAccumulator ``` \
  Returns an object that represents an RSA Accumulator commitment type.
    * *Parameters* \
    *None* 
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

> 🚧 Reminder
> Still need to understand how registrationUtxo fits into this.

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
This value provides a uniqueness value that can be checked by the protocol to know if this group policy has been generated previously. It represents a Box.id
    * Type: TBD
    * Optional: no

#### Implements

[Policy](#policy)

#### Methods/Functions

TBD

#### Implementation Notes

*None*

---

### SeriesPolicy

Objects of this class represents an off-chain Series Policy.

> 🚧 Reminder
> Still need to understand how registrationUtxo fits into this.

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
This value provides a uniqueness value that can be checked by the protocol to know if this group policy has been generated previously. It represents a Box.id
    * Type: TBD
    * Optional: no
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

TBD

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

### OffChainAsset

An object representing an Off-Chain Asset Token.

#### Constructor

The construct is private or there is none.

#### Implements

[AssetToken](#assettoken)

#### Methods/Functions

* ``` setURL ``` \
  Set the URL which contains the data to be associated with this token.
    * *Parameters* 
      * ``` url ``` \
      The URL that hosts the off-chain data
        * Type: String 
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` setAuth ``` \
  Sets the authentication required to access the data at the URL.
    * *Parameters* 
      * ``` auth ``` \
      An authentication object
        * Type: Auth
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

The commit root is generated from the data hosted at the URL.

---

### OnChainAsset

An object representing an On-Chain Asset Token.

#### Constructor

The construct is private or there is none.

#### Implements

[AssetToken](#assettoken)

#### Methods/Functions

* ``` setData ``` \
  Set the data to be associated with this token.
    * *Parameters* 
      * ``` data ``` \
      The data associated with this token
        * Type: String 
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

The commit root is generated from the data.

---

### TransactionInput

An object representing a transaction input.

###### Type Parameters
 
* ``` BoxValue ```: The type of value contained in this input's associated box. For ex., [GroupConstructorToken](#grouptoken), [SeriesConstructorToken](#seriestoken), [AssetToken](#assettoken), NanoPoly

#### Constructor

* ``` boxId ``` \
The ID of the box that this input is associated to. This ID represents the ID of the transaction that produced the box, as well as it's index in the output sequence.
    * Type: TBD
    * Optional: no
* ``` proposition ``` \
The proposition that's needed to satisfy in order to spend the contents of the box.
    * Type: Proposition
    * Optional: no
* ``` value ``` \
An object representing the value from the box that we are transferring.
    * Type: BoxValue
    * Optional: no

#### Implements

*None*

#### Methods/Functions

* ``` prove ``` \
  Prove the input proposition. 
    * *Parameters* 
        * ``` proof ``` \
        The proof to satisfy the input proposition.
            * Type: Proof
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

### TransactionOutput

An object representing a transaction output.

###### Type Parameters

* ``` BoxValue ```: The type of value contained in this output. For ex., [GroupConstructorToken](#grouptoken), [SeriesConstructorToken](#seriestoken), [AssetToken](#assettoken), NanoPoly

#### Constructor

* ``` address ``` \
The address of this output.
    * Type: Address
    * Optional: no
* ``` value ``` \
An object representing the value contained in this output.
    * Type: BoxValue
    * Optional: no
* ``` mintingPolicies ``` \
An object representing the policy which determine if minting is allowed. If not provided, the output is not considered a minting output
    * Type: Array of [Policy](#policy). \
    Valid lengths are 0-2. If length is 2 then the format is [Group Policy, Series Policy]
    * Optional: yes

#### Implements

*None*

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*

---

### Transaction

A transaction object.

#### Constructor

* ``` fee ``` \
The fee this transaction will use. Does not have a corresponding output.
    * Type: [TransactionInput](#transactioninput)\<NanoPoly>
    * Optional: no
* ``` inputs ``` \
The inputs to this transaction. All quantities of these inputs are required to be satisfied but the outputs.
    * Type: Array of [TransactionInput](#transactioninput)
    * Optional: no
* ``` outputs ``` \
The outputs of this transaction. The quantity of all non-minting outputs are required to correspond to input quantities.
    * Type: Boolean
    * Optional: no
* ``` schedule ``` \
An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
    * Type: Schedule
    * Optional: yes
* ``` data ``` \
Data to be associated with this transaction. Has no effect on the protocol level.
    * Type: Byte127
    * Optional: yes

#### Implements

*None*

#### Methods/Functions

* ``` getUnprovenInputs ``` \
  Returns the inputs in this transaction that have no yet been proven.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Array of [TransactionInput](#transactioninput) \
      A collection of transaction inputs that do not have an associating proof.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` getSignableBytes ``` \
  Returns the portion of this transaction to be included in signature proofs.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Bytes/TBD \
      The bytes of this transaction to be included in a signature.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` broadcast ``` \
  Validates, encodes and broadcasts this transaction to the Blockchain. The transaction must be proven prior to broadcasting.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Array of [TransactionInput](#transactioninput) \
      A collection of transaction inputs that do not have an associating proof.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### Schedule

An object representing scheduling information for a transaction.

#### Constructor

* ``` timestamp ``` \
  The creation time stamp.  A UNIX timestamp (ms) of the transaction's original creation.  User-defined with no impact on the protocol.  Must be positive.
  * Type: UInt64
  * Optional: yes
  * Default: Derived from when the containing transaction is broadcasted
* ``` minimumSlot ``` \
  The minimum slot number of the block containing this transaction
  * Type: UInt64
  * Optional: yes
  * Default: No minimum slot
* ``` maximumSlot ``` \
  The maximum slot number of the block constraing this transaction.  Must be greater than `minimumSlot`.
  * Type: UInt64
  * Optional: yes
  * Default: No maximum slot

#### Implements

*None*

#### Methods/Functions

*None*

#### Implementation Notes

*None*

---

### AuthFactory

A utility object containing different forms of authentication

#### Constructor

The construct is private or there is none.

#### Implements

*None*

#### Methods/Functions

> 🚧 Reminder
> The authentication methods that we will be supporting in Phase 1 has not been decided yet. The following is an example

* ``` oidc_m2m ``` \
  Open ID Connect Maching to Machine Authentication
    * *Parameters* 
      * ``` clientId ```
        * Type: String
        * Optional: no 
      * ``` clientSecret ```
        * Type: String
        * Optional: no 
      * ``` IdP ```
        * Type: String
        * Optional: no 
      * ``` audience ```
        * Type: String
        * Optional: no 
    * *Returns* \
      Result
        * S = Auth \
        Object containing Authentication Information
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### InputBuilder

Utility class used to build transaction inputs.

#### Implements

*None*

#### Methods/Functions

* ``` groupToken ``` \
  Build a group constructor token input. This is generally only used when minting an asset token.
    * *Parameters* 
        * ``` quantity ``` \
        The quantity of the group constructor token.
            * Type: UInt128
            * Optional: no
        * ``` boxId ``` \
        The ID of the box where the input will come from. 
            * Type: TBD
            * Optional: no
        * ``` proposition ``` \
        The proposition controlling if this input can be consumed. 
            * Type: Proposition
            * Optional: no
        * ``` policyEvidence ``` \
        The evidence tying the token to its Group Policy.
            * Type: Byte32
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionInput](#transactioninput)\<[GroupToken](#grouptoken)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` seriesToken ``` \
  Build a series constructor token input. This is generally only used when minting an asset token.
    * *Parameters* 
        * ``` quantity ``` \
        The quantity of the series constructor token.
            * Type: UInt128
            * Optional: no
        * ``` boxId ``` \
        The ID of the box where the input will come from. 
            * Type: TBD
            * Optional: no
        * ``` proposition ``` \
        The proposition controlling if this input can be consumed. 
            * Type: Proposition
            * Optional: no
        * ``` policyEvidence ``` \
        The evidence tying the token to its Series Policy.
            * Type: Byte32
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionInput](#transactioninput)\<[SeriesToken](#seriestoken)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` nanoPoly ``` \
  Build a nanopoly input. This is most often used for transaction fees but can also be used for transfer inputs.
    * *Parameters* 
        * ``` quantity ``` \
        The quantity of the series constructor token.
            * Type: UInt128
            * Optional: no
        * ``` boxId ``` \
        The ID of the box where the input will come from. 
            * Type: TBD
            * Optional: no
        * ``` proposition ``` \
        The proposition controlling if this input can be consumed. 
            * Type: Proposition
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionInput](#transactioninput)\<NanoPoly>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` assetToken ``` \
  Build an asset token input. This is generally used for transfer inputs.
    * *Parameters* 
        * ``` quantity ``` \
        The quantity of the series constructor token.
            * Type: UInt128
            * Optional: no
        * ``` boxId ``` \
        The ID of the box where the input will come from. 
            * Type: TBD
            * Optional: no
        * ``` proposition ``` \
        The proposition controlling if this input can be consumed. 
            * Type: Proposition
            * Optional: no
        * ``` assetLabel ``` \
        The label of the asset to transfer. This label includes its associated Group ID and Series ID.
            * Type: String
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionInput](#transactioninput)\<[AssetToken](#assettoken)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

---

### OutputBuilder

Utility class used to build transaction outputs.

#### Implements

*None*

#### Methods/Functions

* ``` groupToken ``` \
  Build a group constructor token output. This is generally only used when registering a new group constructor token.
    * *Parameters* 
        * ``` address ``` \
        The address where the output group constructor token(s) will reside
            * Type: Address
            * Optional: no
        * ``` minting ``` \
        Flag to determing if this output is a minting output
            * Type: Boolean
            * Optional: yes
            * Default: true
        * ``` quantity ``` \
        The quantity of the group constructor token to include in the output.
            * Type: UInt128
            * Optional: no
        * ``` groupPolicy ``` \
        The Group Policy of the token.
            * Type: [GroupPolicy](#grouppolicy)
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)\<[GroupToken](#grouptoken)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` seriesToken ``` \
  Build a series constructor token output. This is generally only used when registering a new (or minting more) series constructor token(s).
    * *Parameters* 
        * ``` address ``` \
        The address where the output series constructor token(s) will reside
            * Type: Address
            * Optional: no
        * ``` minting ``` \
        Flag to determing if this output is a minting output
            * Type: Boolean
            * Optional: yes
            * Default: true
        * ``` quantity ``` \
        The quantity of the series constructor token to include in the output.
            * Type: UInt128
            * Optional: no
        * ``` seriesPolicy ``` \
        The Series Policy of the token.
            * Type: [SeriesPolicy](#seriespolicy)
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)\<[SeriesToken](#seriestoken)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
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
* ``` onChainAsset ``` \
  Build an on-chain asset token output. This is generally only used when transferring or minting new asset tokens.
    * *Parameters* 
        * ``` address ``` \
        The address where the output asset token(s) will reside
            * Type: Address
            * Optional: no
        * ``` minting ``` \
        Flag to determing if this output is a minting output
            * Type: Boolean
            * Optional: yes
            * Default: true
        * ``` quantity ``` \
        The quantity of the asset token(s) to include in the output.
            * Type: UInt128
            * Optional: no
        * ``` assetLabel ``` \
        The label that the output asset token is associated with. This label includes its associated Group ID and Series ID.
            * Type: String
            * Optional: no
        * ``` metadata ``` \
        Optional data to associate with the output asset token(s)
            * Type: String
            * Optional: yes
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)\<[OnChainAsset](#onchainasset)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` offChainAsset ``` \
  Build an off-chain asset token output. This is generally only used when transferring or minting new asset tokens.
    * *Parameters* 
        * ``` address ``` \
        The address where the output asset token(s) will reside
            * Type: Address
            * Optional: no
        * ``` minting ``` \
        Flag to determing if this output is a minting output
            * Type: Boolean
            * Optional: yes
            * Default: true
        * ``` quantity ``` \
        The quantity of the asset token(s) to include in the output.
            * Type: UInt128
            * Optional: no
        * ``` assetLabel ``` \
        The label that the output asset token is associated with. This label includes its associated Group ID and Series ID.
            * Type: String
            * Optional: no
        * ``` url ``` \
        The URL that hosts the off-chain data
            * Type: String
            * Optional: no
        * ``` auth ``` \
        An authentication object containing the necessary information to access the data at the provided `url`. If not provided, the off-chain data must be publically available.
            * Type: Auth
            * Optional: no
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)\<[OffChainAsset](#offchainasset)>
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

#### Implementation Notes

*None*

# EZ API

## Transaction-Related Classes

### TBD

TBD

###### Type Parameters

*None*

#### Constructor

The construct is private or there is none.

#### Implements

*None*

#### Methods/Functions

*No public methods/functions*

#### Implementation Notes

*None*