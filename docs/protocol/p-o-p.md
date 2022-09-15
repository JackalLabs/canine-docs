---
sidebar_position: 1
---

# Jackal Proof-of-Persistence

Jackal Storage functions by a Proof-of-Storage algorithm we call Proof-of-Persistence. The Jackal Proof-of-Persistence (JPOP) works through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. Storage Providers are responsible for posting Merkle Proofs within a challenge window determined by the blockchain. These challenge windows require the provider to post the raw chunk of data corresponding to the index of the challenge window alongside the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. These challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle.

If a Storage Provider successfully posts a Merkle Proof within the challenge window for the contract and the data is verified by the Validators to be valid Merkle Proofs for the challenge index, the Storage Provider is paid out. Storage Provider rewards are proportional to the file size the contract is associated with relative to every other active contract on the network. If a Storage Provider fails to provide a valid proof within the allotted time frame, the contract is struck with a missed proof. After X missed proofs, the contract is burned, and the User is alerted the next time they query the contract. For every contract burned through missing proofs, the Storage Provider is struck with a penalty that remains on their record for a period of time adjustable through governance.

## Building the Trees
Merkle Trees are a core component of the JPOP mechanism, thus, it is important to outline how these trees are used to create efficient and trustworthy proofs. When saving a file for the first time, providers split each file into many 1kb chunks. Providers must also hash the entire file to create a folder to house every chunk, this is displayed by  the following diagram.

![File Tree](/img/jkl_paper/tree1.png)

These chunks are used as leaves on the Merkle Tree defining each storage contract. Immediately after saving a file to disk, the storage provider builds a tree using each chunk. To create this tree, each chunk is hashed into a respective Hashed Chunk. These chunks are then recursively paired together and hashed until a single root node is created. This is called the Merkle Root, the only piece of data relative to a file that is saved directly on the blockchain itself.

![Merkle Roots](/img/jkl_paper/tree2.png)

In the diagram above, displays how each file is hashed together to create a single root node.

## Proving Data Availability
These nodes are essential as they only require the nodes below them to prove they are part of the tree. This means that we can create a proof claiming a single chunk belongs to the file using the Merkle Root saved on chain. In the following diagram we can see that only the blue nodes are required to build a successful proof. The green nodes represent information that we can generate given the blue nodes. Finally, we can compare the root generated from the proof to the root saved on the chain and determine if the chunk does actually belong to the contract we are proving. This results in small message sizes due to not needing to send the entire file every proof.

![Merkle Roots Graphed](/img/jkl_paper/tree3.png)
