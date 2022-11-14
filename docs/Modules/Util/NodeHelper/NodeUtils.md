# NodeUtils

This page describes interfaces and helper classes that are used to work with a Bifrost node. The descriptions are in a
language-neutral form. To be language-neutral, we [follow a set of assumptions](../../../Overview/Assumptions).

The interfaces and classes documented on this page are:

* [BifrostConnection](#interface-bifrostconnection)

## Interface BifrostConnection

Objects that implement this interface are responsible for providing connections used for gRPC calls from a client to a
Bifrost node. Such objects also provide information about how the connections are configured.

All classes that implement this interface will implementation specific.

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
