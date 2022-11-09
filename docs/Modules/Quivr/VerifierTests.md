# Verifier Tests

## Verify Height Range Tests

### Test Cases

> TODO: In english detail the test cases

### Test Vectors

The test vectors represent the inputs and outputs(for the test scenarios above) of the following language-agnostic pseudo code:

```
isValid = Quivr.Verifier.verifyHeight(proposition, proof, context)
```

```json
[
  {
    "inputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 12
        }
      },
      "proof": {
        "contextualHeightLock": {},
        "transactionBind": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
      },
      "context": {
        "signableBytes": "abcde",
        "heightOf": {
          "test": 10
        }
      }
    },
    "outputs": {
      "result": true
    },
    "errors": []
  },
  {
    "inputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 9
        }
      },
      "proof": {
        "contextualHeightLock": {},
        "transactionBind": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
      },
      "context": {
        "signableBytes": "abcde",
        "heightOf": {
          "test": 10
        }
      }
    },
    "outputs": {
      "result": false
    },
    "errors": []
  },
  {
    "inputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 12
        }
      },
      "proof": {
        "contextualHeightLock": {},
        "transactionBind": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
      },
      "context": {
        "signableBytes": "wxyz",
        "heightOf": {
          "test": 10
        }
      }
    },
    "outputs": {
      "result": true
    },
    "errors": []
  },
  {
    "inputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 12
        }
      },
      "proof": {
        "contextualHeightLock": {},
        "transactionBind": "-74-6956-92-11155-41-41118-973436881147712311355-61119-614155-68-50-87-46113-2311250117"
      },
      "context": {
        "signableBytes": "abcde",
        "heightOf": {
          "test-2": 10
        }
      }
    },
    "outputs": {
      "result": false
    },
    "errors": []
  }
]
```