The initial implementation of the SDK will be in Scala. The other implementation that will be needed for the initial release will be Dart, as it is required for Ribn.

Additional implementations to be done after the required ones are in no particular order:

* Java (a thin wrapper of the Scala)
* Python
* GoLang
* Rust

# Table of contents

* [Table of contents](#table-of-contents)
* [SDK Interfaces](#sdk-interfaces)
  * [Logging Requirements](#logging-requirements)
  * [Common API Components](#common-api-components)
    * [Common Interfaces](#common-interfaces)
      * [MessageDigester](#messagedigester)
      * [Result](#result)
    * [Common Classes](#common-classes)
      * [Failure](#failure)
      * [Success](#success)
      * [MessageDigestFactory](#messagedigestfactory)
  * [Blockchain API](#blockchain-api)
    * [Blockchain-Related Interfaces](#blockchain-related-interfaces)
      * [Application](#application)
      * [Account](#account)
      * [Address](#address)
      * [Wallet](#wallet)
      * [Proof](#proof)
      * [Proposition](#proposition)
      <!-- * [CredentialSet](#credentialset) -->
    * [Blockchain-Related Classes](#blockchain-related-classes)
      * [Box](#box)
      * [WalletFactory](#walletfactory)
      * [LevelDbWallet](#leveldbwallet)
      * [IndexedDbWallet](#indexeddbwallet)
* [Hiding Nondeterminism](#hiding-nondeterminism)
* [Genus API](#genus-api)
* [Multi-Signature Spending Propositions](#multi-signature-spending-propositions)
* [Implementation Guidelines](#implementation-guidelines)
  * [Structure of an Asset Label](#structure-of-an-asset-label)

# SDK Interfaces

Below are descriptions of the SDK interfaces. The descriptions are documented in a way that assumes all languages used for implementations have a common set of features related to supporting the object-oriented paradigm:

* Classes that can be used to create instances or objects. The objects have functions/methods and attributes. We do not assume that there is inheritance between classes.
* Some implementation languages allow functions or methods to throw exceptions or panic when something unexpected happens that is outside of the assumptions, requirements and behaviors documented here. This way of dealing with unexpected behavior is not be documented as part of any interface documented here. If implementations need to respond to an unexpected situation in this way, the implementation must document this behavior.
* Interfaces describe a set of functions/methods provided by classes that implement the interfaces. We do not assume that interfaces can inherit from interfaces.
* We assume that classes can implement multiple interfaces.
* The type of a parameter or return value can be a class, interface or primitive type.
* We do not assume that classes can have more than one public constructor.
* We assume that there are static functions/methods that can be associated with a class that can be called without having an instance of the class. These will be primarily used to create instances of their associated class or to set global parameters.
* We assume that the language is either dynamically typed or statically typed with classes and interfaces can be generic/parametric. Generic/parametric classes and interfaces have type parameters used to specify the types of method parameters and return values.
* We assume that the language provides a future or promise type that encapsulates values that are computed asynchronously. The minimal functionality assumed for the future or promise type is that it has methods to query whether the computation has finished and a blocking operation to get the value of the computation. \
In the rest of this document, we consider “future” and “promise” to be synonyms and use “future” to refer to both.
* We assume that methods/functions can have parameters whose values are methods/functions (first-class functions).
* We assume that the language provides types to satisfy the following descriptions
  * `Byte[n]` \
    A sequence of bytes with a maximum length of `n`
  * `Boolean` \
    One of two possible values: True (1) or False (0).
  * `String` \
    An arbitrary-length sequence of characters.


## Logging Requirements

All interfaces will be implemented to work with a configurable logging library. The logging library should have methods that allow log items to be generated. Each logging call will associate the log item with a logging level (error, warning, info, debug, trace). The configuration of the logging library should determine where the log items are sent ( local file, logging service, standard output, database, …) and the minimum level of message that will be send to each output destination.

All implementations of the SDK’s public methods should generate trace level (debug if trace is not supported) log message to indicate entry or exit from the method. All external interactions (calls to the blockchain, calls to Genus, updates of the wallet, …) must be logged.

## Common API Components

The classes and interfaces described below, along with their methods/functions are minimal requirements.
Implementations may supply additional classes, interfaces and methods/functions that are common to the
blockchain API and the Genus API.

* [Common Interfaces](#common-interfaces)
    * [MessageDigester](#messagedigester)
    * [Result](#result)
* [Common Classes](#common-classes)
    * [Failure](#failure)
    * [Success](#success)
    * [MessageDigestFactory](#messagedigestfactory)

### **Common Interfaces**

#### **MessageDigester**

This interface is implemented by objects that compute a cryptographic hash from an input that consists of a stream of bytes.

##### Type Parameters

*None*

##### Implemented By

*No public implementations*

##### Methods/Functions

*No public methods/functions*

##### Implementation Notes

*None*

##### See Also

[MessageDigestFactory](#messagedigestfactory)

---

#### **Result**

This interface is implemented by the return type of many methods/functions. Objects that implement this interface contain either a success value or a failure value produced by a method/function call.

##### Type Parameters

* S — The type of value returned when a method/function call is successful.
* F — The type of value returned when a method/function call fails.

##### Implemented By

[Success](#success), [Failure](#failure)

##### Methods/Functions

* ``` isSuccess ```
    * *Parameters* \
      *None*
    * *Returns* \
      Boolean \
      true if the object contains the result of a successful function call; otherwise false.

##### Implementation Notes

When implemented in a language that has a well established custom for using certain common library classes for this purpose, we will use the customary names for this interface and its methods rather than the ones documented here.

---

### **Common Classes**

#### **Failure**

Instances of this class contain a failure value returned by a function call.

##### Type Parameters

* S — The type of value returned when a method/function call is successful. This is inherited from the [Result](#result) interface, but not used.
* F — The type of value returned when a method/function call fails.

##### Implements

[Result](#result)

##### Constructor

The construct is private or there is none.

##### Methods/Functions

* ```isSuccess```
    * *Parameters* \
      *None*
    * *Returns* \
      false

##### Implementation Notes

When implemented in a language that has a well established custom for using certain common library classes for this purpose, we will use the customary names for this class and its method rather than the ones documented here.

---

#### **Success**

Instances of this class contain a success value returned by a function call.

##### Type Parameters

* S — The type of value returned when a method/function call is successful.
* F — The type of value returned when a method/function call fails. This is inherited from the [Result](#result) interface, but not used.

##### Implements

[Result](#result)

##### Constructor

The constructor is private or there is none.

##### Methods/Functions

* ```isSuccess```
    * *Parameters* \
      *None*
    * *Returns* \
      true

##### Implementation Notes

When implemented in a language that has a well established custom for using certain common library classes for this purpose, we will use the customary names for this class and its method rather than the ones documented here.

---

#### **MessageDigestFactory**

This is a utility class that is used to construct digesters for various hash algorithms.

##### Type Parameters

*None*

##### Implements

*None*

##### Constructor

The constructor is private or there is none.

##### Methods/Functions

* ``` blake2b160Digester ``` \
  Return an object that computes a 160 bit Blake2b hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2b256Digester ``` \
  Return an object that computes a 256 bit Blake2b hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2b384Digester ``` \
  Return an object that computes a 384 bit Blake2b hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2b512Digester ``` \
  Return an object that computes a 512 bit Blake2b hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2s128Digester ``` \
  Return an object that computes a 128 bit Blake2s hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2s160Digester ``` \
  Return an object that computes a 160 bit Blake2s hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2s224Digester ``` \
  Return an object that computes a 224 bit Blake2s hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake2s256Digester ``` \
  Return an object that computes a 256 bit Blake2s hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` blake3_256Digester ``` \
  Return an object that computes a 256 bit Blake3 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` DSTU7564_256Digester ``` \
  Return an object that computes a 256 bit DSTU7564 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` DSTU7564_384Digester ``` \
  Return an object that computes a 384 bit DSTU7564 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` DSTU7564_512Digester ``` \
  Return an object that computes a 512 bit DSTU7564 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` RIPEMD_128Digester ``` \
  Return an object that computes a 128 bit RIBEMD hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` RIPEMD_160Digester ``` \
  Return an object that computes a 160 bit RIBEMD hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` RIPEMD_256Digester ``` \
  Return an object that computes a 256 bit RIBEMD hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` RIPEMD_320Digester ``` \
  Return an object that computes a 320 bit RIBEMD hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA1Digester ``` \
  Return an object that computes a 128 bit SHA-1 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA2_224Digester ``` \
  Return an object that computes a 224 bit SHA-2 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA2_256Digester ``` \
  Return an object that computes a 256 bit SHA-2 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA2_384Digester ``` \
  Return an object that computes a 384 bit SHA-2 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA2_512Digester ``` \
  Return an object that computes a 512 bit SHA-2 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA3_224Digester ``` \
  Return an object that computes a 224 bit SHA-3 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA3_256Digester ``` \
  Return an object that computes a 256 bit SHA-3 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA3_384Digester ``` \
  Return an object that computes a 384 bit SHA-3 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` SHA3_512Digester ``` \
  Return an object that computes a 512 bit SHA-3 hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)
* ``` WhirlpoolDigester ``` \
  Return an object that computes a 512 bit Whirlpool hash
    * *Parameters* \
      *None*
    * *Returns* \
      [MessageDigester](#messagedigester)

##### Implementation Notes

When implemented in a language that has a well established custom for using certain common library classes for this purpose, we will use the customary names for this class and its method rather than the ones documented here.

---

## Blockchain API

The purpose of the blockchain API is to facilitate interactions between the Topl blockchain and applications. The following activity diagram shows the pattern that a typical interaction will follow:

![SDK Process](https://www.plantuml.com/plantuml/png/RLAzRjmm3Dxr50IwjAzmj-JI8UXIj420BbracRQ5aobLf78Du8SlPS66ZMQwCt--7tryOh5PoXpCyYdPW6D6fCKkjvI2TrPy9BEEcCipZfx0HMB9nQsTE81aIpnWRd_iMh-Q8UQxkRoW0E5VWKA5iGVRzncPpP3Z30yRWlObWlP05qoX3IpNOMOKRb1WH-j99Tv8_9-2loOlkBoWmYxcyhDWVeVr2vv3T7StwJJSVdoho-2Auf5ix9-Hlq0STdmrQv3wflZhvaubfnpVa4w-cYLEEkzf19r8aNrjmS7JRrBiwBmLjV7mCcqI6kSc1Fbw95GmLLMu0hCVgVxUyVq8V9x_I5wNe-sTPVa_ZlCxQGLaGkFYd1GP-zF2-T637oVfGi7bDQO0tr4Usbwgc7ds9oeJ2Rej0iNPCsgilMUdgZDNxZPePB9IhqfqeTNFbbxF5UXGDIF3csVV1JIUrgL6SDsZhB5U3bSC9VLMaBUxMtFPapWU14jCvabnoXp-0G00)

* [Blockchain-Related Interfaces](#blockchain-related-interfaces)
  * [Application](#application)
  * [Account](#account)
  * [Address](#address)
  * [Wallet](#wallet)
  * [Proof](#proof)
  * [Proposition](#proposition)
  <!-- * [CredentialSet](#credentialset) -->
* [Blockchain-Related Classes](#blockchain-related-classes)
  * [Box](#box)
  * [WalletFactory](#walletfactory)
  * [LevelDbWallet](#leveldbwallet)
  * [IndexedDbWallet](#indexeddbwallet)

### **Blockchain-Related Interfaces**

#### **Application**

This interface is implemented by objects that represent an application in a wallet. Applications are used to manager a set of accounts that are used for a related purpose, such as tracking all the shipments for a particular use-case.

##### Type Parameters

*None*

##### Implemented By

*None*

##### Methods/Functions

* ``` getId ``` \
  Return the ID (numeric index) of this application. This identifies the application in the local wallet and cannot ever change. Note that applications shared with remote wallets will be identified in the remote wallets by a different index than in the local wallet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Int32 \
          ID of this application
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getName ``` \
  Return the unique name of this application.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The application name
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setName ``` \
  Set the name of this application. The name must be unique within the CredentialSet. This will not persist across devices.
    * *Parameters*
        * ``` name ``` \
          An arbitrary name that can be used to identify the application. It is unique within the CredentialSet.
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * Another application in this wallet already uses the name
            * The name is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` createAccount ``` \
  Create a new account tied to this application in the local wallet.
    * *Parameters*
      * `aliases`
        A collection of arbitrary names that uniquely identify the new account within the application.
        * Type: Collection of String
        * Optional: yes
        * Default: empty collection
      * ``` partialProposition ``` \
        A partial proposition, or proposition template, which will create the proposition instance once the required parameters are supplied. This is used to generate addresses under the account.
          * Type: (any[]) => [Proposition](#proposition) | TBD
          * Optional: yes
          * Default: A knowledge (signing) partial proposition
    * *Returns* \
      [Result](#result)
        * S = [Account](#account) \
          The created account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountById ``` \
  Get an existing account under this application in the local wallet using it’s ID.
    * *Parameters*
        * ``` accountId ``` \
          The unique account ID.
            * Type: Int32
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = [Account](#account) \
          The account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The account was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountByName ``` \
  Get an existing account under this application in the local wallet using the account's alias name. An account alias name is unique within the application it belongs to.
    * *Parameters*
        * ``` name ``` \
          A String that identifies an account in the application.
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = [Account](#account) \
          The account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The name is null, empty or is not a valid account name.
            * The account was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getNextAddress ``` \
  Get the address associated with the next unused index for an account in this application, optionally specifying the underlying account. This also updates the index of the next usable address for the account. The address's spending proposition is derived from the account's partial proposition and the address's verification key.
    * *Parameters*
        * ``` accountId ``` \
          The ID of the account within this application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account does not exist within this application in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByIndex ``` \
  Get the address at an index for an account in this application, optionally specifying the underlying account. 
    * *Parameters*
        * ``` index ``` \
          The index of the address to retrieve
            * Type: Int32
            * Optional: no
        * ``` accountId ``` \
          The ID of the account within this application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The index is not in range or invalid
            * The specified account does not exist within this application in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByValue ``` \
  Get the address using it’s Base58 encoded value, optionally specifying the underlying account.
    * *Parameters*
        * ``` address ``` \
          The Base58 encoded address value
            * Type: base58
            * Optional: no
        * ``` accountId ``` \
          The ID of the account within this application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error
          conditions:
            * An address with this value does not exist in the account
            * The specified account does not exist within this application in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getAddressByAssetLabels ` \
  Get the addresses (in an account) with contents that are needed to satisfy desired quantities of assets. The addresses are returned along with it's boxes grouped into three categories; spend, split, and move.
    * *Parameters*
        * ` assetRequests ` \
          A collection of requests which represent the requirements of desired assets.
            * Type: Array of [AssetRequest](#assetrequest)
            * Optional: no
        * ` accountId ` \
          The ID of the account within this application for which we are retrieving addresses from.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = Array of [CategorizedBoxes](#categorizedboxes)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account does not exist within this application in the wallet.
            * There is not a combination of boxes that together contain a sufficient quantity.
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

---

#### **Account**

This interface is implemented by objects that represent a bookkeeping account within an application in a wallet. Accounts are used to manage a set of blockchain addresses that are use for the same purpose, such as a sequence of transfers related to a particular shipment or a set of addresses used to keep the wallet owner’s polys.
> 🚧 Reminder
> A link to the description of accounts on the Wallet page should be added here.

##### Type Parameters

*None*

##### Implemented By

*No public implementations*

##### Methods/Functions

* ``` getId ``` \
  Return the ID (numeric index) of this account within its application. This identifies the account in a within an application in the local wallet and cannot ever change. Note that accounts shared with remote wallets will be identified in the remote wallets by a different index than in the local wallet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Int32 \
          ID of this account
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getPartialProposition ``` \
  Return the partial proposition, or proposition template, to create the proposition instance once the required parameters are supplied. This is used to generate addresses under this account.  The address's spending proposition is derived from the account's partial proposition and the address's verification key.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = (any[]) => [Proposition](#proposition) | TBD
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getDescription ``` \
  Return the description of this account.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The account description
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setDescription ``` \
  Set the description of this account. This will not persist across devices.
    * *Parameters*
        * ``` description ``` \
          An arbitrary String that can be used to describe the account
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The description is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.

* ``` getNames ``` \
  Get the names that can be used to look up this account. These names are unique within an application.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = A collection of strings \
          These are the names associated with the account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

* ``` addName ``` \
  Add an additional name for the account. These names are unique within an application. This will not persist across devices. 
    * *Parameters*
        * ``` name ``` \
          An arbitrary String that can be used to identify the account. For accounts that human beings will interact with, this should be an easy to remember name. For accounts that other applications will interact with, this should be the id the that other application will use to identify the account.
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = A collection of strings \
          These are the names now associated with the account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The name duplicates a name associated with this account.
            * The name duplicates a name associated with another account tied to the same application.
            * The name is null, empty or cannot be used for some other reason.
            * An I/O or database error that is unrelated to the parameters passed by the caller.

* ``` removeName ``` \
  Remove a name from the account. These names are unique within an application.
    * *Parameters*
        * ``` name ``` \
          A String that can be used to identify the account.
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = A collection of strings \
          These are the remaining names associated with the account.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The name is not associated with this account.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getNextAddress ``` \
  Get the address at the next unused index for this account. This also updates the index of the next usable address for this account.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByIndex ``` \
  Get the address at the index for this account.
    * *Parameters*
        * ``` index ``` \
          The index of the address to retrieve
            * Type: Int32
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The index is not in range or invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByValue ``` \
  Get the address using it’s Base58 encoded value.
    * *Parameters*
        * ``` address ``` \
          The Base58 encoded address value
            * Type: base58
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error
          conditions:
            * An address with this value does not exist in the account
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getAddressByAssetLabels ` \
  Get the addresses with contents that are needed to satisfy desired quantities of assets. The addresses are returned along with it's boxes grouped into three categories; spend, split, and move.
    * *Parameters*
        * ` assetRequests ` \
          A collection of requests which represent the requirements of desired assets.
            * Type: Array of [AssetRequest](#assetrequest)
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = Array of [CategorizedBoxes](#categorizedboxes)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * There is not a combination of boxes that together contain a sufficient quantity.
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

A possible optimization that could be applied is to create addresses for accounts before they are needed by using a separate low priority thread.  

---

#### **Address**

This interface is implemented by objects that represent an address in an account.

##### Type Parameters

*None*

##### Implemented By

*No public implementations*

##### Methods/Functions

* ``` getIndex ``` \
  Return the account’s index of this address
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Int32 \
          Index of the address
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getValue ``` \
  Return the address’s unique Base58 encoded value.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = base58 \
          The value of the address
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getDescription ``` \
  Return the description of the address.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The address description
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setDescription ``` \
  Set the description of the address. This will not persist across devices.
    * *Parameters*
        * ``` description ``` \
          An arbitrary String that can be used to describe the address
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The description is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getPublicKey ``` \
  Return the public key for this address.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = base58 encoded string \
          The public key
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getPrivateKey ``` \
  Return the private key for this address.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = base58 emcpded string \
          The private key
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getProposition ``` \
  Return the spending proposition associated with this address, if available.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = [Proposition](#proposition) or <*implementation defined*> \
          The proposition object, if stored on the wallet. Otherwise an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

<!--- * ``` getSignatureAlgorithm ``` \
  Return the algorithm used for the signature associated with this address’s evidence. Current possible
  values are “Ed25519” and “Curve25519”.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The signature algorithm
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setSignatureAlgorithm ``` \
  Set the algorithm to be used for signing this address’s proposition. Current possible values are “Ed25519” and
  “Curve25519”.
    * *Parameters*
        * ``` algorithm ``` \
          The desired signature algorithm.
            * Type: String
            * Optional: yes
            * Default: Ed25519
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The algorithm parameter is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller. 
--->

* ``` getAssets ``` \
  Return the types of spendable assets contained in this address with the boxes that contain them.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = A collection of asset labels (String) mapped to a collection of [boxes](#box) that contain them. \
          This is given by a collection of mappings from asset label to their respective boxes. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

* ``` addBox ``` \
  Add a box containing assets to this address. This is not a source of truth and if misused can lead to inconsistencies between the local wallet and the blockchain. The intended use case is to synchronize the local wallet after a successful minting or transfer to this address took place.
    * *Parameters*
        * ``` box ``` \
          The box to add.
            * Type: [Box](#box)
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful add
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getBoxByBoxId ``` \
  Get a box at this address using it's ID.
    * *Parameters*
        * ``` boxId ``` \
          The ID of the box.
            * Type: TBD
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = [Box](#box) \
          The box.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * A box with the specified ID does not exist at this address.
            * An I/O or database error that is unrelated to the parameters passed by the caller.


##### Implementation Notes

*None*

---

#### **Wallet**

This interface is implemented by objects that manage an opened wallet and its contents.

##### Type Parameters

*None*

##### Implemented By

[LevelDbWallet](#leveldbwallet), [IndexedDbWallet](#indexeddbwallet)

##### Methods/Functions

* ``` getLocation ``` \
  Return the path of the local directory storing the files containing the data for this wallet database. This value uniquely identifies a wallet within an environment. It is also always useful in locating the wallet store. 
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          This will differ depending on the implementation class.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getWalletId ``` \
  Return the Base58 encoded wallet ID.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = byte32 \
          The ID of the wallet, which will be generated from the same mnemonic as the wallet’s keys.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

<!-- * ``` getCredentialSet ``` \
  Return the CredentialSet that is associated with this opened Wallet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = [CredentialSet](#credentialset) \
          The CredentialSet object associated with this Wallet
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller. -->

* ``` getWalletName ``` \
  Return the name of the wallet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The name of the wallet
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setWalletName ``` \
  Set the name of the wallet. This will not persist across devices.
    * *Parameters*
        * ``` name ``` \
          An arbitrary String that can be used as a human readable way to identify a wallet
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The name is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getWalletDescription ``` \
  Return the description of the wallet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The wallet description
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setWalletDescription ``` \
  Set the description of the wallet. This will not persist across devices.
    * *Parameters*
        * ``` description ``` \
          An arbitrary String that can be used to describe the wallet
            * Type: String
            * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The description is invalid
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` createApplication ``` \
Create a new application in this Wallet within the active CredentialSet.
  * *Parameters* \
    *None*
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The created application.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getApplicationById ``` \
Get an existing application in this Wallet within the active CredentialSet using it’s ID.
  * *Parameters*
    * ``` applicationId ``` \
    The unique application ID.
      * Type: Int32
      * Optional: no
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getApplicationByName ``` \
Get an existing application in this Wallet within the active CredentialSet using the application name.
  * *Parameters*
    * ``` name ``` \
    A String that identifies the application.
      * Type: String
      * Optional: no
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The application.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The name is null, empty or is not a valid account name.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` createAccount ``` \
Create a new account for a specified application in this Wallet within the active CredentialSet. 
  * *Parameters*
    * ``` partialProposition ``` \
      A partial proposition, or proposition template, which will create the proposition instance once the required parameters are supplied. This is used to generate addresses under the account.  The address's spending proposition is derived from the account's partial proposition and the address's verification key.
        * Type: (any[]) => [Proposition](#proposition) | TBD
        * Optional: yes
        * Default: A knowledge (signing) partial proposition
    * ``` applicationId ``` \
    The unique ID of the application for which the account will be created under.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The created account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountById ``` \
Get an existing account  for a specified application in this Wallet within the active CredentialSet using it’s ID.
  * *Parameters*
    * ``` accountId ``` \
    The unique account ID.
      * Type: Int32
      * Optional: no
    * ``` applicationId ``` \
    The unique ID of the application for which the account belongs to.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified account was not found in the wallet.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountByName ``` \
Get an existing account for a specified application in this Wallet within the active CredentialSet using an alias name.
  * *Parameters*
    * ``` name ``` \
    A String that identifies an account.
      * Type: String
      * Optional: no
    * ``` applicationId ``` \
    The unique ID of the application for which the account belongs to.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The name is null, empty or is not a valid account name.
      * The specified account was not found in the wallet.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getNextAddress ``` \
  Get the next unused address for a specified account and application in this Wallet within the active CredentialSet. This also updates the index of the next unused address for the account.
    * *Parameters*
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByIndex ``` \
  Get the address at an index for a specified account and application in this Wallet within the active CredentialSet.
    * *Parameters*
        * ``` index ``` \
          The index of the address to retrieve
            * Type: Int32
            * Optional: no
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The index is not in range or invalid
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByValue ``` \
  Get the address using it’s unique Base58 encoded value for a specified account and application in this Wallet within the active CredentialSet.
    * *Parameters*
        * ``` address ``` \
          The Base58 encoded address value
            * Type: base58
            * Optional: no
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error
          conditions:
            * An address with this value does not exist in the account
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAssetLabels ``` \
  Return asset labels associated with this Wallet within the active CredentialSet.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = A collection of asset labels (String) \
          The asset labels associated with this wallet. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getAddressByAssetLabels ` \
  Get the addresses (for a specified account and application in this Wallet) with contents that are needed to satisfy desired quantities of assets. The addresses are returned along with it's boxes grouped into three categories; spend, split, and move.
    * *Parameters*
        * ` assetRequests ` \
          A collection of requests which represent the requirements of desired assets.
            * Type: Array of [AssetRequest](#assetrequest)
            * Optional: no
        * ` applicationId ` \
          The ID of the application that the addresses ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ` accountId ` \
          The ID of the account within an application that the addresses resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = Array of [CategorizedBoxes](#categorizedboxes)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * There is not a combination of boxes that together contain a sufficient quantity.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` addAssetType ` \
  Associates an asset label with a new human readable label in this Wallet within the active CredentialSet.
    * *Parameters* 
      * `assetType` \
        A human readable label to associate with an asset label
          * Type: String
          * Optional: No
      * `assetLabel` \
        The asset label that will be associated with the `assetType` label. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
          * Type: String
          * Optional: No
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `assetType` is already in use by a different `assetLabel`
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getAssetLabel ` \
  Return the asset label associated with a given type in this Wallet within the active CredentialSet.
    * *Parameters* 
      * `assetType` \
        A human readable label associated with an asset label
          * Type: String
          * Optional: No
    * *Returns* \
      [Result](#result)
        * S = String \
          The asset label associated with `assetType`. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `assetType` does not exist in the wallet
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` removeAssetType ` \
  Removes the association of a given human readable label from the assete label that it mapped to.
    * *Parameters* 
      * `assetType` \
        The human readable label to remove
          * Type: String
          * Optional: No
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> \
      An implementation specific value denoting a succesful update is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * `assetType` does not exist in the wallet
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

<!-- ##### See Also

[CredentialSet](#credentialset) -->

---

#### **Proof**

This interface is defined elsewhere in the brambl library. It is used to prove that signing requirements specified
by a ```Proposition``` have been met.

---

#### **Proposition**

This interface is defined elsewhere in the brambl library. It is used to specify the the requirements for spending an
asset or minting more of an asset.

<!-- ---

#### **CredentialSet**

This interface is implemented by objects that encapsulate the details of a single set of data in a Wallet.

##### Type Parameters

*None*

##### Implemented By

*None*

##### Methods/Functions

* ``` getId ``` \
Return the identifier of this credential set that is unique within the Wallet.
  * *Parameters* \
    *None*
  * *Returns* \
    [Result](#result)
    * S = String \
    A value to identify this credential set.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` createApplication ``` \
Create a new application in this credential set within the local wallet.
  * *Parameters* \
    *None*
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The created application.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getApplicationById ``` \
Get an existing application in this credential set within the local wallet using it’s ID.
  * *Parameters*
    * ``` applicationId ``` \
    The unique application ID.
      * Type: Int32
      * Optional: no
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getApplicationByName ``` \
Get an existing application in this credential set within the local wallet using the application name.
  * *Parameters*
    * ``` name ``` \
    A String that identifies the application.
      * Type: String
      * Optional: no
  * *Returns* \
    [Result](#result)
    * S = [Application](#application) \
    The application.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The name is null, empty or is not a valid account name.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` createAccount ``` \
Create a new account for a specified application in this credential set within the local wallet. 
  * *Parameters*
    * ``` partialProposition ``` \
      A partial proposition, or proposition template, which will create the proposition instance once the required parameters are supplied. This is used to generate addresses under the account.  The address's spending proposition is derived from the account's partial proposition and the address's verification key.
        * Type: (any[]) => [Proposition](#proposition) | TBD
        * Optional: yes
        * Default: A knowledge (signing) partial proposition
    * ``` applicationId ``` \
    The unique ID of the application for which the account will be created under.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The created account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountById ``` \
Get an existing account  for a specified application in this credential set within the local wallet using it’s ID.
  * *Parameters*
    * ``` accountId ``` \
    The unique account ID.
      * Type: Int32
      * Optional: no
    * ``` applicationId ``` \
    The unique ID of the application for which the account belongs to.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The specified account was not found in the wallet.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAccountByName ``` \
Get an existing account for a specified application in this credential set within the local wallet using an alias name.
  * *Parameters*
    * ``` name ``` \
    A String that identifies an account.
      * Type: String
      * Optional: no
    * ``` applicationId ``` \
    The unique ID of the application for which the account belongs to.
      * Type: Int32
      * Optional: yes
      * Default: 0
  * *Returns* \
    [Result](#result)
    * S = [Account](#account) \
    The account.
    * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
      * The name is null, empty or is not a valid account name.
      * The specified account was not found in the wallet.
      * The specified application was not found in the wallet.
      * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getNextAddress ``` \
  Get the next usable address for a specified account and application in this credential set within the local wallet. This also updates the index of the next usable address for the account.
    * *Parameters*
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByIndex ``` \
  Get the address at an index for a specified account and application in this credential set within the local wallet.
    * *Parameters*
        * ``` index ``` \
          The index of the address to retrieve
            * Type: Int32
            * Optional: no
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The index is not in range or invalid
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAddressByValue ``` \
  Get the address using it’s unique Base58 encoded value for a specified account and application in this credential set within the local wallet.
    * *Parameters*
        * ``` address ``` \
          The Base58 encoded address value
            * Type: base58
            * Optional: no
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error
          conditions:
            * An address with this value does not exist in the account
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAssetLabels ``` \
  Return asset labels associated with a specified account and application in this credential set within the local wallet.
    * *Parameters* 
        * ``` applicationId ``` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ``` accountId ``` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = A collection of asset labels (String) \
          The asset labels associated with this application and specified account. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getAddressByAssetLabels ` \
  Get the addresses (for a specified account and application in this credential) with contents that are needed to satisfy desired quantities of assets. The addresses are returned along with it's boxes grouped into three categories; spend, split, and move.
    * *Parameters*
        * ` assetRequests ` \
          A collection of requests which represent the requirements of desired assets.
            * Type: Array of [AssetRequest](#assetrequest)
            * Optional: no
        * ` applicationId ` \
          The ID of the application that the address ultimately resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
        * ` accountId ` \
          The ID of the account within an application that the address resides in.
            * Type: Int32
            * Optional: yes
            * Default: 0
    * *Returns* \
      [Result](#result)
        * S = Array of [CategorizedBoxes](#categorizedboxes)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified account was not found in the wallet.
            * The specified application was not found in the wallet.
            * There is not a combination of boxes that together contain a sufficient quantity.
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None* -->

### **Blockchain-Related Classes**

#### **AssetRequest**

Objects of this type encapsulates a request for a quantity of an asset.

##### Type Parameters

*None*

##### Implements

*None*

##### Constructor

* ` getAssetLabel ` \
  The asset label of the desired asset. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
  * Type: String
  * Optional: no
* ` getQuantity ` \
  The desired quantity.
  * Type: UInt128
  * Optional: yes
  * Default: 0 (denotes all quantity available)

##### Methods/Functions

* ` getAssetLabel ` \
  Return the asset label associated with this request.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The asset label. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getQuantity ` \
  Return the quantity associated with this request.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = UInt128 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

---

#### **CategorizedBoxes**

Objects of this type encapsulates the result for an asset request. The result represents an [Address](#address) mapped to 3 categories of boxes (spend, split, and move)

##### Type Parameters

*None*

##### Implements

*None*

##### Constructor

The constructor is private or there is none.

##### Methods/Functions

* ` getAddress ` \
  Return the address associated with this response.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = [Address](#address)
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getSpendBoxes ` \
  Return the boxes whose entire contents will need to be spent.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Array of [Box](#box) 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getSplitBoxes ` \
  Return the boxes having contents that will need to be split between an amount needed to satisfy the request quantity and the rest of the contents.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Array of [Box](#box) 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ` getMoveBoxes ` \
  Return the boxes whose entire contents are unneeded to satisfy the request quantity and should be moved to a different address when this address is spent.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Array of [Box](#box) 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

---

#### **Box**

Objects of this type represent a Box containing assets on the blockchain. A Box is tied to an output of a submitted transaction and can be used as an input to a newly created transaction.

##### Type Parameters

*None*

##### Implements

*None*

##### Constructor

The constructor is private or there is none.

##### Methods/Functions

* ``` getId ``` \
  Return the unique identifier of this box. This ID contains ID of the transaction that output the box and its 0 based index among the outputs.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Type TBD \
          A value to identify this box.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getAssetLabel ``` \
  Return the asset label denoting the type of assets stored in this box.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The asset label. See the [structure of an asset label](#structure-of-an-asset-label) for more information.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getQuantity ``` \
  Return the quantity of the assets that this box contains.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = Int128 \
          The quantity of assets contained in this box
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getStatus ``` \
  Return the status of this box.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The status of this box. Possible values include "settled", "pending", and "spent".
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` setStatus ``` \
  Set the status of this box.
    * *Parameters* 
      * ``` status ``` \
        The new status of this box. Possible values include "settled", "pending", and "spent".
        * Type: String
        * Optional: no
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes a successful update
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The provided status was invalid.
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getSecurityRoot ``` \
  Return the security root of this box.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = byte32 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getSecurityRootAsString ``` \
  Return the security root of this box translated into the implementation language's native character set.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getMetadata ``` \
  Return the optional metadata of this box.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = byte127 or <*implementation defined*> \
          If metadata is not present an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.
* ``` getMetadataAsString ``` \
  Return the optional metadata of this box translated into the implementation language's native character set.
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String or <*implementation defined*> \
          If metadata is not present an implementation specific value denoting nothing is returned.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

---

#### **WalletFactory**

This is a utility class that is used to create or restore Wallets.

##### Type Parameters

*None*

##### Implements

*None*

##### Constructor

The construct is private or there is none.

##### Methods/Functions

* ``` static createWallet ``` \
  Create a wallet.
    * *Parameters*
        * ``` password ``` \
          A password that is used to encrypt and decrypt the generated Wallet.
            * Type: String
            * Optional: no
        * ``` walletPath ``` \
          A path (or name) indicating where to store the wallet contents. This is dependent on the type of wallet store being used. If not provided, a default value is used.
            * Type: String
            * Optional: yes
    * *Returns* \
      [Result](#result)
        * S = An array of strings \
          The mnemonic needed to restore the wallet in addition to a code indicating if the wallet was created or if it already existed.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * The specified walletPath is not a valid.
            * The specified walletPath already exists but the specified password is invalid for this wallet
            * An I/O or database error that is unrelated to the parameters passed by the caller.
            * The specified walletPath is invalid for any other reason.
* ``` static openWallet ``` \
  Create a [Wallet](#wallet) object to access the wallet. The wallet must already exist for this to succeed. This opened Wallet is associated to a single CredentialSet
    * *Parameters*
        * ``` password ``` \
          A string used to encrypt and decrypt wallet information
            * Type: String
            * Optional: no
        * ``` walletPath ``` \
          A path (or name) indicating where to retrieve the wallet contents under. This is dependent on the type of wallet store being used. If not provided, the default value will be used.
            * Type: String
            * Optional: yes
    * *Returns* \
      [Result](#result)
        * S = [Wallet](#wallet) \
          The opened Wallet. 
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * A wallet with the specified walletPath does not exist
            * The wallet exists but the password is not correct
            * The specified walletPath is invalid for any other reason.
            * An I/O or database error that is unrelated to the parameters passed by the caller.


  > ⚠️ For the forseeable future we will forget about the transport of data
  > We are assuming the wallet is going to live on disk for the entire time and assume that the user has all the data that they need

* ``` static restoreWallet ``` 
  Restore a wallet from a mnemonic. This effectively recreates and populates the underlying Wallet. This will recreate the derivable wallet contents either generated from the mnemonic or fetched from the blockchain. 
  It is important to note that not all wallet contents are able to be restored. Unrecoverable information includes wallet name, wallet description, application name, account alias names, account description, and address description.
    * *Parameters*
        * ``` password ``` \
          A (new) password that is used to encrypt and decrypt the generated Wallet.
            * Type: String
            * Optional: no
        * ``` mnemonic ``` \
          An array of strings that is the mnemonic needed to restore the wallet. This is the value that was returned
          when a wallet was created.
            * Type: Array of Strings
            * Optional: no
        * ``` walletPath ``` \
          A path (or name) indicating where to store the wallet contents under. This is dependent on the type of Wallet store being used. If not provided, a default value will be used.
            * Type: String
            * Optional: yes
    * *Returns* \
      [Result](#result)
        * S = <*implementation defined*> This value denotes successful restoration
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * mnemonic is invalid
            * The specified walletPath is not a valid.
            * The specified walletPath already exists
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

It is possible that additional methods will be added to create Wallet objects that correspond to different implementations of the Wallet interfaces.

The Wallet implementation class used for the specified methods above will be determined by the runtime environment.

Network provider information is configured for an instance of brambl and can be determined by the runtime environment. WalletFactory will use this information to identify a CredentialSet that an open Wallet will use.

<!-- Values fetched from Genus (i.e, not possible from the mnemonic alone) include asset information. The signature algorithm for each address can be determined by brute force testing the 2 possible algorithms. -->

<!-- Restoring a wallet takes a CredentialSet collection to indicate what needs to be recovered from Genus as well as how to store it in the new Wallet store. -->

---

#### **LevelDbWallet**

An implementation of the [Wallet](#wallet) interface that works with a local LevelDB database.

##### Type Parameters

*None*

##### Implements

[Wallet](#wallet)

##### Constructor

The construct is private or there is none.

##### Methods/Functions

* ``` getLocation ``` \
  Return the path of the local directory storing the files containing the data for this wallet database. The details are implementation specific. This value uniquely identifies a wallet within an environment. It is also always useful in locating the wallet store. 

    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          Path of the directory which stores all the contents of this database
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

*None*

---

#### **IndexedDbWallet**

An implementation of the [Wallet](#wallet) interface that works on a web browser.

##### Type Parameters

*None*

##### Implements

[Wallet](#wallet)

##### Constructor

The construct is private or there is none.

##### Methods/Functions

* ``` getLocation ``` \
  Return the path of the local directory storing the files containing the data for this wallet database. This value uniquely identifies a wallet within an environment. It is also always useful in locating the wallet store. 
    * *Parameters* \
      *None*
    * *Returns* \
      [Result](#result)
        * S = String \
          The unique name identifying this object store in an IndexedDb database.
        * F = <*implementation defined*> This value should allow the caller to identify these error conditions:
            * An I/O or database error that is unrelated to the parameters passed by the caller.

##### Implementation Notes

IndexedDb API 2.0 is a W3C Recommendation (web standard) as of Jan 2018. You can find the
spec [here](https://www.w3.org/TR/IndexedDB-2/)

IndexedDb API 3.0 is in a working draft state as of July 2022. You can find the
spec [here](https://www.w3.org/TR/IndexedDB-3/)

An IndexedDb storage has two levels; databases (each with a unique name) may contain many object stores (each with a unique name within the database). For our use case, we will use a single database with many object stores. The term Wallet “database” throughout this spec will refer to an individual object store.

# Hiding Nondeterminism

One of the design goals of this SDK is to hide the probabilistic nature of the blockchain. We will use the account abstraction to help accomplish this. The following discussion ignores transaction with multi-signature spending propositions.

An account is a sequence of addresses. An account has two attributes we will use to reason about non-determinism. These attributes are called *confidence factor*, *threshold confidence factor* and *state*.

The confidence factor is the likelihood that we know the correct outcome of the last transaction posted against an address of the account. For example, if the confidence factor is 1 - 10<sup>-9</sup>, that means there is only 1 chance in 10<sup>9</sup> that our knowledge about the outcome of the last transaction posted against the account is wrong. When a transaction has been posted to an account and we know that we do not yet know the outcome of the transaction, the confidence factor is 0.

Before any transactions have output any assets to addresses of an account, its confidence factor is 1 because we are certain that the account has no assets. If we are certain that the last transaction posted to an account failed, then the account’s confidence factor is the confidence factor it had before the failed transaction was posted.

The SDK gets a value for the confidence factor when it queries Genus to learn the outcome of a posted transaction. Since we can never be entirely certain of a transaction’s success, once we believe that a transaction has been successfully posted to an account its confidence factor will be less than 1.

An account’s threshold confidence factor is a value to be compared to the account’s confidence factor. If the confidence factor is greater than the threshold confidence factor, then we will behave as if we were certain of the outcome of the last posted transaction.

The outputs of transactions are boxes that contain a quantity of a type of asset. Addresses are associated with a possibly empty set of boxes. It is through their association with boxes that addresses are considered to have assets. It is through addresses that accounts are considered to have assets.

The wallet assigns one of these states to each box:
* `settled` \
  After a transaction outputs a box to an address, the box is added to the address in the wallet with
  status of `settled`.
* `pendingSpend` \
  When a transaction is posted to spend a box, the wallet changes the status of the box to `pendingSpend`.
* `spent` \
  When the wallet learns that a transaction was successful in spending the contents of a box, the status of
  the box is changed to `spent`. If the transaction does not succeed withing the expected amount of time,
  the status of the box is changes back to `settled`.
* `surprise`
  In rare circumstance the wallet will discover that the status of a box was incorrectly set to `settled`
  or `spend`. When this is discovered, the status of the box is set to `surprise`. 

> ⚠️ What to do about accounts or addresses with a status of ``` surprise ``` is an open issue.

For boxes that have a single signature spending proposition, we will normally learn about a surprise when we analyse the results of querying Genus for the outcome of a subsequent transaction.

# Genus API

# Multi-Signature Spending Propositions

In the case of multi-signature spending propositions, there are multiple parties that can successfully post a transaction to an account. This will necessitate having a mechanism to coordinate the signing parties in order to know the account’s confidence factor and status.

> ⚠️ The details of coordination for multiple signature spending propositions are currently an open issue. 
> The coordination mechanism will have to allow all parties that can post a transaction to an account to have a consistent value for the account’s confidence factor.

# Implementation Guidelines

Transactions have these size limits:

* data
    * 127 Latin-1 characters (also 127 Bytes)
* security root
    * 64 Bytes

Note that there exists multiple Base58 standards. Topl uses the same Base58 standard as Bitcoin. More information is documented at [Base58Check encoding](https://en.bitcoin.it/wiki/Base58Check_encoding#Base58_symbol_chart)

## Structure of an Asset Label

An asset label is a string that identifies the type of asset. It has an unambiguous prefix which identifies the type of asset. Current types include Dion (v1 asset) and Tetra (v2 asset).

The structure of the string following the prefix will be dependent on the type of asset label. 

Dion asset labels must be 1 to 8 characters long. All characters in the Latin-1 character set.

> ⚠️ The structure of Tetra asset labels is not finalized
> Currently it is a string with 2 parts, separated by a colon (:). The 2 parts are groupId and seriesId.

# Notes on Comments

The markdown contains many lines commented out. These lines refer to topics that we will address at a later time. These topics include:
* Credential Sets \
  Credential sets, for the meantime, will be abstracted away from the client API