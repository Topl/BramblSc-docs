# Native Transaction Builder

This page describes the Brambl SDK's transaction builder. This is the portion of the SDK that is responsible for
building Topl unproven transactions.

This page is organized into two parts.

* [The first part](#transaction-builder-data-flow) describes the data flow that the transaction builder supports for
  building unproven transactions.
* [The second part](#structure-of-the-transaction-builder) describes the structure of the transaction builder in detail.

## Transaction Builder Data Flow

The following diagram shows the typical data flow that will be used to build transactions using the
transaction builder. The flow of the diagram is from left to right.

![Native Transaction Builder Flow](./transaction_builder.drawio.png)

In the following discussion, we describe the inputs to unproven transaction constructor that produces
an `UnprovenTransaction`.

### Creating a Schedule

### Creating the Outputs

### Creating the Inputs

### Application-Provided Data

## Structure of the Transaction Builder

Below, we describe the classes and interfaces that the Bramble SDK provides for building transactions. The
descriptions are in a language-neutral form. To be language-neutral,
we [follow a set of assumptions](../../Overview/Assumptions)

Here are the interfaces and classes that are described on this page:

* [Schedule](#class-schedule)
* [SignableBytes](#interface-signablebytes)
* [UnprovenTransaction](#class-unproventransaction)

## Interfaces

### Interface SignableBytes

## Classes

### Class Schedule

### Class UnprovenTransaction


