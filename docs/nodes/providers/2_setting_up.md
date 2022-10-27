---
sidebar_position: 2
---
# Setting Up Canined

## Canined Init

We need to set up canine to live inside the mount point we just created as that is where all the files are stored. 

:::info

The chain must be live on main-net to complete the following actions

:::

```sh
canined init [node-name] --home={path-to-pool-from-before}

canined config chain-id canine-1
canined config keyring-backend test

canined tx storage init-provider {IP_ADDRESS} {STORAGE_IN_BYTES} --from {KEY_NAME} --gas-prices=0.002ujkl

canined start-provider --from {KEY_NAME} --gas-prices=0.002ujkl -y
```

