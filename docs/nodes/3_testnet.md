---
sidebar_position: 3
---
# Joining Testnet

After installing `canined`. You can join the testnet by following these steps:

```sh
canined init <alias> --chain-id=<chain-id>
```

:::note

`chain-id` for testnet is currently `canine-1`.

:::

Then we want to replace our generated genesis file with the one used to start the network. We also need to set our peers and seeds.

```sh
wget -O ~/.canine/config/genesis.json https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json

export SEEDS="052c498dd1cc603b4d32f772035b6a8ca902def3@23.88.73.211:26656,0bdeaaa237b41e3b964a027a110c6ab5bf561177@209.34.206.38:26656,bf7ee27a24e7d5f45653206fbbda8c4b716b74b1@89.58.38.59:26656,9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab@34.201.48.14:26656,bf62b185eef3c185f8ebf81d5cf54bdc064b21d8@85.10.216.157:26656,43e800018a5b52ba119a5410ff45cbeb63182cc8@207.244.127.5:26656,942087a9665e8235f8037d0b9d2a3f8a8c3d562b@104.207.138.181:26656,9d0094606fe8748f1c06b494f7c0cbbd44808ec6@131.153.59.6:26656,6071fe2fc7e4f49caa4b1fd1cfe19007152312e0@34.76.87.33:26656,3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768@78.107.253.133:26656,46cb18ca32ad7329cb82a10316087794ef12150f@185.107.57.74:26656"
sed -i.bak -e "s/^seeds *=.*/seeds = \"$SEEDS\"/" ~/.canine/config/config.toml
```


As a validator, you'll need to set a minimum gas price like so:
```sh
GAS="0.002ujkl"
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"$GAS\"/" $HOME/.canine/config/app.toml
```