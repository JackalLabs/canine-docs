---
sidebar_position: 2
---
# Jackal.js

## Quickstart

To get started using Jackal in the browser, you'll need a few things!

### Pre-requesites

* Node.js
* [Jackal.js](https://www.npmjs.com/package/jackal.js)
* Vite
* Keplr

### Setting Up

To get started, make sure you start your project using vite. If you have an existing React app for example, re-init the project using vite.

### Connecting Your Wallet

```js
const chainConfig = {
    chainId: 'jackal-1',
    chainName: 'Jackal',
    rpc: 'https://rpc.jackalprotocol.com',
    rest: 'https://api.jackalprotocol.com',
    bip44: {
      coinType: 118
    },
    coinType: 118,
    stakeCurrency: {
      coinDenom: 'JKL',
      coinMinimalDenom: 'ujkl',
      coinDecimals: 6
    },
    bech32Config: {
      bech32PrefixAccAddr: 'jkl',
      bech32PrefixAccPub: 'jklpub',
      bech32PrefixValAddr: 'jklvaloper',
      bech32PrefixValPub: 'jklvaloperpub',
      bech32PrefixConsAddr: 'jklvalcons',
      bech32PrefixConsPub: 'jklvalconspub'
    },
    currencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.002,
          average: 0.002,
          high: 0.02
        }
      }
    ],
    features: []
}

const walletConfig = {
  selectedWallet: 'keplr',
  signerChain: 'jackal-1',
  enabledChains: ['jackal-1'],
  queryAddr: 'https://kdb -grpc.jackalprotocol.com',
  txAddr: 'https://kdb-rpc.jackalprotocol.com',
  chainConfig: chainConfig
}

// Hooking up the wallet to your app
const wallet = await WalletHandler.trackWallet(walletConfig)

```

### Buying Storage Space

Every account that wishes to use the Jackal Protocol to store data needs to have a paid account. This means giving the protocol $8/month/tb. We can do this with Jackal.js!

```js
const storage = await StorageHandler.trackStorage(wallet)

// (Wallet address, duration in hours (min 720), 
// space in bytes (min 1000000000)
await storage.buyStorage(WALLET_ADDRESS, 720, 1000000000000)
```

### Creating a Folder

```js
const fileIo = await FileIo.trackIo(wallet)

const listOfFolders = ["folder_name", ...] 
// you can create as many folders as you would like this way

// this will only create new folders if they don't already exist
const newFolderCount = await fileIo.verifyFoldersExist(listOfFolders)
```


### Uploading a File

```js
const fileIo = await FileIo.trackIo(wallet)

const parentFolderPath = PARENT_FOLDER_NAME // replace this with your own path
const fileName = FILE_NAME // replace this with your own file name

const handler = await FileUploadHandler.trackFile(FILE_OBJECT, parentFolderPath)

const parent = await fileIo.downloadFolder(parentFolderPath)

const uploadList = {
    fileName: {
        data: null,
        exists: false, 
        handler: handler,
        key: fileName,
        uploadable: await handler.getForUpload()
    }
}

await fileIo.staggeredUploadFiles(uploadList, parent, {counter: 0, complete: 0})
```

### Downloading a File

```js
const fileIo = await FileIo.trackIo(wallet)

const file = await fileIo.downloadFile(
    {
        rawPath: FILE_PATH
        owner: OWNER_ADDRESS
        isFolder: false
    }, 
    {
        track: 0
    }
)

const fileData = file.receiveBacon()
// do what you want with the File object returned by receiveBacon
```