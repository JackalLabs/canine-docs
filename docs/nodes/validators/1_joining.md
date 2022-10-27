---
sidebar_position: 1
---
# Creating Validator


## Disclaimer

This guide assumes you are using the same machine as the full node.

## Setting Up

As a validator, you'll need to set a minimum gas price like so:
```sh
GAS="0.002ujkl"
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"$GAS\"/" $HOME/.canine/config/app.toml
```

```sh
canined tx staking create-validator \
    --amount 1000000ujkl \
    --commission-max-change-rate 0.10 \
    --commission-max-rate 0.2 \
    --commission-rate 0.1 \
    --from {WALLET_NAME} \
    --min-self-delegation 1 \
    --moniker {YOUR_MONIKER} \
    --pubkey $(canined tendermint show-validator) \
    --chain-id jackal-1 \
    --gas-prices 0.02ujkl
```
