---
sidebar_position: 2
---
# Installing Canined

## Pre-Requisites 

There are a few things needed before installing.

### Installing Build Essentials

```sh
sudo apt update
sudo apt install build-essential
```

### Installing Go
Follow more in-depth instructions to install Go v1.19 or higher [here](https://golang.org/doc/install).

On Ububtu you can install it with:

```sh
wget https://golang.org/dl/go1.19.3.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.3.linux-amd64.tar.gz
```

Add these lines to the end of `~/.profile`:

```sh
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```

Restarting the shell with youre profile settings or just rebasing them like so is required.

```sh
source ~/.profile
```

## Building from Source

```sh
git clone https://github.com/JackalLabs/canine-chain.git
cd canine-chain
git fetch
git checkout <VERSION>

make install
```

From there you will be able to use `canined`, ex:
```sh
canined version
```

## Syncing to Current Height

Get a snapshot [here](http://snapshots.autostake.net/jackal-1/).

For the sake of this guide, the snapshot we download is named `jackal.tar.lz4`

```sh
sudo snap install lz4
canined unsafe-reset-all --keep-addr-book
lz4 -c -d jackal.tar.lz4  | tar -x -C $HOME/.canine
```

Then start the chain again.

### Versions for Sync

| block height | canined version |
|--------------|-----------------|
| 45381        | 1.1.2           |
| 0            | 1.1.0           |

## Creating a Service
You may want the daemon to run without you needing to supervise it. To turn the executable into a service follow these steps.

```sh
cd $HOME
echo "[Unit]
Description=Jackal Node
After=network-online.target
[Service]
User=${USER}
ExecStart=$(which canined) start
Restart=always
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
" > canined.service

sudo mv canined.service /lib/systemd/system/
sudo systemctl enable canined.service

# Starting the service
sudo systemctl start canined.service

# Restarting the service
sudo systemctl daemon-reload
sudo systemctl restart canined.service
```