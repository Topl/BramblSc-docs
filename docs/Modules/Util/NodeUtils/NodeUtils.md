# NodeUtils

This page describes interfaces and helper classes that are used to work with a Bifrost node. The descriptions are in a
language-neutral form. To be language-neutral, we [follow a set of assumptions](../../../Overview/Assumptions).

The interfaces and classes documented on this page are:

* [BifrostConnection](#interface-bifrostconnection)
* [NodeCache](#class-nodecache)

## Interface BifrostConnection

Objects that implement this interface are responsible for providing connections used for gRPC calls from a client to a
Bifrost node. Such objects also provide information about how the connections are configured.

All classes that implement this interface will implementation specific. In particular, this interface does not specify
anything about how connections are managed. The expectation is that all details related to connection management will be
determined by the gRPC implementation used, as that will be the main consumer of this interface's implementation.

### getUrl

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

The testing procedure for `getNodeConfig` is [described on a separate page](bifrost_connection_tests/getUrl_test)

## Class NodeCache

This class is responsible for caching various information from a BiFrost node.

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

The testing procedure for `getNodeConfig` is [described on a separate page](nodecache_tests/constructor_test)

### getNodeConfig

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

The testing procedure for the constructor is [described on a separate page](nodecache_tests/getnodeconfig_test)

