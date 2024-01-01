---
sidebar_position: 1
---

# Command Lind Interface (CLI)
The CLI is a tool for both users and developers to interact with the Jackal Protocol without a traditional GUI.

## Download and Install
Head to the [Releases](https://github.com/JackalLabs/canine-chain/releases) page and download the binary for your system.

## Setting up an Account
You can create a new account like this:
```sh
canined keys add {account name}
```
Or you can recover an account with a seed phrase like this:
```sh
canined keys add {account name} --recover
```

## Buying Storage
Buying 1TB for a single month:
```sh
canined tx storage buy-storage $(canined keys show {account name} -a) 720h 1099511627776 ujkl --from {account name} --gas-prices=0.02ujkl
```
In this case, `720h` is 720 hours, or one month, you can specify the hours you wish to buy storage for here. `1099511627776` is how many bytes you wish to purchase, this value is 1TiB, you can increase this or decrease this as you please.