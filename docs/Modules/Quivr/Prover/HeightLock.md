# Height Lock Proof functions generic to all Height Lock Proof

` heightLockProof() => ((ProverContext) => ProofHeightLock) `

Where ProofContext contains the Transaction and a signing key. heightLockProof has no args since a height lock proof has no arguments


motivation behind returning function


a = thresholdProof(
    heightLockProof(),
    hashLockProof(digest)
)

b = heightLockProof()

[a, b].map(_(proverctx))