# Transaction-Related Interfaces

## BifrostClient

All classes that can be used a client to interact with Topl bifrost nodes implement this interface.

### Note

It is possible and likely that public methods/functions will be added to this interface in the future. Implementations of this interface should not make any assumptions about members not being added to this interface.

### Type Parameters

*None*

### Implemented By

[BifrostTetraClient](#bifrosttetraclient)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## MintingSupplyPolicy

This interface is implemented by classes that can be used to define the supply policy for minting an asset within a series or how many series  may be tied to a group.

### Type Parameters

*None*

### Implemented By

*No public implementations*

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## StagedFutures

Methods that submit transactions to the blockchain return an object that implements this interface. This interface allows the caller to get a future for the submission of the transaction and for the successfully settled transaction.

### Type Parameters

*None*

### Implemented By

*No public implementations*

### Methods/Functions

* ` settled ` \
  Returns a future for the outcome of transaction validation, consensus and the transaction being settled.
    * *Parameters*
        * ` confidenceFactor ` \
          The likelihood of the block containing the transaction to be reorged.
            * Type: Double
            * Optional: yes
            * Default: 1 - 10<sup>-9</sup>
    * *Returns* \
      Future[[Result](#result)]
        * S =
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * All of the failures recognized by the submission future 
* ` submission ` \
  Returns a future for the result of submitting a transaction to a blockchain.
    * *Parameters* \
      *None*
    * *Returns* \
      Future[[Result](#result)]
        * S = Type TBD
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Insufficient private keys available to create a valid proof
            
### Implementation Notes

*None*

---

## MintableToken

This interface is implemented by objects that represent a mintable token.

### Implemented by

[GroupConstructor](#groupconstructor), [SeriesConstructor](#seriesconstructor), [AssetConstructor](#assetconstructor)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

--- 
<!-- 
### Auth

This interface is implemented by objects that represent authorization information necessary to access off-chain data.

### Implemented by

The return values of [AuthFactory](#authfactory)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

--- -->

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

* ` getId ` \
  Returns the ID associated with this policy. This should be identifiable via the fields in the implementing classes.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Byte[32]
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getEvidence ` \
  Returns the evidence for this policy.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Byte[32]
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` setRegistrationUtxo ` \
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

### Implementation Notes

*None*

# Transaction-Related Classes

## MintingSupplyPolicyFactory

A utility class to provide token supply policies.

### Type Parameters

*None*

### Implements

The return values of all functions return an implementation of [MintingSupplyPolicy](#mintingsupplypolicy)

### Constructor

The construct is private or there is none.

### Methods/Functions

* ` static cappedSupply ` \
  Get an object to specify a supply policy that caps the total supply of tokens to a given value.
    * *Parameters*
        * ` maxQuantity ` \
          The maximum quantity of a token that the returned policy will allow to exist.
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the total supply of the token is capped to the specified value. There will never be more than the max quantity.
* ` static fixedSupply ` \
  Get an object to specify a supply policy that fixes the total supply of a token to the quantity that was produced when it was initially minted.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of a token is fixed at the time of its first (and only) minting.
      There will never be any more.
* ` static unlimitedSupply ` \
  Get an object to specify a minting supply policy that allows additional quantities of a token to be minted without limit.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of a a token is unlimited.

### Implementation Notes

It is possible that additional methods will be added to create KeyVault objects that correspond to different implementations of the KeyVault interfaces.

---

## AssetBehavior

This interface is implemented by objects that represent on-chain transfer behaviors; used in a supply policy.

### Constructor

* ` interGroupFungible ` \
Should the protocol consider this series fungible with other like tokens that share this group id? (may go between series)
  * Type: Boolean
  * Optional: no
* ` interSeriesFungible ` \
Should the protocol consider this series fungible with other like tokens that share this series id? (may go between groups)
  * Type: Boolean
  * Optional: no
* ` quantityIncrease ` \
Should the protocol allow the "quantity" field in an asset token of this type to increase?
  * Type: Boolean
  * Optional: no
* ` quantityDecrease ` \
Should the protocol allow the "quantity" field in an asset token of this type to decrease?
  * Type: Boolean
  * Optional: no

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## AssetBehaviorFactory

A utility class to provide objects which denote on-chain transfer behaviors

### Constructor

The construct is private or there is none.

### Methods/Functions

* ` NFT ` \
  Returns an object denoting non interGroupFungible, non interSeriesFungible, no quantityIncrease and no quanitityDecrease (FFFF) token behavior
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [AssetBehavior](#assetbehavior)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

> ⚠️ The other functions (which create the other combinations of behavior) will go here
> The names of the functions are still undecided
* ` FullyFungible ` \
  Returns an object denoting TTTT token behavior
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [AssetBehavior](#assetbehavior)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---
<!-- 
## AuthFactory

A utility class to provide authorization objects necessary to access off-chain data.

### Constructor

The construct is private or there is none.

### Implements

The return values of all functions return an implementation of [Auth](#auth)

### Methods/Functions

* ` public ` \
  Returns Auth object used for a publicly accessible resource
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Auth](#auth)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` oidc_m2m ` \
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

### Implementation Notes

*None*

--- -->

## CommitTypeFactory

A utility class to provide supply policy commitment types.

### Constructor

The construct is private or there is none.

### Implements

The return values of all functions return an implementation of [CommitType](#committype)

### Methods/Functions

* ` hash ` \
  Returns an object that represents a Hash commitment type.
    * *Parameters* 
      * ` hashAlgo ` \
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
* ` merkleTree ` \
  Returns an object that represents a MerkleTree commitment type.
    * *Parameters* 
      * ` hashAlgo ` \
      Type of hashing algorithm to use
        * Type: MessageDigester
        * Optional: yes
        * Default: TBD
      * ` blockSize ` \
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
* ` rsaAccumulator ` \
  Returns an object that represents an RSA Accumulator commitment type.
    * *Parameters* 
      * ` bitSize ` \
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

### Implementation Notes

*None*

---

## GroupPolicy

Objects of this class represents an off-chain Group Policy.

### Constructor

* ` label ` \
The label for defining the name of a group, constraints?
  * Type: String
  * Optional: no
* ` fixedSeriesPolicy ` \
Restrict the Group to have only a single type of series token that is applicable to this Group
  * Type: Byte[32]
  * Optional: yes
* ` supplyControlForSeries ` \
Defines the expected on-chain behavior for how many Series may be "assigned" to a Group
  * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
  * Optional: no
* ` mintConditionsForSeries ` \
Defines the proposition that must be stamped on a Group Constructor (is this needed?)
  * Type: [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
  * Optional: no
* ` registrationUtxo ` \
An arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this group policy has been generated previously. This box ID must be unique for policy registrations across transactions.
  * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
  * Optional: yes

### Implements

[Policy](#policy)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## SeriesPolicy

Objects of this class represents an off-chain Series Policy.

### Constructor

* ` label ` \
The label for defining the name of a series, constraints?
  * Type: String
  * Optional: no
* ` onChainTransferBehaviors ` \
Defines the type of token within the TAM2 scheme
  * Type: [AssetBehavior](#assetbehavior)
  * Optional: no
* ` supplyControlForAssets ` \
Defines the expected on-chain behavior for how many Asset Tokens may be "produced" within a Series
  * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
  * Optional: no
* ` mintControlForAssets ` \
Defines the proposition that must be stamped on a Series Constructor (is this needed?)
  * Type: Proposition
  * Optional: no
* ` registrationUtxo ` \
An arbitrary box ID to bind to this policy. This value provides uniqueness that can be checked by the protocol to know if this series policy has been generated previously. This box ID must be unique for policy registrations across transactions.
  * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
  * Optional: yes
* ` commitScheme ` \
This value defines the expected type of committment that users should employee when verifying data on asset tokens within this series. 
  * Type: [CommitType](#committype)
  * Optional: no
* ` metadataScheme ` \
A (possibly mixin based) metadata definition that allows for application level data constructs. Possible schemes that this value could denote include HasUnit, HasDecimals, MimePointer, LookupKey, Labeled, Unstructured, Versionable, and more.
  * Type: TBD
  * Optional: no

### Implements

[Policy](#policy)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## ConstructorToken

An object representing a Group or Series Constructor Token.

### Constructor

* ` quantity ` \
The quantity of this Constructor token.
  * Type: UInt128
  * Optional: yes
* ` policyEvidence ` \
The policy evidence for this constructor token.
  * Type: Byte[32]
  * Optional: yes

### Implements

*None*

### Methods/Functions

* ` setQuantity ` \
  Set the quantity.
    * *Parameters* 
        * `quantity` \
        The quantity of the constructor token.
          * Type: UInt128
          * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getQuantity ` \
  Return the quantity.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = UInt128 or <*implementation defined*> \
      If quantity is not set, an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` setPolicyEvidence ` \
  Set the policy evidence of this constructor token.
    * *Parameters* 
        * `policyEvidence` \
        The policy evidence
          * Type: Byte[32]
          * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getPolicyEvidence ` \
  Return the policy evidence of this constructor token.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Byte[32] or <*implementation defined*> \
      If policy evidence is not set, an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---

## AssetTokenV2

An object representing a V2 Asset Token.

### Constructor

* ` label ` \
The asset label of this token. The label encompasses the IDs of the group and series it belongs to
  * Type: String
  * Optional: no
* ` quantity ` \
The quantity of this token
  * Type: UInt128
  * Optional: yes
* ` commitRoot ` \
The commitment root for this token.
  * Type: Byte[127]
  * Optional: yes
* ` metadata ` \
Optional metadata associated with this token.
  * Type: Byte[127]
  * Optional: yes

### Implements

*None*

### Methods/Functions

* ` setQuantity ` \
  Set the quantity.
    * *Parameters* 
        * `quantity` \
        The quantity of the constructor token.
          * Type: UInt128
          * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getQuantity ` \
  Return the quantity.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = UInt128 or <*implementation defined*> \
      If quantity is not set, an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` setCommitRoot ` \
  Set the commit root of this asset token.
    * *Parameters* 
        * `commitRoot` \
        The commit root
          * Type: Byte[127]
          * Optional: no
    * *Returns* \
      Result
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getCommitRoot ` \
  Return the commit root of this asset token.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Byte[127] or <*implementation defined*> \
      If commit root is not yet set, an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.


### Implementation Notes

*None*

---

## GroupConstructor

An instance of this class represents a mintable Group Constructor Token.

### Constructor

* ` policy ` \
The group policy tied to this GroupConstructor token.
  * Type: [GroupPolicy](#grouppolicy)
  * Optional: no

### Implements

[MintableToken](#mintabletoken)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## SeriesConstructor

An instance of this class represents a mintable Series Constructor Token.

### Constructor

* ` policy ` \
The series policy tied to this SeriesConstructor token.
  * Type: [SeriesPolicy](#seriespolicy)
  * Optional: no

### Implements

[MintableToken](#mintabletoken)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## AssetConstructor

An instance of this class represents a mintable Asset Constructor Token.

### Constructor

* ` groupPolicy ` \
The group policy tied to this AssetConstructor token.
  * Type: [GroupPolicy](#grouppolicy)
  * Optional: no
* ` seriesPolicy ` \
The series policy tied to this AssetConstructor token.
  * Type: [SeriesPolicy](#seriespolicy)
  * Optional: no

### Implements

[MintableToken](#mintabletoken)

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## Schedule

Represents constraints on when a Transaction can be included in the blockchain. An instance of this class reflects [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42).

### Type Parameters

*None*

### Constructor

* ` creationTime ` \
The time that the application claims the transaction was created. This is translated to a UNIX timestamp and used to set the Schedule object's creation field.
  * Type: DateTime | <*implementation defined*>
  * Optional: yes
  * Default: The current time
* ` earliestTime ` \
The earliest time that the transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's minimumSlot field. Note that this can be in the future. However, if it is too far in the future, then nodes may evict it from their mempool.
  * Type: DateTime | <*implementation defined*>
  * Optional: yes
  * Default: Beginning of time 
* ` latestTime ` \
The latest time that the transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's maximumSlot field.
  * Type: DateTime | <*implementation defined*>
  * Optional: yes
  * Default: 5 minutes into the future

### Implements

*None*

### Methods/Functions

* ` getCreation ` \
  A UNIX timestamp (ms) of the transaction's original creation.  User-defined with no impact on the protocol.  Must be positive.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = UInt64
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getMinimumSlot ` \
  The minimum slot number of the block containing the transaction
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = UInt64
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getMaximumSlot ` \
  The maximum slot number of the block constaing this transaction.  Must be greater than `minimumSlot`.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = UInt64
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.


### Implementation Notes

*None*

---

## TransactionUnprovenInput

<!-- The augmented structure needs to be added to PB -->

An instance of this class augments [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22) without Proof.

### Constructor

<!-- The augmented structure needs to be added to PB -->

* ` box ` \
The box that this input is associated to.
  * Type: Augmented version of [Box](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L10) <!-- See "Box" in Tetra SDK High Level Design -->
  * Optional: no

### Implements

*None*

### Methods/Functions

* ` getBoxId ` \
  Returns the boxId associated with this TransactionUnprovenInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getProposition ` \
  Returns the proposition associated with this TransactionUnprovenInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

> 🚧 Note
> AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future. 

* ` getValue ` \
  Returns the value associated with this TransactionUnprovenInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getAccount ` \
  Returns the account from where the box that is associated with this input is from.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Account
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

In general, the Proposition and Value will be obtainable in the local wallet via the supplied `boxId`

---

## TransactionInput

An instance of this class reflects [Transaction.Input](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L22).

### Constructor

> 🚧 Note
> AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future. 

* ` boxId ` \
The ID of the box that this input is associated to.
  * Type: [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
  * Optional: no
* ` proposition ` \
The Proposition associated with this input.
  * Type: [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
  * Optional: no
* ` proof ` \
The Proof associated with this input to satisfy the proposition
  * Type: [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
  * Optional: no
* ` value ` \
The value associated with this input.
  * Type: [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken)
  * Optional: no

### Implements

*None*

### Methods/Functions

* ` getBoxId ` \
  Returns the boxId associated with this TransactionInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Box.Id](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L17)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getProposition ` \
  Returns the Proposition associated with this TransactionInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Proposition](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proposition.proto#L9)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getProof ` \
  Returns the Proof associated with this TransactionInput to satisfy the proposition.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Proof](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/proof.proto#L8)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

> 🚧 Note
> AssetTokenV2 and ConstructorToken will be reflected as a BoxValue in protobuff in the near future. 

* ` getValue ` \
  Returns the value associated with this TransactionInput.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [AssetTokenV2](#assettokenv2) | [ConstructorToken](#constructortoken)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---

## TransactionOutput

An object representing a transaction output. This reflect the Tetra version of [Transaction.Output](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L33)

### Type Parameters

*None*

### Constructor

> 🚧 Note
> AssetTokenV2 and ConstructorToken will be reflected as a [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) in protobuff in the near future.
* ` address ` \
The address of this output.
  * Type: [Address](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/address.proto#L10)
  * Optional: no
<!-- The augmented BoxValues needs to be added to PB; quantity is optional -->
* ` value ` \
An object representing the value contained in this output.
  * Type: Augmented [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [ConstructorToken](#constructortoken) | [AssetTokenV2](#assettokenv2)
  * Optional: no
* ` minting ` \
An optional object representing the policy which determines if minting is allowed. If not provided, the output is not considered a minting output
  * Type: [MintableToken](#mintabletoken)
  * Optional: yes

### Implements

*None*

### Methods/Functions

* ` setQuantity ` \
  Update the quantity within `value`
    * *Parameters* 
      * `quantity` \
        The new quantity of the output's value.
    * *Returns* \
      Result
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getAddress ` \
  The address of this output.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [Address](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/address.proto#L10)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getValue ` \
  An object representing the value contained in this output.
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Augmented [BoxValue](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/box.proto#L24) | [ConstructorToken](#constructortoken) | [AssetTokenV2](#assettokenv2)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getMinting ` \
  An optional object representing the policy which determines if minting is allowed. If not provided, the output is not considered a minting output
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [MintableToken](#mintabletoken) or <*implementation defined*> \
          The mintable token if output is a minting output. Otherwise an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.


### Implementation Notes

*None*

---

## Transput

An instance of this class contains the required [TransactionUnprovenInput](#transactionunproveninput)s and at most one [TransactionOutput](#transactionoutput) needed to satisfy the desired quantity of a transaction input.

### Constructor

* ` requiredQuantity ` \
The required quantity of `assetIdentifier` needed
  * Type: UInt128
  * Optional: yes
  * Default: If not supplied, the quantity will be all unspent `assetIdentifier` tokens in `account`
* `assetIdentifier` \
An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, LVL type, TOPL type, etc) 
  * Type: String
  * Optional: no
* `account` \
The Account from where the input will be obtained. 
  * Type: Account
  * Optional: yes
  * Default: The account entity at path "0/0"
* `changeAddress` \
The address where any excess funds from the input will go. 
  * Type: Address
  * Optional: yes
  * Default: The next available address in `account`

### Implements

*None*

### Methods/Functions

* ` getSpendInputs ` \
  Returns the Inputs required to satisfy the quantity required and to move boxes that are not required to satisfy quantity in order to prevent address re-use. 
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = Array of [TransactionUnprovenInput](#transactionunproveninput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` getChangeOutput ` \
  If the quantity within the inputs exceed the `requiredQuantity`, returns the output to contain this excess change. 
    * *Parameters* \
      *None*
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput) or <*implementation defined*> \
          The change output if change exists. Otherwise an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---

## UnprovenTransaction

An instance of this class reflects a version of [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) where the inputs do not have proofs.

### Type Parameters

*None*

### Constructor

* ` inputs ` \
The inputs of this transaction.
  * Type: Array of [TransactionUnprovenInput](#transactionunproveninput)
  * Optional: no
* ` outputs ` \
The outputs of this transaction.
  * Type: Array of [TransactionOutput](#transactionoutput)
  * Optional: no
* ` schedule ` \
An object representing the constraints on when a Transaction can be included in the blockchain
  * Type: [Schedule](#schedule)
  * Optional: yes
* ` data ` \
Data to be associated with this transaction. Has no effect on the protocol level.
  * Type: Byte[15000]
  * Optional: yes

### Implements

*None*

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

---

## Transaction

An instance of this class reflects [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11).

### Type Parameters

*None*

### Constructor

* ` inputs ` \
The inputs of this transaction.
  * Type: Array of [TransactionInput](#transactionuninput)
  * Optional: no
* ` outputs ` \
The outputs of this transaction.
  * Type: Array of [TransactionOutput](#transactionoutput)
  * Optional: no
* ` schedule ` \
An object representing the constraints on when a Transaction can be included in the blockchain
  * Type: [Schedule](#schedule)
  * Optional: yes
* ` data ` \
Data to be associated with this transaction. Has no effect on the protocol level.
  * Type: Byte[15000]
  * Optional: yes

### Implements

*None*

### Methods/Functions

*No public methods/functions*

### Implementation Notes

*None*

--- 

## BifrostTetraClient

### Type Parameters

*None*

### Implements

[BifrostClient](#bifrostclient)

### Constructor

The constructor is private or there is none.

### Methods/Functions

* ` input ` \
  Returns a [Transput](#transput) based on the requirements
    * *Parameters* 
        * `requiredQuantity` \
        The required quantity that this input needs
          * Type: UInt128
          * Optional: no
        * `assetIdentifier` \
        An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, LVL type, TOPL type, etc) 
          * Type: String
          * Optional: no
        * `account` \
        The Account from where the input will be obtained. 
          * Type: Account
          * Optional: yes
          * Default: The account entity at path "0/0"
        * `changeAddress` \
        The address where any excess funds from the input will go. 
          * Type: Address
          * Optional: yes
          * Default: The next available address in `account`
    * *Returns* \
      Result
        * S = [Transput](#transput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * A token defined by `assetIdentifier` does not exist
            * The quantity of `assetIdentifier` does not exist in `account` 
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` output ` \
  Returns a [TransactionOutput](TransactionOutput). Not valid for EmptyBoxValue.
    * *Parameters* 
        * `account` \
        The Account for where the output will reside. 
          * Type: Account
          * Optional: no
        * `assetIdentifier` \
        An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, LVL type, TOPL type, etc) 
          * Type: String
          * Optional: no
        * `quantity` \
        The quantity of the output's value.
          * Type: UInt128
          * Optional: yes
        * ` metadata ` \
        Optional metadata to include with the minted asset token. <!-- If the output data is hosted off-chain, then this is the URL where the data is hosted. --> Only valid for V1 and V2 asset tokens.
          * Type: Byte[127]
          * Optional: yes
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `quantity` is invalid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` mintingOutput ` \
  Returns a minting [TransactionOutput](TransactionOutput). Not valid for Topls, Lvls, and EmptyBoxValue
    * *Parameters* 
        * `account` \
        The Account for where the output will reside. 
          * Type: Account
          * Optional: no
        * `assetIdentifier` \
        An identifier which denotes a type of asset (an AssetV2 assetLabel, an AssetV1 assetCode, etc) 
          * Type: String
          * Optional: no
        * `quantity` \
        The quantity of the output's value.
          * Type: UInt128
          * Optional: no
        * `minting` \
        The mintable token.
          * Type: [MintableToken](#mintabletoken)
          * Optional: no
        * ` metadata ` \
        Optional metadata to include with the minted asset token. <!-- If the output data is hosted off-chain, then this is the URL where the data is hosted. --> Only valid for V1 and V2 asset tokens.
          * Type: Byte[127]
          * Optional: yes
    * *Returns* \
      Result
        * S = [TransactionOutput](#transactionoutput)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `quantity` is invalid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` registerConstructor ` \
  Submits a [Transaction](#transaction) for registering a Group or Series Constructor Token
    * *Parameters* 
        * `fee` \
        The inputs and change output relating to this transaction's fee.
          * Type: [Transput](#transput)
          * Optional: no
        * ` data ` \
        Data to be associated with this transaction. Has no effect on the protocol level.
          * Type: Byte[15000]
          * Optional: yes
        * ` policy ` \
        The policy that we are registering.
          * Type: [Policy](#policy)
          * Optional: no
        * ` mintingOutput ` \
        The output containing the minted constructor tokens
          * Type: [TransactionOutput](#transactionoutput)
          * Optional: no
        * ` creationTime ` \
        The time that the application claims the transaction was created. This is translated to a UNIX timestamp and used to set the Schedule object's creation field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: The current time
        * ` earliestTime ` \
        The earliest time that this transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's minimumSlot field. Note that this can be in the future. However, if it is too far in the future, then nodes may evict it from their mempool.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: Beginning of time 
        * ` latestTime ` \
        The latest time that this transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's maximumSlot field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: 5 minutes into the future
    * *Returns* \
      Result
        * S = [StagedFutures](#stagedfutures) for the submitted transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * `mintingOutput` does not specify a quantity
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` registerAssetType ` \
  Submit [Transaction](#transaction)s for minting a new V2 Asset Token with newly registered Group and Series Policies.
    * *Parameters* 
        * `fee` \
        The inputs and change output relating to this transaction's fee.
          * Type: [Transput](#transput)
          * Optional: no
        * ` data ` \
        Data to be associated with the underlying transactions. Has no effect on the protocol level.
          * Type: Byte[15000]
          * Optional: yes
        * ` assetAlias ` \
        A human readable label to associate with the newly minted Asset Token. This will also be the default value if `groupLabel` or `seriesLabel` is not provided
          * Type: String
          * Optional: no
        * ` seriesQuantity ` \
        The quantity of series constructor tokens to create.
          * Type: UInt128
          * Optional: yes
          * Default: `mintingOutput.quantity`
        * ` groupQuantity ` \
        The quantity of group constructor tokens to create.
          * Type: UInt128
          * Optional: no
          * Default: `mintingOutput.quantity`
        * ` mintingOutput ` \
        The output containing the minted asset tokens
          * Type: [TransactionOutput](#transactionoutput)
          * Optional: no
        * `registrationOutputAccount` \
        The Account for where the constructor tokens for policy registration will reside. 
          * Type: Account
          * Optional: no
        * ` groupLabel ` \
        The label for the new group policy.
          * Type: String
          * Optional: yes
          * Default: `assetAlias`
        * ` seriesLabel ` \
        The label for the new series policy.
          * Type: String
          * Optional: yes
          * Default: `assetAlias`
        * ` fixSeriesToGroup ` \
        A flag indicating if the created Group policy should only be allowed to be associated with the created series policy. If `true` then any other created Series constructor tokens (not created in this call) will not be applicable with the created Group policy. 
          * Type: Boolean
          * Optional: yes
          * Default: false
        * ` supplyControlForSeries ` \
        Defines the expected on-chain behavior for how many Series may be "assigned" to a Group
          * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
          * Optional: no
        * ` mintConditionsForSeries ` \
        Defines the proposition that must be stamped on a Group Constructor
          * Type: Proposition
          * Optional: yes
          * Default: signing proposition 
        * ` onChainTransferBehaviors ` \
        Defines the type of token within the TAM2 scheme
          * Type: [AssetBehavior](#assetbehavior)
          * Optional: no
        * ` supplyControlForAssets ` \
        Defines the expected on-chain behavior for how many Asset Tokens may be "produced" within a Series
          * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
          * Optional: no
        * ` mintConditionsForAssets ` \
        Defines the proposition that must be stamped on a Series Constructor
          * Type: Proposition
          * Optional: yes
          * Default: signing proposition 
        * ` seriesCommitScheme ` \
        This value defines the expected type of committment that users should employee when verifying data on asset tokens within the created series. 
          * Type: [CommitType](#commitType)
          * Optional: no
        * ` seriesMetadataScheme ` \
        A (possibly mixin based) metadata definition that allows for application level data constructs. Possible schemes that this value could denote include HasUnit, HasDecimals, MimePointer, LookupKey, Labeled, Unstructured, Versionable, and more.
          * Type: TBD
          * Optional: no
        * ` creationTime ` \
        The time that the application claims the transactions were created. This is translated to a UNIX timestamp and used to set the Schedule object's creation field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: The current time
        * ` earliestTime ` \
        The earliest time that the transactions are eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's minimumSlot field. Note that this can be in the future. However, if it is too far in the future, then nodes may evict it from their mempool.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: Beginning of time 
        * ` latestTime ` \
        The latest time that the transactions are eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's maximumSlot field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: 5 minutes into the future
    * *Returns* \
      Result
        * S = Array of [StagedFutures](#stagedfutures) for the submitted transactions
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * feeQuantity is not a multiple of 2
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ` transaction ` \
  Submits a general purpose [Transaction](#transaction).
    * *Parameters* 
        * `fee` \
        The inputs and change output relating to this transaction's fee.
          * Type: [Transput](#transput)
          * Optional: no
        * ` data ` \
        Data to be associated with this transaction. Has no effect on the protocol level.
          * Type: Byte[15000]
          * Optional: yes
        * `inputs` \
        The non-fee inputs and change outputs relating to this transaction.
          * Type: Array of [Transput](#transput)
          * Optional: no
        * ` outputs ` \
        The outputs of this transaction
          * Type: Array of [TransactionOutput](#transactionoutput)
          * Optional: no

        <!-- * ` offChainAuth ` \
        Required for outputs that store off-chain data. An object that provides authorization information to access the off-chain data.
          * Type: [Auth](#auth)
          * Optional: yes
          * Default: If not provided, output would be considered on-chain -->

        * ` creationTime ` \
        The time that the application claims the transaction was created. This is translated to a UNIX timestamp and used to set the Schedule object's creation field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: The current time
        * ` earliestTime ` \
        The earliest time that this transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's minimumSlot field. Note that this can be in the future. However, if it is too far in the future, then nodes may evict it from their mempool.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: Beginning of time 
        * ` latestTime ` \
        The latest time that this transaction is eligible to be included in a block. This will be converted to a slot number and used to set the Schedule object's maximumSlot field.
          * Type: DateTime | <*implementation defined*>
          * Optional: yes
          * Default: 5 minutes into the future
    * *Returns* \
      Result
        * S = [StagedFutures](#stagedfutures) for the submitted transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

# Notes on Comments

The markdown contains many lines commented out. These lines refer to topics that we will address at a later time. These topics include:
* Off-chain data \
  Anything related to the hosted URL or authentication of off-chain data