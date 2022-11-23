# Glossary

### Slot

A Topl blockchain network measures times in units called _slots_. At most one node is authorized to create a block in
each slot.

The duration of a slot is currently determined by the configuration of bifrost nodes in the chain. Node that are
configured with a different value will not consider the blocks created by other nodes to be valid and other nodes will
not consider blocks created by the misconfigured node to be valid.

Slots are identified by slot numbers. A slot number is a non-negative integer. The slot number of the Genesis block is
zero. The timestamp of the Genesis block is the start of slot 0. From the configured duration of slots and the timestamp
of the genesis block, the [start and end time of each slot can be computed](../Modules/Util/NodeUtils/#class-slotutil).