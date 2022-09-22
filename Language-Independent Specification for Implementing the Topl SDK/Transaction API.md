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

This interface is implemented by classes that can be used to define the minting supply policy for an asset label.

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

* *Parameters*
    * ``` provider ``` — A [Provider](#provider) object that the client will use to communicate with the blockchain network.

### Methods/Functions

> 🚧 Reminder
> This needs to be updated to reflect the Tetra asset model

* ``` mintOnChainAsset ``` \
  Mint new asset instances with on-chain data. Information in the wallet will be used to recognize if this is a new or existing asset label.
    * *Parameters*
        * ``` account  ``` \
          The account that the asset should be minted in.
            * Type: [Account](#account)
            * Optional: no
        * ``` assetLabel   ``` \
          A string that identifies the type of asset. This must be from 1 to 8 characters long. The characters must all
          be in the Latin-1 character set.
            * Type: String
            * Optional: no
        * ``` quantity  ``` \
          The quantity of the asset to be minted.
            * Type: Int128
            * Optional: yes
            * Default: 1
        * ``` divisible ``` \
          Determines whether the asset can be divided into fractional parts
            * Type: Boolean
            * Optional: yes
            * Default: false
            * Note: It is an error to specify this parameter if the specified asset label already exists for the
              specified account.
        * ``` combinable ``` \
          Determines whether the asset can be combined
            * Type: Boolean
            * Optional: yes
            * Default: false
            * Note: It is an error to specify this parameter if the specified asset label already exists for the
              specified account.
        * ``` data ``` \
          up to 127 Latin-1 characters
            * Type: String
            * Optional: yes
              Default: empty string
        * ``` hashAlgorithm ``` \
          The hash algorithm to use for computing the security root from the data
            * Type: [MessageDigester](#messagedigester)
            * Optional: yes
            * Default: An object that provides the SHA3-512 hash algorithm.
        * ``` spendingProposition  ``` \
          A Proposition object that determine who spend the output of this operation and when it can be spent.
            * Type: [Proposition](#proposition)
            * Optional: yes
            * Default: A proposition that allows the output to be spent by signing it with the address’s private key.
        * ``` supplyPolicy   ``` \
          An object that specifies a policy that determines if additional instances of this asset can be minted in the
          future and how many. The desired object is obtained by calling a method
          of [MintingSupplyPolicyFactory](#mintingsupplypolicyfactory).
            * Type: [MintingSupplyPolicy](#mintingsupplypolicy)
            * Optional: yes
            * Default: n object that fixes the total supply of the asset to what is minted by this operation. No
              additional instances of the asset will ever exist.
            * Note: It is an error to specify this parameter if the specified asset label already exists for the
              specified account.
        * ``` mintingProposition ``` \
          A proposition object that determines who can mint additional quantities of the asset. If the value of
          supplyPolicy prevents additional instances of the asset from being minted, then it is an error to specify this
          parameter.
            * Type: [Proposition](#proposition)
            * Optional: yes
            * Default: If the asset label is new for the specified account, then the default is a proposition that
              allows the account to mint additional quantities of the asset. If the asset label already exists for the
              specified account, then the default is the previously specified minting proposition.
        * ``` fee ``` \
          the number of nano-polys that will be paid for minting.
            * Type: Int128
            * Optional: no
        * ``` changeAddress ``` \
          An address to send change polys to.
            * Type: [Address](#address)
            * Optional: no
        * ``` requestEffectiveTime ``` \
          the earliest time that this transaction may be picked up from the mempool for processing
            * Type: DateTime
            * Optional: yes
        * ``` requestExpirationTime ``` \
          the latest time that this transaction may be picked up from the mempool for processing.
            * Type: DateTime
            * Optional: yes
    * *Returns* \
      [StagedFutures](#stagedfutures)

> 🚧 Reminder
> This needs to be updated to reflect the Tetra asset model

* ``` transfer ``` \
  Transfer assets from a spending account to a staking account. The two accounts will usually be different accounts. If the transfer operation is being done just to change the data in the assets, it may make sense for the two accounts to be the same.
    * *Parameters*
        * ``` spendingAccount ``` \
          The account that assets will be spent from.
            * Type: [Account](#account)
            * Optional: no
        * ``` spendingProposition ``` \
          The spending proposition for the account.
            * Type: [Proposition](#proposition)
            * Optional: yes
            * Default: The proposition that the wallet associates with the account i
        * ``` spendingProof ``` \
          A proof that the.
    * *Returns* \
      [StagedFutures](#stagedfutures)

### Implementation Notes

It is possible that additional methods will be added to create KeyVault objects that correspond to different implementations of the KeyVault interfaces.

---

## MintingSupplyPolicyFactory

### Type Parameters

*None*

### Implements

*None*

### Constructor

The construct is private or there is none.

### Methods/Functions
> 🚧 Reminder
> This needs to be updated to reflect the Tetra asset model

* ``` static cappedSupply ``` \
  Get an object to specify a minting supply policy that caps the total supply of an asset label to a given value.
    * *Parameters*
        * ``` maxQuantity ``` \
          The maximum quantity of an asset type that the returned policy will allow to exist.
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of the asset is capped at the time of its initial minting. There will never be more than the max quantity.
* ``` static fixedSupply ``` \
  Get an object to specify a minting supply policy that fixes the total supply of an asset label to the quantity produced when it is initially minted.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of an asset label is fixed at the time of its first (and only) minting.
      There will never be any more.
* ``` static unlimitedSupply ``` \
  Get an object to specify a minting supply policy that allows additional quantities of an asset label to be minted without limit.
    * *Parameters* \
      *None*
    * *Returns* \
      [MintingSupplyPolicy](#mintingsupplypolicy) \
      An object that indicates that the supply of an asset label is unlimited.

### Implementation Notes

It is possible that additional methods will be added to create KeyVault objects that correspond to different implementations of the KeyVault interfaces.
