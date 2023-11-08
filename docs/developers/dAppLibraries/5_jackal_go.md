---
sidebar_position: 5
---

# Jackal.go

## Quickstart

### Setting up your Wallet
```go
seed := "SEED_PHRASE"
rpc := "https://jackal-testnet-rpc.polkachu.com:443" // testnet rpc for example
chainid := "lupulella-2" // testnet chain-id for example

wallet, err := wallet_handler.NewWalletHandler(
	seed,
	rpc,
	chainid)
if err != nil {
	panic(err)
}
```
### Setting up FileIO
```go
fileIo, err := file_io_handler.NewFileIoHandler(wallet)
if err != nil {
	panic(err)
}
```
### Generating Root Folder
```go
operatingRoot := "ROOT_FOLDER_NAME"

_, err = fileIo.DownloadFolder(fmt.Sprintf("s/%s", operatingRoot))
if err != nil {
	_, err = fileIo.GenerateInitialDirs([]string{operatingRoot})
	if err != nil {
		panic(err)
	}
}
```

### Uploading File
```go
bytes := []bytes{"SOME_FILE_DATA_HERE"}
fileName := "NAME_OF_SOME_FILE"
path := "PARENT_FOLDER_OF_SOME_FILE"

fileUpload, err := file_upload_handler.TrackVirtualFile(bytes, fileName, path)
if err != nil {
	panic(err)
}

folder, err := fileIo.LoadNestedFolder(path)
if err != nil {
	panic(err)
}

_, fids, _, err := fileIo.StaggeredUploadFiles([]*file_upload_handler.FileUploadHandler{fileUpload}, folder, false)
```

### Downloading File
```go
handler, err := fileIo.DownloadFile("s/" + operatingRoot)
if err != nil {
	panic(err)
}
fileBytes := handler.GetFile().Buffer().Bytes() // do with the filebytes as you please
```