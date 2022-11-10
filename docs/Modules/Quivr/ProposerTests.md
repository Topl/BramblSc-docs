# Proposer Tests

## Propose Height Range Tests

### Test Cases

* General Case
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number.
    * `max` is an arbitrary number, greater than `min`.
  * **Then**:
    * Produce a Height Lock Proposition that encompasses the provided data.
* Smallest Window
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number.
    * `max` is the same as `min`.
  * **Then**:
    * Produce a Height Lock Proposition that encompasses the provided data.
* Negative Window
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number.
    * `max` is less than `min`.
  * **Then**:
    * Errors occur: 
      * "max must be greater or equal to min."
* Negative Values. *Only for untyped languages*
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary negative number.
    * `max` is an arbitrary negative number, greater than `min`.
  * **Then**:
    * Errors occur:
      * "The parameter min is negative when required to be positive."
      * "The parameter max is negative when required to be positive."
* Parameters Missing. *Only for untyped languages*
  * **Given**:  
  *None*
  * **Then**:
    * Errors occur: 
      * "The required parameter chain is missing."
      * "The required parameter min is missing."
      * "The required parameter max is missing."

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
proposition = Quivr.Proposer.proposeHeight(chain, min, max)
```

```json
[
  {
    "description": "General Case",
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 12
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
            "chain": "test",
            "min": 8,
            "max": 12
        }
      }
    },
    "errors": []
  },
  {
    "description": "Smallest Window",
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 8
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 8
        }
      }
    },
    "errors": []
  },
  {
    "description": "Negative Window",
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 7
    },
    "outputs": {},
    "errors": [
      {"msg": "max must be greater or equal to min."}
    ]
  },
  {
    "description": "Negative Values. *Only for untyped languages*",
    "inputs": {
      "chain": "test",
      "min": -10,
      "max": -11
    },
    "outputs": {},
    "errors": [
      {"msg": "The parameter min is negative when required to be positive."},
      {"msg": "The parameter max is negative when required to be positive."}
    ]
  },
  {
    "description": "Parameters Missing. *Only for untyped languages*",
    "inputs": {},
    "outputs": {},
    "errors": [
      {"msg": "The required parameter chain is missing."},
      {"msg": "The required parameter min is missing."},
      {"msg": "The required parameter max is missing."}
    ]
  }
]
```

