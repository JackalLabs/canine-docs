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

SEEDS=$(wget https://raw.githubusercontent.com/JackalLabs/canine-mainnet-genesis/master/genesis/seeds.txt -q -O -)
PEERS=`curl -sL https://raw.githubusercontent.com/JackalLabs/canine-mainnet-genesis/master/genesis/peers.txt | sort -R | head -n $PEERCOUNT | awk '{print $1}' | paste -s -d, -`
GAS="0.002ujkl"

sed -i.bak -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.canine/config/config.toml
```
