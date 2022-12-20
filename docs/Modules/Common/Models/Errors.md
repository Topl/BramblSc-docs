# Errors

> TODO: Link to Error models in protobuf

The documentation in this page compliments the protobuf specification found here.

## Wallet

### Credentialler Errors

Tag: CR

#### CR001: KnownIdentifierUnknown

A KnownIdentifier is not recognized in the Wallet.

Sequence: 001
Name: KnownIdentifierUnknown
Parameters: KnownIdentifier

#### CR002: TransactionMalformed

Transaction is not formed correctly

Sequence: 002
Name: TransactionMalformed
Parameters: IoTransaction

#### CR003: ValidationError

Transaction is not satisfactorily proven.

Sequence: 002
Name: ValidationError
Parameters: List[QuivrRuntimeError]