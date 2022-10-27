---
sidebar_position: 4
---
# Joining Mainnet

:::info

Mainnet goes live on October 26th 2022! If you are here before that, these docs will not work!

:::

After installing `canined`. You can join the mainnet by following these steps:

```sh
canined init <alias> --chain-id=<chain-id>
```

:::note

`chain-id` for mainnet is currently `jackal-1`.

:::

Then we want to replace our generated genesis file with the one used to start the network.

```sh
wget -O ~/.canine/config/genesis.json https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json
```

As a validator, you'll need to set a minimum gas price like so:
```sh
GAS="0.002ujkl"
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"$GAS\"/" $HOME/.canine/config/app.toml
```