---
sidebar_position: 2
---
# jklmint Module

## jklmint
The Jackal Mint module is a replacement for the cosmos-sdk module: [Mint](https://github.com/cosmos/cosmos-sdk/blob/main/x/mint/spec/README.md). The key differences between this and the pre-existing minting module are that jklmint does not adjust inflation based on the rate of bonded tokens. At genesis, the jklmint module prints 10 JKL per block and distribute it to both the storage module and the default distribution module.


