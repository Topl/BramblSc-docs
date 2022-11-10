# Prover Tests

## Bind Proof Tests

### Test Cases

* General Case
  * **Given**:
    * `tag` is a single byte.
    * `message` is an arbitrary sequence of bytes.
  * **Then**:
    * Produce a blake2b256 hash of the message followed by the tag.
* Tag is not Exactly One Byte
  * **Given**:
    * `tag` is greater than a single byte.
    * `message` is an arbitrary sequence of bytes.
  * **Then**:
    * Errors occur:
      * "tag is invalid. The value must be a single byte."
* Parameters Missing. *Only for untyped languages*
  * **Given**:  
  *None*
  * **Then**:
    * Errors occur:
      * "The required parameter tag is missing."
      * "The required parameter message is missing."

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
binding = Quivr.Prover.bind(tag, message)
```

```json
[
  {
    "description": "General Case",
    "inputs": {
      "tag": -1,
      "message": "abcde"
    },
    "outputs": {
      "binding": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
    },
    "errors": []
  },
  {
    "description": "Tag is not Exactly One Byte",
    "inputs": {
      "tag": 9999999,
      "message": "abcde"
    },
    "outputs": {},
    "errors": [
      {"msg": "tag is invalid. The value must be a single byte."}
    ]
  },
  {
    "description": "Parameters Missing. *Only for untyped languages*",
    "inputs": {},
    "outputs": {},
    "errors": [
      {"msg": "The required parameter tag is missing."},
      {"msg": "The required parameter message is missing."}
    ]
  }
]
```

## Prove Height Range Tests

### Test Cases

* General Case
  * **Given**:
    * `message` is an arbitrary sequence of bytes.
  * **Then**:
    * Produce a Height Lock Proof that encompasses the transaction binding.
* Parameters Missing. *Only for untyped languages*
  * **Given**:  
  *None*
  * **Then**:
    * Errors occur:
      * "The required parameter message is missing."

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
proof = Quivr.Proposer.proveHeight(msg)
```

> Note: The following is assuming that the tag for Height Lock is given by the byte -1.

```json
[
  {
    "description": "General Case",
    "inputs": {
      "message": "abcde"
    },
    "outputs": {
      "proof": {
        "contextualHeightLock": {},
        "transactionBind": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
      }
    },
    "errors": []
  },
  {
    "description": "Parameters Missing. *Only for untyped languages*",
    "inputs": {},
    "outputs": {},
    "errors": [
      {"msg": "The required parameter message is missing."}
    ]
  }
]
```