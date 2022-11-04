# Verifier 

Functions related to verifying if a Proof satisfies a Proposition.

## Verify Height Lock

### Signature

` verifyHeight(proposition: PropositionHeightLock, proof: ProofHeightLock) => ((ctx: EvaluationContext) => Boolean) `

* Parameters
  * `proposition`  
  The Height Lock Proposition.
    * Type: `PropositionHeightLock`
    * Required: true
  * `proof`  
  The Height Lock Proof.
    * Type: `ProofHeightLock`
    * Required: true
* Return  
A function to verify the Height Lock Proof against the Height Lock Proposition given an evaluation context.
  * Parameters
    * `ctx`  
    A context to verify the Proposition and Proof against. It provides additional contextual information to the verifier.
      * Type: `EvaluationContext`
      * Required: true
  * Return  
  A flag indicating if the proof is verified.
    * Type: `bool`

### Description

Verify that a given Height Lock Proof satisfies the given Height Lock Proposition and context. In order for the Height Lock to be satisfied, the proof's binding must be verified as well as the proposition's desired height.

![diagram](./assets/Verifier_verifyHeight.png)

### Test Vectors

The test vectors represent the inputs and outputs of the following language-agnostic pseudo code:

` isValid = Quivr.Verifier.verifyHeight(proposition, proof)(ctx) `

```json
[
  {
    "inputs": {
      "proposition": {
        "min": 8,
        "max": 12
      },
      "proof": {
        "transactionBind": "9c04e724809effa55f85ace7eac6d93a065d850150b9cead708b470e0c0e7ace"
      }
    },
    "outputs": {
      "fn": [
        {
          "inputs": {
            "ctx": {
              "header": {
                "slot": 1,
                "height": 10
              },
              "body": {
                "root": "0"
              },
              "iotx": {
                "signableBytes": "abcde"
              },
              "box": {
                "metadata": "0"
              }
            }
          },
          "outputs": {
            "result": true
          }
        },
        {
          "inputs": {
            "ctx": {
              "header": {
                "slot": 1,
                "height": 10
              },
              "body": {
                "root": "0"
              },
              "iotx": {
                "signableBytes": "1234"
              },
              "box": {
                "metadata": "0"
              }
            }
          },
          "outputs": {
            "result": false
          }
        },
        {
          "inputs": {
            "ctx": {
              "header": {
                "slot": 1,
                "height": 2
              },
              "body": {
                "root": "0"
              },
              "iotx": {
                "signableBytes": "abcde"
              },
              "box": {
                "metadata": "0"
              }
            }
          },
          "outputs": {
            "result": false
          }
        },
        {
          "inputs": {
            "ctx": {
              "header": {
                "slot": 20,
                "height": 10
              },
              "body": {
                "root": "xyz"
              },
              "iotx": {
                "signableBytes": "abcde"
              },
              "box": {
                "metadata": "789"
              }
            }
          },
          "outputs": {
            "result": true
          }
        }
      ]
    }
  }
]
```