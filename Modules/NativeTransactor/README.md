# Native Transactor (v0.1)

Transaction builder.

* Create unproven Transaction inputs (unproven STxO)
    * by direct fields
    * by boxId and value (builder) 
* Create Transaction outputs (UTxO)
    * by direct fields
    * specify contract instead of address (builder)
    * specify indices to build contract instead of address (builder) 
* Create Unproven Transaction
    * From direct unproven inputs and outputs 
    * From convenience functions (i.e, builder)
        * Transput; quantity&asset requirements
        * By use case:
            * native coin transfers
            * asset minting
            * policy registration
* Create proven transaction from unproven transaction + proofs
* datum collector
    * era
    * epoch
    * header
    * transaction
    * prev_output
    * input
    * output