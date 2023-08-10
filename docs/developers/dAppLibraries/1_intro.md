---
sidebar_position: 1
---
# About These Libraries

## Quickstart

To get started using Jackal in the browser, you'll need a few things!

### Pre-requesites

* [Vue.js](https://vuejs.org/guide/introduction.html) or [React](https://react.dev/learn)
* [Jackal.js](https://www.npmjs.com/package/jackal.js)
* [Vite](https://vitejs.dev)
* Chromium-family browser (Chrome, Brave, Edge, etc)
* [Keplr](https://www.keplr.app) or [Leap](https://www.leapwallet.io/cosmos) wallet extension

### Setting Up

To get started, make sure you [start your project using Vite](https://vitejs.dev/guide). If you have an existing React app for example, re-init the project using Vite.

Install dependencies:
```shell
npm install jackal.js
npm install -D vite-plugin-node-stdlib-browser
```

Jackal.js requires Node v20+. The easiest way to manage this is with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating).
```shell
nvm use 20
```

#### Updating Vite Config

```js
// In vite.config.js:
import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  plugins: [
    nodePolyfills()
  ],
})
```

### Connecting Your Wallet

Custom chain configurations are required for [Testnet](#testnet-configuration), and for Keplr on [Mainnet](#mainnet-configuration). The following are the correct options to use.
Jackal.js additionally supports app-level overrides to the chain default settings. This requires some redundancy, but allows for greater flexibility in projects.

#### Wallet Selection

Currently Jackal,js supports Keplr and Leap wallets. Only a single wallet can be used at any time, but you can switch between them as desired.

```js
const selectedWallet = 'keplr'
// OR
const selectedWallet = 'leap'
```

#### <a name="testnet-configuration"></a>Testnet Configuration

```js
const chainConfig = {
  chainId: 'lupulella-2',
  chainName: 'Jackal Testnet II',
  rpc: 'https://testnet-rpc.jackalprotocol.com',
  rest: 'https://testnet-api.jackalprotocol.com',
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
```

```js
const appConfig = {
  signerChain: 'lupulella-2',
  enabledChains: ['lupulella-2'],
  queryAddr: 'https://testnet-grpc.jackalprotocol.com',
  txAddr: 'https://testnet-rpc.jackalprotocol.com'
}
```

#### <a name="mainnet-configuration"></a>Mainnet Configuration

```js
const chainConfig = {
  chainId: 'jackal-1',
  chainName: 'Jackal Mainnet',
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
```

```js
const appConfig = {
  signerChain: 'jackal-1',
  enabledChains: ['jackal-1'],
  queryAddr: 'https://grpc.jackalprotocol.com',
  txAddr: 'https://rpc.jackalprotocol.com'
}
```

#### Bringing the full config together

```js
const finalWalletConfig = {
  selectedWallet,
  ...appConfig,
  chainConfig
}

// Hooking up the wallet to your app
const wallet = await WalletHandler.trackWallet(finalWalletConfig)
```

Additionally, a query-only mode for the wallet can get accessed via the following:

```js
const wallet = await WalletHandler.trackQueryWallet('https://grpc.jackalprotocol.com') // Use the gRPC-web address of your choice
```

### Buying Storage Space

Every account that wishes to use the Jackal Protocol to store data needs to have a paid storage account.
This means giving the protocol $8 USD per month per tb. We can do this with Jackal.js!

```js
const storage = await StorageHandler.trackStorage(wallet)

// (Wallet address, duration in months (min 1), 
// space in terabytes (min .001)

// 2 TB for 1 year:
await storage.buyStorage(WALLET_ADDRESS, 12, 2)
```

### Creating a Root Folder

```js
const fileIo = await FileIo.trackIo(wallet)

const listOfRootFolders = ["Home", ...] 
// you can create as many root folders as you would like this way. Home is the dashboard default root directory.

// The first time a user connects, they must init the system
const storage = await StorageHandler.trackStorage(wallet)
const msg = storage.makeStorageInitMsg()
await fileIo.generateInitialDirs(msg, listOfRootFolders)

// after the first time, this code can be used instead. this will only create new root folders if they don't already exist
const newFolderCount = await fileIo.verifyFoldersExist(listOfRootFolders)
```

### Creating a Child Folder

```js
const fileIo = await FileIo.trackIo(wallet)

const parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard's root folder path is s/Home
const parent = await fileIo.downloadFolder(parentFolderPath)

const listOfChildFolders = ["Movies", "Pictures", ...]

await fileIo.createFolders(parent, listOfChildFolders)
```

### Uploading a File

```js
const fileIo = await FileIo.trackIo(wallet)

const parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard's root folder path is s/Home
const parent = await fileIo.downloadFolder(parentFolderPath)

const file = FILE_OBJECT // this MUST be an instance of File() that is in the browser memory
const fileName = file.name
const handler = await FileUploadHandler.trackFile(file, parentFolderPath)

const uploadList = {}
uploadList[fileName] = {
  data: null,
  exists: false,
  handler: handler,
  key: fileName,
  uploadable: await handler.getForUpload()
}

await fileIo.staggeredUploadFiles(uploadList, parent, {counter: 0, complete: 0})
```

### Downloading a File

```js
const fileIo = await FileIo.trackIo(wallet)

/* optional */
const parentFolderPath = PARENT_FOLDER_NAME // for example Dashboard's root folder path is s/Home
const parent = await fileIo.downloadFolder(parentFolderPath)
const childrenFiles = parent.getChildFiles()
const pathOfFirstChild = parent.getMyChildPath(childrenFiles[0].name)
/* end optional */

const downloadDetails = {
  rawPath: FILE_PATH, // manual complete file path OR pathOfFirstChild
  owner: OWNER_ADDRESS, // JKL address of file owner
  isFolder: false
}

const fileHanlder = await fileIo.downloadFile(downloadDetails, { track: 0 })

const file = fileHanlder.receiveBacon()
// do what you want with the File object returned by receiveBacon
```
