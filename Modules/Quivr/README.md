# Quivr (v0.1)

The Quivr library.

* Contract builder
    * Native Contracts
    * Proxy Contracts
* Propositions
    * Build Proposition Templates
    * Determine if a Template has any quantified/unbound values
    * Transform a template by binding a quantified value (placeholder) to an actual value
    * Convert a template with no remaining unbound values to a proposition instance
* Proofs
    * Create empty proof
    * Prove a proof
        * Add signature for signature proof
        * hash lock?
        * Compositional proofs
    * Determine if the proof is sufficient to satisfy a proposition