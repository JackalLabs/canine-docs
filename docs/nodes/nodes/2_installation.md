---
sidebar_position: 2
---
# Installing Canined

## Pre-Requisites 

There are a few things needed before installing.

::: tip

Perform the follow instructions as `root` or your `admin` account.

:::
### Installing required tools
This will install the necessary tools to build the jackal chain source, along with lz4 compression tool and jquery tool.

```sh
sudo apt update
sudo apt install build-essential lz4 jq
```

### Installing Go
Follow more in-depth instructions to install Go v1.19 or higher [here](https://golang.org/doc/install).

On Ububtu you can install it with:

```sh
GOVER=$(curl https://go.dev/VERSION?m=text)
wget https://golang.org/dl/${GOVER}.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf ${GOVER}.linux-amd64.tar.gz
```

Add the following golang path info to the current users `~/.profile`.

Also add it to the skeleton profile so all new users have it. `/etc/skel/.profile`

```sh
# add environmental variables for Go
if [ -f "/usr/local/go/bin/go" ] ; then
    export GOROOT=/usr/local/go
    export GOPATH=${HOME}/go
    export GOBIN=$GOPATH/bin
    export PATH=${PATH}:${GOROOT}/bin:${GOBIN}
    export GO111MODULE=on
fi
```

Restarting the shell with youre profile settings or just rebasing them like so is required.

```sh
source ~/.profile
```

### Firewall Configuration
Configure UFW to only accept traffic on ports we use.

```bash
ufw limit ssh/tcp comment 'Rate limit for openssh server'
ufw default deny incoming
ufw default allow outgoing
ufw allow 26656/tcp comment 'JACKAL - Cosmos SDK/Tendermint P2P'
ufw enable
```

### Create Jackal user

```sh
sudo adduser --gecos "" jackal
```

### Creating a Service
You may want the daemon to run without you needing to supervise it. To turn the executable into a service follow these steps.

First create the service file `/etc/systemd/system/jackal.service`

```sh
sudo nano /etc/systemd/system/jackal.service
```

Copy and paste the follow into the service file: (you may need to edit it if you've set a custom home directory location)

```conf
[Unit]
Description=Jackal Validator
After=network.target

[Service]
Group=jackal
User=jackal
WorkingDirectory=/home/jackal
ExecStart=/home/jackal/go/bin/canined start
Restart=on-failure
RestartSec=3
LimitNOFILE=8192

[Install]
WantedBy=multi-user.target
```

Update systemd and enable the service file.
```sh
sudo systemctl daemon-reload
sudo systemctl enable canined.service
```

## Building from Source
::: tip

Perform the next follow steps as your `jackal` user

::

Replace `<VERSION>` with the current running version.
```sh
git clone https://github.com/JackalLabs/canine-chain.git
cd canine-chain
git fetch -a
git checkout <VERSION>

make install
```

From there you will be able to use `canined`, ex:
```sh
canined version
```