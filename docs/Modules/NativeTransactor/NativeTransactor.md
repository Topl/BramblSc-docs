# Native Transaction Builder

This page describes the Brambl SDK's transaction builder. This is the portion of the SDK that is responsible for
building Topl unproven transactions.

This page is organized into two parts.

* [The first part](#transaction-builder-data-flow) describes the data flow that the transaction builder supports for
  building unproven transactions.
* [The second part](#structure-of-the-unproven-transaction-builder) describes the structure of the transaction builder
  in detail.

## Transaction Builder Data Flow

The following diagram shows the typical data flow that will be used to build transactions using the
transaction builder. The flow of the diagram is from left to right.

![Native Transaction Builder Flow](./transaction_builder.drawio.png)

In the following discussion, we describe the inputs to unproven transaction constructor that produces
an unproven `IoTransaction`.

### Creating a Schedule

A transaction's schedule determines the earliest and latest slot number that a transaction may be incorporated into a
block. Slot numbers are not meaningful outside the blockchain network. Users and applications that care about when
transactions are incorporated into a block will generally want to express those times as timestamps. For this reason,
the first step in creating a schedule is to pick values for the earliest and latest times that the transaction is valid.

#### Selecting earliest and latest times a transaction may be included in a block

The earliest and latest valid times can be represented as [Unix timestamps](https://www.unixtimestamp.com/). Both values
must be provided. For the many cases where we want a transaction to be as soon as possible, a good value for the
earliest valid time is the current time. Our API provides the current time as a default for earliest valid time.
Choosing a value for the latest valid time is a more complicated.

If the transaction author does not care about the latest time that a transaction is valid for inclusion in a block, then
a reasonable default would be 2<sup>63</sup>-1 (9,223,372,036,854,775,807), which is the largest value that can be
represented as a Unix timestamp. However, this is not recommended.

Topl recommends that transaction authors _do_ care about the latest valid time. The reason for this is that there is no
way to determine that a request to add a transaction to the blockchain is successful until the transaction appears on
the blockchain. If the end of time is provided as the value of the transaction's latest valid time to be added, then
clients will have to wait until the end of time before deciding that a request add a transaction to failed.

[//]: # (TODO: update with more guidance on a default value for lastest valid time)
For now, the recommendation is to set the latest valid time to 8 minutes after the current time. In the future there may
be a better way to determine a default value for latest valid time.

#### Converting Unix timestamps to slot numbers

Once we have Unix timestamps specifying the earliest and latest times that the transaction will be valid for including
in a block, the next step is to convert those times into slot numbers. Slot numbers are the way that time is tracked by
Bifrost nodes.

To convert timestamps to slot numbers we use the
method/function [timestampToSlotNumber](Util/NodeUtils#timestamptoslotnumber).

Once we have the two slot numbers and are given a Unix timestamp value, we use the three values to construct a
`Schedule` object.

### Creating Datums.IoTx

Once we have a constructed a [`Schedule`](#creating-a-schedule) and obtain an array of `references` and
another array of bytes (up to 64 bytes) representing metadata, we can construct the the transaction datum `Datums.IoTx`.

[//]: # (TODO explain references)

### Creating Datums.UnspentOutput

Once we have an array of `references` and
another array of bytes (up to 64 bytes) representing metadata, we can construct the the output datum `Datums.UnspentOutput`.

[//]: # (TODO explain references)

### Creating the Outputs

Building the outputs for a transaction begins by creating an empty `List[UnspentOutput]`. After we have appended one or 
more outputs to the list, we can use the list as one of the inputs to construct an unproven `IoTransaction`.

To construct an `UnspentOutput` object, we begin with a quantity. To create a quantity of tokens, we use the quantity to
construct a `Values.Token` object.

We then use the `Values.Token` object and the `Address` to create an `UnspentOutput` object. Once created, we can append
the `UnspentOutput` to the list of `UnspentOutput` objects we are building.

See [Creating Datums.UnspentOutput](#creating-datumsunspentoutput) for more information.

[//]: # (TODO explain blobsOpt)

### Creating the Attestation

[//]: # (TODO once settled)

### Creating Datums.SpentOutput

Once we have an array of `references` and
another array of bytes (up to 64 bytes) representing metadata, we can construct the the input datum `Datums.SpentOutput`.

[//]: # (TODO explain references)

### Creating the Inputs

Building the inputs (unproven `SpentOutput`) for an unproven transaction begins by creating `List[SpentOutput]` where each 
`SpentOutput` is unproven (see [`SpentOutput`](#class-spentoutput)).

For each given `Txo`, once we have an unproven `Attestation`, a reference (`Box.Id`), value (`Box.Value`), datum (`Datums.SpentOutput`), and `locksOpt` we can construct its corresponding unproven `SpentOutput`. 

Both `Box.Id` and `Box.Value` can be retrieved from a `Txo`. See [Creating the Attestation](#creating-the-attestation) and [Creating Datums.SpentOutput](#creating-datumsspentoutput) for more information.

[//]: # (TODO explain locksOpt)

### Creating the Unproven IoTransaction

Once we have `Datums.IoTx`, `List[SpentInput]`, `List[UnspentOutput]` and `outputsOpt`, we construct the unproven IoTransaction.

[//]: # (TODO explain outputsOpt)

## Structure of the Unproven Transaction Builder

Below, we describe the classes and interfaces that the Bramble SDK provides for building transactions. The
descriptions are in a language-neutral form. To be language-neutral,
we [follow a set of assumptions](../Overview/Assumptions)

Here are the interfaces and classes that are described on this page:

* [Attestation](#class-attestation)
* [Datums.IoTx](#class-datumsiotx)
* [Datums.SpentOutput](#class-datumsspentoutput)
* [Datums.UnspentOutput](#class-datumsunspentoutput)
* [IoTransaction](#class-iotransaction)
* [Schedule](#class-schedule)
* [Signable](#interface-signable)
* [SpentOutput](#class-spentoutput)
* [UnspentOutput](#class-unspentoutput)

## Interface Signable

[//]: # (TODO: Sean please add missing details)
This interface is responsible for caching various information from a BiFrost node.

This interface contains just one method/function.

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on this object.

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Implementation Note

Implementations of this for composite objects may call the `signableBytes` method of their constituent objects. For
example, The implementation of the method for transactions will call the `signableBytes` methods of a transaction's
inputs and outputs.

Implementing this method to return an array of bytes may result in more effort spent copying that necessary. For this
reason, you may consider implementing this to return a smarter return type that will avoid most of the unnecessary
copying.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

The exact tests used for this method will vary with the implementation, but should include a test to verify that if two
objects implement `Signable` and compare as equal, then the `signableBytes` methods of both objects returns identical
results.

## Class Schedule

**Implements** `Signable`

### Constructor

#### Signature(s)

```
Schedule(minValidSlot: uint64, maxValidSlot: uint64, timestamp: int64)
```

#### Description

Construct a `Schedule` object.

#### Parameters

* minValidSlot — the earliest slot that the containing transaction is valid for inclusion in a block.
* maxValidSlot — the latest slot that the containing transaction is valid for inclusion in a block.
* timestamp — A timestamp provided by the client that is stored as part of the enclosing transaction's schedule, but is
  not otherwise used by the Topl protocol.

#### Returns

The constructed `Schedule` object.

#### Errors

The errors that the method/function will produce as a result of a failed asynchronous query initiated by the constructor
include:

* minValidSlot > maxValidSlot

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/schedule_test)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

the testing procedure for this method/functions
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/schedule_test)

## Class UnspentOutput

**Implements** `Signable`

### Constructor

#### Signature(s)

```
UnspentOutput(address: Address, value: Box.Value, 
      datum: Datums.Output, blobsOpt: ???)
```

#### Description

Construct an `UnspentOutput` object.

#### Parameters

* `address` — the address that the output will be associated with.
* `value` — The value that will be in the box that is created from this output.
* `datum` - A object containing output datum. See [Datums.UnspentOutput](#class-datumsunspentoutput).
* `blobsOpt` — array of ???? [//]: # (TODO)

#### Returns

The constructed `UnspentOutput` object.

#### Errors

_None expected_

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/unspent_output_test)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

the testing procedure for this method/functions
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/unspent_output_test)

## Class IoTransaction

**Implements** `Signable`

### Constructor

#### Signature(s)

```
IoTransaction(inputs: List[SpentOutput], outputs: List[UnspentOutput],
             datum: Datums.IoTx, outputsOpt: ???)
```

#### Description

Construct an unproven `IoTransaction` object.

#### Parameters

* `inputs` — A list of unproven `SpentOutput` objects
* `outputs` — A list of `UnspentOutput` objects
* `datum` — A object containing schedule and other datum for this transaction. See [Datums.IoTx](#class-datumsiotx).
* `outputsOpt` — array of ???? [//]: # (TODO)

#### Returns

The constructed unproven `IoTransaction` object.

#### Errors

_None expected_

#### Testing Procedure

The testing procedure for the constructor
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/UnprovenIoTx_test)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

the testing procedure for this method/functions
is [described on a separate page](NativeTransactor/NativeTransactor%20Tests/UnprovenIoTx_test)

## Class Attestation

An instance of this class represents an Attestation. An attestation contains information indicating the spending logic. It includes references to the spending condition (i.e., the `lock`), values used to prove the spending condition (the `responses`) and optionally a list of propositions for which the supplied `responses` map to (`known`). 

An unproven Attestation is one where the `responses` do not satisfy the `lock`. 

**Implements** `Signable`

### Constructor

#### Signature(s)

```
Attestation(lock: Lock, known: List[Option[Proposition]],
             responses: List[Option[Proof]])
```

#### Description

Construct an `Attestation` object.

#### Parameters

* `lock` — An object that encodes the  image that exposes the evidences of the propositions within the associated predicate.
* `known` — An optional list of optional proofs. The length must be equal to the length of the challenges within `lock`. Defaults to a list filled with implementation specific values that denotes None.
* `responses` — An optional list of optional proofs. The length must be equal to the length of the challenges within `lock`. Defaults to a list filled with implementation specific values that denotes None. If not supplied, an unproven Attestation will be created.

#### Returns

The constructed `Attestation` object.

#### Errors

* The length of the challenges within `lock`, `known` and `responses` are not all equal.

[//]: # (TODO: Have a separate section explaining "Lock")

#### Testing Procedure

[//]: # (TODO)
The testing procedure for the constructor
is [described on a separate page](#)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for this method/functions
is [described on a separate page](#)

## Class SpentOutput

An instance of this class represents a SpentOutput. A SpentOutput are the inputs to a [IoTransaction](#class-iotransaction).


An unproven SpentOutput is one where the `attestation` is unproven.

**Implements** `Signable`

### Constructor

#### Signature(s)

```
SpentOutput(reference: Box.Id, value: Box.Value, attestation: Attestation,
             datum: Datums.Output, metadata: Option[Array[Byte]]
             locksOpt: ???)
```

#### Description

Construct an unproven `SpentOutput` object.

#### Parameters

* `reference` — The ID of the box for which we want to spend from.
* `value` — The value that is in the box that is referenced by `reference`.
* `attestation` — The attestation required to spend this output.
* `datum` — A object containing input datum. See [Datums.SpentOutput](#class-datumsspentoutput).
* `locksOpt` — array of ???? [//]: # (TODO)

#### Returns

The constructed unproven `SpentOutput` object.

#### Errors

_None expected_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for the constructor
is [described on a separate page](#)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for this method/functions
is [described on a separate page](#)

## Class Datums.IoTx

**Implements** `Signable`

### Constructor

#### Signature(s)

```
Datums.IoTx(schedule: Schedule, references: List[???],
             metadata: Array[Byte])
```

#### Description

Construct a `Datums.IoTx` object.

#### Parameters

* `schedule` — An object representing when a transaction can be accepted onto the chain.
* `references` — array of ???? [//]: # (TODO)
* `metadata` — array of bytes (up to 64 bytes).

#### Returns

The constructed `Datums.IoTx` object.

#### Errors

_None expected_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for the constructor
is [described on a separate page](#)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for this method/functions
is [described on a separate page](#)

## Class Datums.SpentOutput

**Implements** `Signable`

### Constructor

#### Signature(s)

```
Datums.SpentOutput(references: List[???], metadata: Array[Byte])
```

#### Description

Construct a `Datums.SpentOutput` object.

#### Parameters

* `references` — array of ???? [//]: # (TODO)
* `metadata` — array of bytes (up to 64 bytes).

#### Returns

The constructed `Datums.SpentOutput` object.

#### Errors

_None expected_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for the constructor
is [described on a separate page](#)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for this method/functions
is [described on a separate page](#)

## Class Datums.UnspentOutput

**Implements** `Signable`

### Constructor

#### Signature(s)

```
Datums.UnspentOutput(references: List[???], metadata: Array[Byte])
```

#### Description

Construct a `Datums.UnspentOutput` object.

#### Parameters

* `references` — array of ???? [//]: # (TODO)
* `metadata` — array of bytes (up to 64 bytes).

#### Returns

The constructed `Datums.UnspentOutput` object.

#### Errors

_None expected_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for the constructor
is [described on a separate page](#)

### signableBytes

#### Signature(s)

```
signableBytes() returns co.topl.proto.node.SignableBytes
```

#### Description

Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and
signatures based on the contents of this object.

[//]: # (Sean, Please add the specifics of the signable bytes)

#### Parameters

_No Parameters_

#### Returns

The array of bytes.

#### Errors

The errors that the method/function will produce include:

_None_

#### Testing Procedure

[//]: # (TODO)
The testing procedure for this method/functions
is [described on a separate page](#)