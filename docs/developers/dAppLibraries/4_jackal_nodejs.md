---
sidebar_position: 4
---
# Jackal.nodejs

## Quickstart

### Demo

A working demo repo can be found [on GitHub](https://github.com/JackalLabs/pup-demo).

### Pre-requesites

* Nodejs v20+
* [Jackal.nodejs](https://www.npmjs.com/package/@jackallabs/jackal.nodejs)
* Wallet Mnemonic

### Setting Up

Install dependencies:
```shell
npm install @jackallabs/jackal.nodejs
npm install -D @types/node typescript tscpaths
```

Jackal.js requires Node v20+. The easiest way to manage this is with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating).
```shell
nvm use 20
```

#### Wallet Instantiation

Jackal.nodejs does not use a traditional wallet like Jackal.js. Instead, `MnemonicWallet.create(mnemonic)` is used for
wallet instantiation.

```js
const appConfig = {
  signerChain: 'lupulella-2',
  queryAddr: 'https://testnet-grpc.jackalprotocol.com',
  txAddr: 'https://testnet-rpc.jackalprotocol.com'
}

const m = await MnemonicWallet.create(mnemonic)

// Hooking up the wallet to your app
const w = await WalletHandler.trackWallet(appConfig, m)
```

Additionally, a query-only mode for the wallet can get accessed via the following:

```js
const wallet = await WalletHandler.trackQueryWallet('https://testnet-grpc.jackalprotocol.com') // Use the gRPC-web address of your choice
```

### Buying Storage Space

Every account that wishes to use the Jackal Protocol to store data needs to have a paid storage account.
This means giving the protocol $8 USD per month per tb. We can do this with Jackal.js!

```js
const storage = await StorageHandler.trackStorage(wallet)

// (Wallet address)
// duration in months (min 1)
// space in terabytes (min .001)
// 2 TB for 1 year:
await storage.buyStorage(WALLET_ADDRESS, 12, 2)
```

### Creating a Root Folder

```js
const minimumProviderVersion = '1.0.9'
const fileIo = await FileIo.trackIo(wallet, minimumProviderVersion)

const listOfRootFolders = ["Home", ...]
// you can create as many root folders as you would like this way. Home is the Jackal Dashboard default root directory.
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

const parentFolderPath = PARENT_FOLDER_NAME_AND_PATH // for example Dashboard's root folder path is s/Home
const parent = await fileIo.downloadFolder(parentFolderPath)

const listOfChildFolders = ["Movies", "Pictures", ...]

await fileIo.createFolders(parent, listOfChildFolders)
```

### Uploading a File

```js
const fileIo = await FileIo.trackIo(wallet)

const parentFolderPath = PARENT_FOLDER_NAME_AND_PATH // for example Dashboard's root folder path is s/Home
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
const parentFolderPath = PARENT_FOLDER_NAME_AND_PATH // for example Dashboard's root folder path is s/Home
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
