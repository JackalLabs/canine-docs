---
sidebar_position: 0
---

# Setting Up

## Pre-Requisites

There are a few things needed before installing.

While logged in as the 'root' or 'admin' user, we add a 'jackal' user and give them root privileges.

### Enable Firewall Rules

Enabling the firewall is important to ensure your hardware remains secure. The following commands will add rules
required for access on both validators and providers:

```sh
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
```

Additional ports are required if you are running a validator:

```sh
sudo ufw allow 26657
sudo ufw allow 26658
```

The only additional port required for a provider is 3333:

```sh
sudo ufw allow 3333
```

If you are running a combined validator/provider, you need to allow all of the above ports. After adding ports to the
rules list, you will need to start the firewall:

```sh
sudo ufw enable
```

After starting the firewall, verify all of the required rules are in place by running:

```sh
sudo ufw status verbose
```

Your output should be similar to the following:

```sh
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere
80                         ALLOW       Anywhere
443                        ALLOW       Anywhere
1317                       ALLOW       Anywhere
3333                       ALLOW       Anywhere
26657                      ALLOW       Anywhere
26658                      ALLOW       Anywhere
```

### Create Jackal user

```sh
sudo adduser --gecos "" jackal
sudo usermod -aG sudo jackal
```

Log in as the jackal user to complete the below steps:

```sh
sudo su - jackal
```

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
