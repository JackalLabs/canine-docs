---
sidebar_position: 2
---
# Setting Up JProvd

## Pre-Requisites 
See [Set-up](../1_install.md).

## Installing

:::tip

Check latest version [here](https://github.com/JackalLabs/canine-provider/releases).

:::

```sh
git clone https://github.com/JackalLabs/canine-provider.git

git pull

git checkout {version}

make install
```

## Initializing

:::tip

Your keybase identity can be left as `""` if you don't want to link your provider to keybase.

:::

```sh
export PHOME={path-to-pool-from-before}

jprovd client gen-key --home=$PHOME

jprovd client config chain-id {chain-id} --home=$PHOME
jprovd client config node {your node} --home=$PHOME

jprovd init {IP_ADDRESS} {STORAGE_IN_BYTES} {KEYBASE_IDENTITY} --home=$PHOME

jprovd start --home=$PHOME
```
