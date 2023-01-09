# External Libraries

The Brambl SDK uses external libraries that are available in the implementation language. Some of these library
dependencies are not documented in this document because they are implementation details that are not relevant to the
APIs that are exposed by the Brambl SDK. However, some API functions/methods have parameters or return types that are
defined in external libraries. In these cases, the type is documented on this page; it is up to the implementor to find
a library that provides the type or provide a wrapper around a library that provides a similar type.

Not that neither test vectors nor testing procedures are specified for the external libraries.

Here are the types that are defined in external libraries:

* [`ByteVector`](/docs/Modules/Common/External%20Libraries/ByteVector) — An immutable sequence of bytes with behavior
  documented in the [linked page](/docs/Modules/Common/External%20Libraries/ByteVector).
  This type is defined for the Scala implementation in the scodec
  library.<br/>

  The type is implemented in Scala as a balanced binary tree of chunks. This allows ByteVectors to be composed into
  larger ByteVectors without copying data.
