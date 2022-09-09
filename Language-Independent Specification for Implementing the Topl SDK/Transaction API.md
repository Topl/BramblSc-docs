# Transaction-Related Interfaces

## SupplyType

This interface is implemented by objects that represent a minting token supply policy.

### Implemented by

The return values of [SupplyTypeFactory](#supplytypefactory)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## CommitType

This interface is implemented by objects that represent the commitment scheme for a Series Policy.

### Implemented by

The return values of [CommitTypeFactory](#committypefactory)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## Policy

This interface is implemented by objects that represent an off-chain Group or Series Policy.

### Implemented by

[GroupPolicy](#grouppolicy), [SeriesPolicy](#seriespolicy)

### Methods/Functions

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

### Implementation Notes

*None*

---

## TransactionBuilder

This interface is implemented by objects that build transactions.

### Implemented by

*No public implementations*

### Methods/Functions

> 🚧 Reminder
> Still need to understand how registrationUtxo fits into this.

* ``` registerAssetGroup ``` \
  Registers an asset group.
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)\<NanoPoly>
            * Optional: no
        * ``` tokenOutput ``` \
        The registered group constructor token output.
            * Type: [TransactionOutput](#transactionoutput)\<[GroupToken](#grouptoken)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Boolean
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) containing the [GroupToken](#grouptoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerAssetSeries ``` \
  Registers an asset series.
    * *Parameters* 
        * ``` fee ``` \
        Fee for the registration transaction
            * Type: [TransactionInput](#transactioninput)
            * Optional: no
        * ``` tokenOutput ``` \
        The registered group constructor token output.
            * Type: [TransactionOutput](#transactionoutput)\<[GroupToken](#grouptoken)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Boolean
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) containing the [Seriestoken](#seriestoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintOnChainAsset ``` \
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
        * ``` mintedOutput ``` \
        The minted asset token output.
            * Type: [TransactionOutput](#transactionoutput)\<[OnChainAsset](#onchainasset)|[OffChainAsset](#offchainasset)>
            * Optional: no
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that this transaction will required to be processed by.
            * Type: Schedule
            * Optional: yes
        * ``` data ``` \
        Data to be associated with this transaction. Has no effect on the protocol level.
            * Type: Boolean
            * Optional: yes
    * *Returns* \
      Result
        * S = [Transaction](#transaction) with the [AssetToken](#onchainasset) (either [OnChainAsset](#onchainasset) or [OffChainAsset](#offchainasset))
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The arguments do not constitute a valid transaction
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---

## AssetToken

An object representing an Asset Token.

### Implemented by

[OnChainAsset](#onchainasset), [OffChainAsset](#offchainasset)

### Methods/Functions

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

### Implementation Notes

The data that the commit root is based off of depends on the implementing class.

---

# Transaction-Related Classes

## SupplyTypeFactory

A utility class to provide token supply policies.

### Constructor

The construct is private or there is none.

### Implements

The return values of all functions return an implementation of [SupplyType](#supplytype)

### Methods/Functions

* ``` capped ``` \
  Represents a capped supply policy. The production of tokens with this type will be limited to a set maximum.
    * *Parameters* 
        * ``` maxSupply ``` \
        The maximum supply of a token that this policy will allow to exist.
            * Type: Int28
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

### Implementation Notes

*None*

---

## CommitTypeFactory

A utility class to provide supply policy commitment types.

### Constructor

The construct is private or there is none.

### Implements

The return values of all functions return an implementation of [CommitType](#committype)

### Methods/Functions

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

### Implementation Notes

*None*

---

## GroupPolicy

Objects of this class represents an off-chain Group Policy.

### Constructor

* ``` label ``` \
The label for defining the name of a group, constraints?
    * Type: String
    * Optional: no
* ``` fixedSeriesPolicy ``` \
Restrict the Group to have only a single type of series token that is applicable to this Group
    * Type: String
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

### Implements

[Policy](#policy)

### Methods/Functions

TBD

### Implementation Notes

*None*

---

## SeriesPolicy

Objects of this class represents an off-chain Series Policy.

### Constructor

* ``` label ``` \
The label for defining the name of a series, constraints?
    * Type: String
    * Optional: no
* ``` interGroupFungibile ``` \
Should the protocol consider this series fungible with other like tokens that share this group id? (may go between series)
    * Type: Boolean
    * Optional: no
* ``` interSeriesFungibile ``` \
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

### Implements

[Policy](#policy)

### Methods/Functions

TBD

### Implementation Notes

*None*

---

## GroupToken

An object representing a Group Constructor Token.

### Constructor

The construct is private or there is none.

### Implements

*None*

### Methods/Functions

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

### Implementation Notes

*None*

---

## SeriesToken

An object representing a Series Constructor Token.

### Constructor

The construct is private or there is none.

### Implements

*None*

### Methods/Functions

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

### Implementation Notes

*None*

---

## OffChainAsset

An object representing an Off-Chain Asset Token.

### Constructor

The construct is private or there is none.

### Implements

[AssetToken](#assettoken)

### Methods/Functions

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
        * Type: TBD
        * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

The commit root is generated from the data hosted at the URL.

---

## OnChainAsset

An object representing an On-Chain Asset Token.

### Constructor

The construct is private or there is none.

### Implements

[AssetToken](#assettoken)

### Methods/Functions

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

### Implementation Notes

The commit root is generated from the data.

---

## TransactionInput

An object representing a transaction input.

##### Type Parameters

* ``` BoxValue ```: The type of value contained in this input's associated box. For ex., [GroupConstructorToken](#grouptoken), [SeriesConstructorToken](#seriestoken), [AssetToken](#assettoken), NanoPoly

### Constructor

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

### Implements

*None*

### Methods/Functions

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

### Implementation Notes

*None*

---

## TransactionOutput

An object representing a transaction output.

##### Type Parameters

* ``` BoxValue ```: The type of value contained in this output. For ex., [GroupConstructorToken](#grouptoken), [SeriesConstructorToken](#seriestoken), [AssetToken](#assettoken), NanoPoly

### Constructor

* ``` address ``` \
The address of this output.
    * Type: Address
    * Optional: no
* ``` value ``` \
An object representing the value contained in this output.
    * Type: BoxValue
    * Optional: no
* ``` mintingSeriesPolicy ``` \
An object representing the series policy. Used to determine if minting is allowed. Only valid for a minting output.
    * Type: [SeriesPolicy](#seriespolicy)
    * Optional: yes
* ``` mintingGroupPolicy ``` \
An object representing the group policy. Used to determine if minting is allowed. Only valid for a minting output.
    * Type: [GroupPolicy](#grouppolicy)
    * Optional: yes

### Implements

*None*

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## Transaction

A transaction object.

### Constructor

* ``` fee ``` \
The fee this transaction will use. Does not have a corresponding output.
    * Type: [TransactionInput](#transactioninput)
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
    * Type: Boolean
    * Optional: yes

### Implements

*None*

### Methods/Functions

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
  Validates, encodes and broadcasts this transaction to the Blockchain.
    * *Parameters* \
    *None*
    * *Returns* \
      Result
        * S = Array of [TransactionInput](#transactioninput) \
      A collection of transaction inputs that do not have an associating proof.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*