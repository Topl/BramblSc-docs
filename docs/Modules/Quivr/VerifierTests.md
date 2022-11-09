# Verifier Tests

## Verify Height Range Tests

### Test Cases

* General Case
  * **Given**:
    * `proposition` is a Height Lock Proposition denoting a valid range of 8-12 from chain "test".
    * `proof` is a Height Lock Proof whose binding was generated from the signable bytes of "abcde"
    * `context` is an object providing signable bytes "abcde" and height 10 for chain "test"
  * **Then**:
    * `true` is returned.
* Height Not Satisfied
  * **Given**:
    * `proposition` is a Height Lock Proposition denoting a valid range of 8-9 from chain "test".
    * `proof` is a Height Lock Proof whose binding was generated from the signable bytes of "abcde"
    * `context` is an object providing signable bytes "abcde" and height 10 for chain "test"
  * **Then**:
    * `false` is returned.
* Transaction Binding Invalid
  * **Given**:
    * `proposition` is a Height Lock Proposition denoting a valid range of 8-12 from chain "test".
    * `proof` is a Height Lock Proof whose binding was generated from the signable bytes of "abcde"
    * `context` is an object providing signable bytes "wxyz" and height 10 for chain "test"
  * **Then**:
    * `false` is returned.
* Context Does Not Contain a Height for Specified Chain
  * **Given**:
    * `proposition` is a Height Lock Proposition denoting a valid range of 8-12 from chain "test".
    * `proof` is a Height Lock Proof whose binding was generated from the signable bytes of "abcde"
    * `context` is an object providing signable bytes "wxyz" and height 10 for chain "test-2"
  * **Then**:
    * `false` is returned.
* Parameters Missing
  * **Given**:  
  *None*
  * **Then**:
    * Errors occur:
      * "The required parameter proposition is missing."
      * "The required parameter proof is missing."
      * "The required parameter context is missing."

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
  },
  {
    "inputs": {},
    "outputs": {},
    "errors": [
      {"msg": "The required parameter proposition is missing."},
      {"msg": "The required parameter proof is missing."},
      {"msg": "The required parameter context is missing."}
    ]
  }
]
```