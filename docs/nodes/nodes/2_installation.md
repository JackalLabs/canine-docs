---
sidebar_position: 2
---
# Installing Canined

## Pre-Requisites 
See [Set-up](../1_install.md).

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
:::tip

Perform the next follow steps as your `jackal` user

:::

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