# Storage (v0.1)

Manages data that may need to be persisted and/or indexed.

* Initialize new Key-Value stores when needed
* Store in-mem objects into Key-Value store 
* handles serialization and deserialization
* A keystore for sensitive information (i.e, topl main key) that must be encrypted with a password and different one for non sensitive information (no encryption)
* All data is associated with a network; identified by ID of the network’s BigBang block
* CRUD data at an index/path (via peer interaction manager) or other ID
    * Addresses
    * Assets; BoxId and/or Asset Labels
    * Propositions
    * Proofs
    * Secrets/Keys
    * Group/Series Policies 
    * Contracts (Ck actually stored via Address or BoxId not path since contract can contain many propositions at different paths)
    * Transactions
        * incomplete
        * unproven
        * insufficient
        * satisfied
    * Headers
    * Delegation information