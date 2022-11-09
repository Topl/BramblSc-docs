# Prover Tests

## Bind Proof Tests

### Test Cases

> TODO: In english detail the test cases

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
binding = Quivr.Prover.bind(tag, message)
```

```json
[
  {
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

> TODO: In english detail the test cases

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
proof = Quivr.Proposer.proveHeight(msg)
```

> Note: The following is assuming that the tag for Height Lock is given by the byte -1.

```json
[
  {
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
  }
]
```