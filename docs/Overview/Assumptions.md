# Assumptions

This specification contains descriptions of the SDK interfaces. The descriptions are documented in a way that assumes
all languages used for implementations have a common set of features related to supporting the object-oriented paradigm:

* Classes that can be used to create instances or objects. The objects have functions/methods and attributes. We do not
  assume that there is inheritance between classes.
* Some implementation languages allow functions or methods to throw exceptions or panic when something unexpected
  happens that is outside of the assumptions, requirements and behaviors documented here. This way of dealing with
  unexpected behavior is not be documented as part of any interface documented here. If implementations need to respond
  to an unexpected situation in this way, the implementation must document this behavior.
* Interfaces describe a set of functions/methods provided by classes that implement the interfaces. We do not assume
  that interfaces can inherit from interfaces.
* We assume that classes can implement multiple interfaces.
* The type of a parameter or return value can be a class, interface or primitive type.
* We do not assume that classes can have more than one public constructor.
* We assume that there are static functions/methods that can be associated with a class that can be called without
  having an instance of the class. These will be primarily used to create instances of their associated class or to set
  global parameters.
* We assume that the language is either dynamically typed or statically typed with classes and interfaces can be
  generic/parametric. Generic/parametric classes and interfaces have type parameters used to specify the types of method
  parameters and return values.
* We assume that the language provides a future or promise type that encapsulates values that are computed
  asynchronously. The minimal functionality assumed for the future or promise type is that it has methods to query
  whether the computation has finished and a blocking operation to get the value of the computation.  
  In the rest of this document, we consider “future” and “promise” to be synonyms and use “future” to refer to both.
* We assume that methods/functions can have parameters whose values are methods/functions (first-class functions).

Various data types are used to describe the parameters and return types of functions/methods. Most of these are defined
in protobuf specifications from which language specific definitions are generated. A few collection types are not
defined in the protobuf specs:

* `Option`
  This is a very simple collection that either contains one element or None. It is used to indicate that a field or
  parameter may not have a value.
* `Collection`
  This is an unordered collection. It provides operations to iterate over its contents and to determine if an object
  is an element of the collection.
* `List`
  This is an ordered collection. It provides operations to iterate over its contents in their order and to determine if
  an object is an element of the collection.
* `Stream`
  is a first-in-first-out data structure to which data can be asynchronously added and removed.
* `Map`
  is a map/dictionary/associative array that associated keys with values.

Most implementation types will have commonly used equivalents of these. The most appropriate equivalent should be used.
Because some implementation languages will provide collection types that take type parameters, the declarations include
type parameters for these.