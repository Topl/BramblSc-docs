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

This interface is implemented by classes that can be used to define the supply policy for minting an asset within a series or the supply of series that's allowed to be tied to a group.

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

* ``` settled ``` \
  Returns a future for the outcome of transaction validation, consensus and the transaction being settled.
    * *Parameters*
        * ``` confidenceFactor ``` \
          The likelihood of the block containing the transaction to be reorged.
            * Type: Double
            * Optional: yes
            * Default: 1 - 10<sup>-9</sup>
    * *Returns* \
      Future[[Result](#result)]
        * S =
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * All of the failures recognized by the submission future 
* ``` submission ``` \
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

# Transaction-Related Classes

## BifrostTetraClient

### Type Parameters

*None*

### Implements

[BifrostClient](#bifrostclient)

### Constructor

The constructor is private or there is none.

### Methods/Functions

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
  Submits a [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for registering a Group or Series Constructor Token
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        TThe path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the fee will be obtained and fee change will reside. 
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
        * S = [StagedFutures](#stagedfutures) for the submitted transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` registerAssetType ``` \
  Submit [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11)s for minting a new V2 Asset Token with newly registered Group and Series Policies.
    * *Parameters* 
        * `feeQuantity` \
        The total quantity to use for the underlying transaction fees. Must be a multiple of 2
          * Type: UInt128
          * Optional: yes
          * Default: 200
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the fees will be obtained and fee change will reside. 
          * Type: String
          * Optional: yes
          * Default: "0/0"
        * ``` schedule ``` \
        An object representing the transaction timestamp as well as the minimum and maximum slot that the underlying transactions will required to be processed by.
            * Type: [Transaction.Schedule](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L42)
            * Optional: yes
        * ``` data ``` \
        Data to be associated with the underlying transactions. Has no effect on the protocol level.
            * Type: Byte127
            * Optional: yes
        * ``` assetAlias ``` \
        A human readable label to associate with the newly minted Asset Token. This will also be the default value if `groupLabel` or `seriesLabel` is not provided
            * Type: String
            * Optional: no
        * ``` tokenQuantity ``` \
        The quantity of asset tokens to create.
            * Type: UInt128
            * Optional: no
        * ``` seriesQuantity ``` \
        The quantity of series constructor tokens to create.
            * Type: UInt128
            * Optional: yes
            * Default: `tokenQuantity`
        * ``` groupQuantity ``` \
        The quantity of group constructor tokens to create.
            * Type: UInt128
            * Optional: no
            * Default: `tokenQuantity`
        * ``` metadata ``` \
        Optional metadata to include with the minted asset token. If the output data is hosted off-chain, then this is the URL where the data is hosted. This has no effect on the constructor tokens.
            * Type: Byte127
            * Optional: yes
        * ``` offChainAuth ``` \
        Required for outputs that store off-chain data. An object that provides authorization information to access the off-chain data. This has no effect on the constructor tokens.
            * Type: [Auth](#auth)
            * Optional: yes
            * Default: If not provided, output would be considered on-chain
        * ``` outputPath ``` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) where the created asset token and constructor tokens will reside. 
            * Type: String
            * Optional: yes
            * Default: "0/0"
        * ``` groupLabel ``` \
        The label for the new group policy.
            * Type: String
            * Optional: yes
            * Default: `assetAlias`
        * ``` seriesLabel ``` \
        The label for the new series policy.
            * Type: String
            * Optional: yes
            * Default: `assetAlias`
        * ``` fixSeriesToGroup ``` \
        A flag indicating if the created Group policy should only be allowed to be associated with the created series policy. If `true` then any other created Series constructor tokens (not created in this call) will not be applicable with the created Group policy. 
            * Type: Boolean
            * Optional: yes
            * Default: false
        * ``` supplyControlForSeries ``` \
        Defines the expected on-chain behavior for how many Series may be "assigned" to a Group
            * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
            * Optional: no
        * ``` mintConditionsForSeries ``` \
        Defines the proposition that must be stamped on a Group Constructor
            * Type: Proposition
            * Optional: yes
            * Default: signing proposition 
        * ``` onChainTransferBehaviors ``` \
        Defines the type of token within the TAM2 scheme
            * Type: [AssetBehavior](#assetbehavior)
            * Optional: no
        * ``` supplyControlForAssets ``` \
        Defines the expected on-chain behavior for how many Asset Tokens may be "produced" within a Series
            * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
            * Optional: no
        * ``` mintConditionsForAssets ``` \
        Defines the proposition that must be stamped on a Series Constructor
            * Type: Proposition
            * Optional: yes
            * Default: signing proposition 
        * ``` seriesCommitScheme ``` \
        This value defines the expected type of committment that users should employee when verifying data on asset tokens within the created series. 
            * Type: [CommitType](#commitType)
            * Optional: no
        * ``` seriesMetadataScheme ``` \
        A (possibly mixin based) metadata definition that allows for application level data constructs. Possible schemes that this value could denote include HasUnit, HasDecimals, MimePointer, LookupKey, Labeled, Unstructured, Versionable, and more.
            * Type: TBD
            * Optional: no
    * *Returns* \
      Result
        * S = Array of [StagedFutures](#stagedfutures) for the submitted transactions
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * feeQuantity is not a multiple of 2
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` mintAsset ``` \
  Submits a [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for minting a new V2 Asset Token.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the fee will be obtained and fee change will reside. 
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
        * S = [StagedFutures](#stagedfutures) for the submitted transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * SeriesPolicy is not a type TTXX
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.
* ``` transfer ``` \
  Submits a [Transaction](https://github.com/Topl/protobuf-specs/blob/main/protobuf/models/transaction.proto#L11) for transferring a token.
    * *Parameters* 
        * `feeQuantity` \
        The quantity to use for this transaction's fee 
          * Type: UInt128
          * Optional: yes
          * Default: 100
        * `feePath` \
        The path which will identify the account/contract (i.e., the `x/y` in `x/y/z`) from where the fee will be obtained and fee change will reside. 
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
          * Type: UInt128
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
        * S = [StagedFutures](#stagedfutures) for the submitted transaction
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Transaction is not valid
            * An I/O, network, or database error that is unrelated to the parameters passed by the caller.

### Implementation Notes

*None*

---

## MintingSupplyPolicyFactory

A utility class to provide token supply policies.

### Type Parameters

*None*

### Implements

The return values of all functions return an implementation of [MintingSupplyPolicy](#mintingsupplypolicy)

### Constructor

The construct is private or there is none.

### Methods/Functions

* ``` static cappedSupply ``` \
  Get an object to specify a supply policy that caps the total supply of tokens to a given value.
    * *Parameters*
        * ``` maxQuantity ``` \
          The maximum quantity of a token that the returned policy will allow to exist.
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the total supply of the token is capped to the specified value. There will never be more than the max quantity.
* ``` static fixedSupply ``` \
  Get an object to specify a supply policy that fixes the total supply of a token to the quantity that was produced when it was initially minted.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of a token is fixed at the time of its first (and only) minting.
      There will never be any more.
* ``` static unlimitedSupply ``` \
  Get an object to specify a minting supply policy that allows additional quantities of a token to be minted without limit.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of a a token is unlimited.

### Implementation Notes

It is possible that additional methods will be added to create KeyVault objects that correspond to different implementations of the KeyVault interfaces.
