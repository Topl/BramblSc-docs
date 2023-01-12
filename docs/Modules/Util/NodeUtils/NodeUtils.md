# NodeUtils

This page describes interfaces and helper classes that are used to work with a Bifrost node. The descriptions are in a
language-neutral form. To be language-neutral, we [follow a set of assumptions](../../Overview/Assumptions).

The interfaces and classes documented on this page are:

* [BifrostConnection](#interface-bifrostconnection)
* [NodeCache](#class-nodecache)
* [SlotUtil](#class-slotutil)

## Interface BifrostConnection

Objects that implement this interface are responsible for providing connections used for gRPC calls from a client to a
Bifrost node. Such objects also provide information about how the connections are configured.

All classes that implement this interface will implementation specific. In particular, this interface does not specify
anything about how connections are managed. The expectation is that all details related to connection management will be
determined by the gRPC implementation used, as that will be the main consumer of this interface's implementation.

Here is a summary of the methods/functions in this interface:

* [getUrl](#geturl) — Get the URL of the Bifrost node that a BifrostConnection works with.

### method getUrl

#### Signature(s)

```
getUrl() returns String
```

#### Description

Return the URL of the Bifrost node that this object connects to.

#### Parameters

_No Parameters_

#### Returns

A string that is the URL of the Bifrost node this object connect to.

#### Errors

The errors that the method/function will produce include:

No expected errors

#### Testing Procedure

The testing procedure for `getNodeConfig`
is [described on a separate page](NodeUtils/BifrostConnection%20Tests/getUrl_test)

## Class NodeCache

This class is responsible for caching various information from a BiFrost node.

Here is a summary of the methods/functions in this class:

* [Constructor](#constructor) — Construct a `NodeCache`
* [getGenesisBlock](#getgenesisblock) — Get the Bifrost node's genesis block
* [getNodeConfig](#getnodeconfig) — Get the Bifrost node's configuration information.

### Constructor

#### Signature(s)

```
NodeCache(connection: BifrostConnection, timeoutMillis: uint64)
```

#### Description

Construct an instance of `NodeCache` that gets data from the bifrost node that the given `BifrostConnection` object
connects to. The constructor must initiate the pre-fetch of the node's configuration and Genesis block information.

The pre-fetch may be synchronous or asynchronous. It is recommended, but not required, that the pre-fetch be
asynchronous. If the pre-fetch is synchronous, then the constructor will be expected to produce the errors noted below.
If the pre-fetch is asynchronous, then any errors encountered will not be returned from this constructor, but from the
functions/methods that attempt to access the information from the constructed object.

#### Parameters

* `connection` the `BifrostConnection` object that will be used to communicate with the Bifrost node.

#### Returns

The constructed object.

#### Errors

The errors that the method/function will produce include:

* Unable to connect to Bifrost node.
* Bifrost node returned an error.

#### Testing Procedure

The testing procedure for `getNodeConfig` is [described on a separate page](NodeUtils/NodeCache%20Tests/constructor_test)

### method getGenesisBlock

#### Signature(s)

```
getGenesisBlock() returns co.topl.proto.models.FullBlock
```

#### Description

Get a cached version of the genesis block. This cached object is obtained by the `NodeCache` constructor initiating a
call to calling `BifrostQuery.getBlockByHeight(1)`.

#### Parameters

_No Parameters_

#### Returns

The cached `co.topl.proto.models.FullBlock` object.

#### Errors

The errors that the method/function will produce as a result of a failed asynchronous query initiated by the constructor
include:

* Unable to connect to Bifrost node.
* Bifrost node returned an error.
* The Bifrost node returned an error .
* The Bifrost node did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NodeUtils/NodeCache%20Tests/getgenesisblock_test)

### method getNodeConfig

#### Signature(s)

```
getNodeConfig(connection: BifrostConnection, timeoutMillis: uint64, maxAgeMillis: uint64)
    returns co.topl.proto.models.node.NodeConfig
```

#### Description

Get a possibly cached version of the Bifrost node's configuration information. It gets the `NodeConfig` object by
calling `BifrostQuery.getNodeConfig` if there is no cached object or the cached object is too old.

#### Parameters

* `connection` the `BifrostConnection` object that will be used to communicate with the Bifrost node.
* `timeoutMillis` _(optional)_ The maximum number of milliseconds to wait. The default value is 2000 (2 seconds).
* `maxAgeMillis` _(optional)_ The maximum age of the object to be returned. The default value is 86,400,000 (1 day). If
  the `NodeConfig` object is older than this, it will be refreshed by calling `BifrostQuery.getNodeConfig`.

#### Returns

A `co.topl.proto.models.node.NodeConfig` that contains the node's configuration. The encapsulated configuration must
include the configured slot duration.

The value is cached. The implementation is expected to refresh the information when it

#### Errors

The errors that the method/function will produce include:

* Unable to connect to Bifrost node.
* Bifrost node returned an error.
* The Bifrost node returned an error .
* The Bifrost node did not return a result before the timeout happened

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NodeUtils/NodeCache%20Tests/getnodeconfig_test)

## Class SlotUtil

This a class for working with [slot](../../Overview/Glossary#Slot) numbers.

Here is a summary of the methods/functions in this class:

* [Constructor](#slotutil-constructor) — Construct an instance of `SlotUtil`
* [slotNumberToTimestamp](#slotnumbertotimestamp) — Convert a slot number to a Unix Timestamp
* [timestampToSlotNumber](#timestamptoslotnumber) — Convert a Unix timestamp to a slot number.

### method SlotUtil Constructor

#### Signature(s)

```
SlotUtil(nodeCache: NodeCache)
```

#### Description

Construct an instance of `SlotUtil` that gets the duration of slots
from [nodeCache.getNodeConfig.slotDuration](#getnodeconfig) and the start of slot 0
from[nodeCache.getGenesisBlock().header.timestamp](#getgenesisblock).

#### Parameters

* `connection` the `BifrostConnection` object that will be used to communicate with the Bifrost node.

#### Returns

The constructed object.

#### Errors

The errors that the method/function will produce include:

_No Errors_

#### Testing Procedure

_No Prescribed Tests_

### method slotNumberToTimestamp

#### Signature(s)

```
slotNumberToTimestamp(slotNumber: uint64) returns int64
```

#### Description

Convert a slot number to a timestamp using the slot duration and start of slot 0 obtained from this object's `nodeCache`
.

#### Parameters

* `slotNumber` a number that identifies a slot in a Topl blockchain network.

#### Returns

A [Unix timestamp](https://www.unixtimestamp.com/)

#### Errors

The errors that the method/function will produce include:

* Slot number translates to a time too far in the future to be represented as a Unix timestamp (overflow).

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NodeUtils/SlotUtil%20Tests/slot_timestamp_conversion_test)

### method timestampToSlotNumber

#### Signature(s)

```
timestampToSlotNumber(timestamp: int64) returns uint64
```

#### Description

Convert a timestamp to a slot number using the slot duration and start of slot 0 obtained from this object's
`nodeCache`.

#### Parameters

* `timestamp` a [Unix timestamp](https://www.unixtimestamp.com/)

#### Returns

The slot number that includes the given timestamp.

#### Errors

The errors that the method/function will produce include:

* Timestamp is before slot 0

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NodeUtils/SlotUtil%20Tests/slot_timestamp_conversion_test)
