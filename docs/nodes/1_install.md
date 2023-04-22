---
sidebar_position: 0
---
# Setting Up

## Pre-Requisites 

There are a few things needed before installing.

:::tip

Perform the follow instructions as `root` or your `admin` account.

:::

### Create Firewall Rules
These are necessecary to ensure your hardware remains secure. The following should be used for both validators and providers:

```sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
```

The following is required if you are running a validator:

```sudo ufw allow 26657
sudo ufw allow 26658
```

The following is required if you are running a provider:

```sudo ufw allow 3333
```

If you are running a combined validator/providor you will need to allow all of the above ports. Once done adding ports, you must enable the firewall:

```sudo ufw enable
```

After enabling, check the status to verify the firewall is running:

```sudo ufw status verbose
```

The output should appear as follows, with the ports you have allowed:

```Status: active

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
