---
sidebar_position: 3
---

# Joining Testnet

After installing `canined`. You can join the testnet by following these steps:

```sh
canined init <alias> --chain-id=<chain-id>
```

:::note

`chain-id` for testnet is currently `lupulella-2`.

:::

Then we want to replace our generated genesis file with the one used to start the network. We also need to set our peers
and seeds.

For an updated list of peers & seeds, please
check [this page](https://github.com/JackalLabs/jackal-chain-assets/blob/main/testnet/seeds.md).

```sh
wget -O ~/.canine/config/genesis.json https://raw.githubusercontent.com/JackalLabs/jackal-chain-assets/main/testnet/genesis.json

export SEEDS="84f520678ef59ea02f942fa6323ec562ca5a3249@45.79.161.178:26656,cecc087977336da1e9ccd2c50097cd9e7d5e1874@141.95.33.39:26656"
sed -i.bak -e "s/^seeds *=.*/seeds = \"$SEEDS\"/" ~/.canine/config/config.toml
```

As a validator, you'll need to set a minimum gas price like so:

```sh
GAS="0.002ujkl"
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"$GAS\"/" $HOME/.canine/config/app.toml
```
