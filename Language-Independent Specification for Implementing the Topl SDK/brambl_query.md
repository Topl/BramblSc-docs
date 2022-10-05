# Bramble Query Functions

## getTransactionById
### Signature(s)
```
  getTransaction(id: models.TransactionId, timeoutMillis: uint64, confidenceFactor: double) returns TransactionReceipt
```
### Description
Retrieve a transaction with the specified `id` from the configured Genus service. This returns its result when there is a
transaction present in the genus service with the specified id and the confidence factor of the block that contains the
transaction is greater than or equal to the value of the `confidenceFactor` parameter.

This method/function will wait no longer than the specified number of milliseconds to return. When the method/function
has waited this amount of time and there is no result to be returned, the method produces an error.

### Parameters
* `id` the ID of the transaction to find.
* `timeoutMillis` The maximum number of milliseconds to wait. The default value will be 2000 (2 seconds).
* `confidenceFactor` is 1 minus the probability that a block will be reorged. The default value will be 0.9999999.

### Returns
A transaction receipt that includes the specified transaction and genus-supplied metadata.

### Errors
The errors that the method/function will be able to produce include:
* No properly configured Genus service
* Unable to send request to Genus service
* The Genus service returned an error
* The Genus service returned an unexpected result
* The Genus service did not return a result before the timeout happened

### Testing Procedure

The following testing scenarios are required:

#### Testing Scenarios