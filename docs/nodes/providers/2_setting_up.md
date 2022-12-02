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
export PHOME={path-to-pool-from-before}

jprovd client gen-key --home=$PHOME

jprovd config chain-id {chain-id} --home=$PHOME
jprovd config node {your node} --home=$PHOME

jprovd init {IP_ADDRESS} {STORAGE_IN_BYTES} {KEYBASE_IDENTITY} --home=$PHOME

jprovd start --home=$PHOME
```

