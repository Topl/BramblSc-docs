# Proposer Tests

## Propose Height Range Tests

### Test Cases

* General Case
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number in the valid range.
    * `max` is an arbitrary number in the valid range, greater than `min`.
  * **Then**:
    * Produce a Height Lock Proposition that encompasses the provided data.
* Widest Window
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is the minimum possible value.
    * `max` is the maximum possible value.
  * **Then**:
    * Produce a Height Lock Proposition that encompasses the provided data.
* Smallest Window
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number in the valid range.
    * `max` is equal to `min`.
  * **Then**:
    * Produce a Height Lock Proposition that encompasses the provided data.
* Values out of Range
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is 1 less than the allowable range.
    * `max` is 1 more than the allowable range.
  * **Then**:
    * Errors occur:
      * "min is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."
      * "max is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."
* Negative Window
  * **Given**:
    * `chain` is an arbitrary string representing a label in the verification context.
    * `min` is an arbitrary number in the valid range.
    * `max` is less than `min`.
  * **Then**:
    * Errors occur: 
      * "max must be greater or equal to min."
* Parameters Missing
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
    "inputs": {
      "chain": "test",
      "min": 1,
      "max": 9223372036854775807
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 1,
          "max": 9223372036854775807
        }
      }
    },
    "errors": []
  },
  {
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
    "inputs": {
      "chain": "test",
      "min": 0,
      "max": 9223372036854775808
    },
    "outputs": {},
    "errors": [
      {"msg": "min is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."},
      {"msg": "max is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."}
    ]
  },
  {
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

