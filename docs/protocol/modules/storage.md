---
sidebar_position: 6
---
# storage Module

## storage
Jackal Storage functions by a Proof-of-Storage algorithm we call Proof-of-Persistence. The Jackal Proof-of-Persistence (JPOP) works through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. Miners, or as well call them, Storage Providers, are responsible for posting Merkle Proofs within a challenge window determined by the blockchain. These challenge windows require the miner to post the raw data chunk of data corresponding to the index of the challenge window alongside the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. These challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle.

If a Storage Provider successfully posts a Merkle Proof within the challenge window for the contract and the data is verified by the Validators to be valid Merkle Proofs for the challenge index, the Storage Provider is paid out. Storage Provider rewards are proportional to the file size the contract is associated with relative to every other active contract on the network. If a Storage Provider fails to provide a valid proof within the allotted timeframe, the contract is struck with a missed proof. After (X) missed proofs, the contract is burned, and the user is alerted the next time they query the contract. For every contract burned through missing proofs, the Storage Provider is struck with a penalty that remains on their record for a period of time adjustable through governance.

__Storage Images__

### Interaction Outline
A user first sends a file to an available Storage Provider. A list of Storage Providers can be found on the blockchain, and providers can deny any incoming request if they wish not to store new files. The Storage Provider, after receiving the entire file, keeps that file in memory and posts a contract to the blockchain. If the contract is not signed by the sender in X blocks (configurable by the Storage Provider), then the file is removed from memory, and the contract is burned. However, if the contract is signed by the user within the given blocks, the file is committed to the Storage Provider's hard storage, and the challenge windows start being created for the now active contract.