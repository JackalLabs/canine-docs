---
sidebar_position: 2
---
# Blockchain Modules
As the Jackal Protocol is built using Tendermint and the Cosmos SDK, we are able to create an ecosystem of __modules__. The Protocol uses some of the basic modules needed for interacting with the Cosmos Ecosystem but have also created customized our own modules optimized for the needs of Jackal. 

__JACKAL PROTOCOL IMAGE__

## jklmint
The Jackal Mint module is a replacement for the cosmos-sdk module: [Mint](https://github.com/cosmos/cosmos-sdk/blob/main/x/mint/spec/README.md). The key differences between this and the pre-existing minting module are that jklmint does not adjust inflation based on rate of bonded tokens. At genesis, the jklmint module prints 10 JKL per block and distribute it to both the storage module and the default distribution module.

__mint image__

## lp
The lp module allows for a native automated market maker (AMM) liquidity pools (LP) to be built directly into the Jackal Blockchain. This allows for local prices for payment mechanisms without the need for oracles, along with the ability to swap tokens directly from the Jackal dashboard or the Jackal Swap service. 

__swap images__

## rns
The rns module is a name service that allows users to manage human-readable names when interacting with the Jackal Blockchain. Users can register names, list names for sale, buy names on the marketplace, and place/accept bids from other users on their names.

__rns images__

## wasm
Jackal incorporates the CosmWasm smart contracting platform built for the Cosmos Ecosystem. The primary programing language used in this module is Rust for building secure and multichain smart contracts, yet any language that can be compiled into WASM can be supported as they become available. 

## storage
Jackal Storage functions by a Proof-of-Storage algorithm we call Proof-of-Persistence. The Jackal Proof-of-Persistence (JPOP) works through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. Miners, or as well call them, Storage Providers, are responsible for posting Merkle Proofs within a challenge window determined by the blockchain. These challenge windows require the miner to post the raw data chunk of data corresponding to the index of the challenge window alongside the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. These challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle.

If a Storage Provider successfully posts a Merkle Proof within the challenge window for the contract and the data is verified by the Validators to be valid Merkle Proofs for the challenge index, the Storage Provider is paid out. Storage Provider rewards are proportional to the file size the contract is associated with relative to every other active contract on the network. If a Storage Provider fails to provide a valid proof within the allotted timeframe, the contract is struck with a missed proof. After (X) missed proofs, the contract is burned, and the user is alerted the next time they query the contract. For every contract burned through missing proofs, the Storage Provider is struck with a penalty that remains on their record for a period of time adjustable through governance.

__Storage Images__

### Interaction Outline
A user first sends a file to an available Storage Provider. A list of Storage Providers can be found on the blockchain, and providers can deny any incoming request if they wish not to store new files. The Storage Provider, after receiving the entire file, keeps that file in memory and posts a contract to the blockchain. If the contract is not signed by the sender in X blocks (configurable by the Storage Provider), then the file is removed from memory, and the contract is burned. However, if the contract is signed by the user within the given blocks, the file is committed to the Storage Provider's hard storage, and the challenge windows start being created for the now active contract.

## dsig

The dsig module is a digital signature service that allows users to collect signatures from multiple users who are registered on the Jackal Blockchain. Users can create 'forms' associated with a unique file stored on Jackal and can add signees (users) to collect their signatures. The signees have the following options to respond: Approve, Deny, Abstain, and No Response (Default). The form can execute a custom function after all users have voted to Approve the form.

__dsig images__

## filetree
__TODO: Description__

__TODO: Visual Aid__
