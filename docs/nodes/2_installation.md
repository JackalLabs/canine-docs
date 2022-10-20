---
sidebar_position: 2
---
# Installing Canined

## Pre-Requisites 

There are a few things needed before installing.

### Installing Go
Follow more in-depth instructions to install Go v1.18.2 or higher [here](https://golang.org/doc/install).

On Ububtu you can install it with:

```sh
wget https://golang.org/dl/go1.18.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz
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

