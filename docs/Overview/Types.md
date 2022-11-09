# Types

Various data types are used to describe the parameters and return types of functions/methods. Most of these are provided by [Protobuf](https://developers.google.com/protocol-buffers/docs/proto3) or will be defined in a separate [protobuf specifications repo](https://github.com/Topl/protobuf-specs/) from which language specific denitions will be generated. There are a few caveats that must be noted.

## oneof

To denote a specific type given by Protobuf's `oneof`, the data types in this specification will make use of the following syntax: `ParentType[ChildType]`. For example, `Parent[Child1]` denotes the type `Parent` whose oneof-value is of type `Child1` given the following Protobuf definition:

```
message Parent {
  oneof sealed_value {
    Child1 c1 = 1;
    Child2 c2 = 2;
    ...
  }
}
```

## Collection Types

A few collection types are not defined in the protobuf specs:

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

Most implementation types will have commonly used equivalents of these. The most appropriate equivalent should be used. Because some implementation languages will provide collection types that take type parameters, the declarations include type parameters for these.