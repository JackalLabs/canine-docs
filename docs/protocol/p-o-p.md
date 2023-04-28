---
sidebar_position: 1
---

# Jackal Proof-of-Persistence Documentation

## Overview
Jackal Storage is powered by a Proof-of-Storage algorithm called Proof-of-Persistence (JPOP). JPOP is designed to ensure the secure and persistent storage of user data through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. In this documentation, we'll explain the core components and processes involved in the Jackal Proof-of-Persistence.

## Building the Trees

Merkle Trees are a core component of the JPOP mechanism, thus, it is important to outline how these trees are used to create efficient and trustworthy proofs. When saving a file for the first time, providers split each file into many 1kb chunks. Providers must also hash the entire file to create a folder to house every chunk, this is displayed by the following diagram.

![File Tree](/img/jkl_paper/tree1.png)

These chunks are used as leaves on the Merkle Tree defining each storage contract. Immediately after saving a file to disk, the storage provider builds a tree using each chunk. To create this tree, each chunk is hashed into a respective Hashed Chunk. These chunks are then recursively paired together and hashed until a single root node is created. This is called the Merkle Root, the only piece of data relative to a file that is saved directly on the blockchain itself.

![Merkle Roots](/img/jkl_paper/tree2.png)

In the diagram above, displays how each file is hashed together to create a single root node.

## Proving Data Availability

These nodes are essential as they only require the nodes below them to prove they are part of the tree. This means that we can create a proof claiming a single chunk belongs to the file using the Merkle Root saved on the chain. In the following diagram, we can see that only the blue nodes are required to build a successful proof. The green nodes represent information that we can generate given the blue nodes. Finally, we can compare the root generated from the proof to the root saved on the chain and determine if the chunk does belong to the contract we are proving. This results in small message sizes due to not needing to send the entire file every proof.

![Merkle Roots Graphed](/img/jkl_paper/tree3.png)
