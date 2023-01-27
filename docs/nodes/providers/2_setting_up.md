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

:::note

'Setting Up' instructions must be followed fully to add necessary golang path info to the current users ~/.profile. If these steps are skipped, 'make install' will not build jprovd--the provider daemon. 

:::

```sh
git clone https://github.com/JackalLabs/canine-provider.git

cd canine-provider 

git pull

git checkout {version}

make install
```

## Initializing

:::tip

Your keybase identity can be left as `""` if you don't want to link your provider to keybase.

:::

1. Export the path to your storage pool 

```sh
export PHOME={path-to-pool-from-before}
```

2. Generate your provider's private key 

```sh
jprovd client gen-key --home=$PHOME
```

3. Configure the chain-id 

```sh
jprovd client config chain-id {chain-id} --home=$PHOME
```

4. Configure the rpc node your provider will use to connect to the chain 

```sh
jprovd client config node {your node} --home=$PHOME
```

 Some users may find it easier to complete steps 3 and 4 manually. Instructions for Ubuntu are below:
  
  a. In your terminal, while inside of the PHOME directory, type 'nautilus'. This will open the nautilus file explorer
  b. At the top right corner, make sure 'Show Hidden Files' is checked
  c. Navigate to your '.jackal-storage' folder to access the config folder
  d. Open the client.toml file to manually type in the 'chain-id' and 'node'
  e. Save and close the client.toml file

 Testnet and Mainnet chain-ids can be found here: https://github.com/JackalLabs/jackal-chain-assets.
 If you are not running your own tendermint RPC node, Jackal Labs is currently hosting a testnet tendermint RPC node. Endpoint below:
  
  https://testnet-rpc.jackalprotocol.com:443
  
 We will also be hosting a tendermint rpc node for mainnet, which will be made accessible to the public at launch of Jackal Storage. 

 Before completing step 5 below, your account will need tokens. 
 Testnet tokens can be obtained at https://testnet-faucet.jackalprotocol.com/ 
 Mainnet tokens can be purchased on https://frontier.osmosis.zone/ 

5. Initialize the provider 

```sh
jprovd init {IP_ADDRESS} {STORAGE_IN_BYTES} {KEYBASE_IDENTITY} --home=$PHOME
```

example:

```sh
jprovd init "https://storagep1.chainstrategies.cloud" "9000" "" --home=$PHOME
```

 Please note that 'https://' is required to be included in the ip or init will throw an error. 
 Link for TB to Bytes converter: https://www.convertunits.com/from/TB/to/byte 

6. Start the provider 

```sh
jprovd start --home=$PHOME
```

