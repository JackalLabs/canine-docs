---
sidebar_position: 6
---

# JPOP and IDOL Modules

The Jackal Protocol incorporates two crucial algorithms for decentralized storage: Jackal Proof-of-Persistence (JPOP) and Internal Detection Of Loss (IDOL) protocols. This document provides an overview of these algorithms, their functionalities, and their interaction with users and Storage Providers.

## Jackal Proof-of-Persistence (JPOP)

JPOP is a Proof-of-Storage algorithm that governs the relationship between the storage provider and the user. It operates through a series of contracts containing the Merkle Tree root hash of the file and information required to prove ownership. Storage Providers are responsible for posting Merkle Proofs within a challenge window determined by the blockchain.

The challenge windows require miners to post the raw data chunk and the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. The challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle.

## Internal Detection Of Loss (IDOL) Protocol

The IDOL protocol ensures that data remains available and accessible. When a Storage Provider successfully posts a Merkle Proof within the challenge window, and Validators verify the data, the Storage Provider is rewarded. The rewards are proportional to the file size associated with the contract relative to other active contracts on the network.

If a Storage Provider fails to provide a valid proof within the allotted timeframe, the contract is marked with a missed proof. After a certain number of missed proofs, the contract is burned, and the user is alerted the next time they query the contract. Storage Providers receive penalties for every contract burned due to missed proofs, which remain on their record for an adjustable period.

The IDOL protocol comes into play when contracts with missed proofs are moved to a new list where they can be claimed by other providers. The new provider downloads the file from one of the two online providers storing the same file, resumes the contract's proof action, and restores redundancy to 3x.

## Interaction Outline

1. A user sends a file to an available Storage Provider. A list of Storage Providers can be found on the blockchain, and miners can deny any incoming request if they do not want to store new files.
2. After receiving the entire file, the Storage Provider keeps the file in memory and posts a contract to the blockchain.
3. If the contract is not signed by the sender within a certain number of blocks (configurable by the Storage Provider), the file is removed from memory, and the contract is burned.
4. If the contract is signed by the user within the given number of blocks, the file is committed to the Storage Provider's hard storage, and the challenge windows start being created for the now active contract.

## Client Query Commands

The client query commands enable users to interact with and query the storage state. Examples of these commands include:

- `list-active-deals`
- `show-active-deals`
- `list-miners`
- `show-miners`
- `list-contracts`
- `show-contracts`
- `find-file`
- `freespace`
- `get-client-free-space`
- `list-pay-blocks`
- `show-pay-blocks`
- `list-strays`
- `show-strays`
- `params`
- `storage-payment-info`

## Transactions

The transaction commands allow users to interact with the storage module. Examples of these commands include:

- `init-miner`
- `set-miner-ip`
- `set-miner-totalspace`
- `sign-contract`
- `post-contract`
- `postproof`
- `buy-storage`
- `cancel-contract`
- `upgrade-storage`

By implementing the JPOP and IDOL protocols, the Jackal Protocol ensures secure, efficient, and reliable decentralized storage management. These protocols, along with the provided client query commands and transactions, enable users and Storage Providers to interact with the Jackal storage ecosystem seamlessly.

Please refer to the respective command documentation for detailed usage and parameters. The Jackal Protocol continues to evolve, and as new features are added, updates to this documentation will be provided accordingly.
