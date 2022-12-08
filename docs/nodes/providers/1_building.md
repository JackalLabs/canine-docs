---
sidebar_position: 1
---
# Creating Provider

## Disclaimer

This guide assumes you either have access to a full node over a network connection or are using the same machine as the full node.

## Networking
To allow your provider to be used by the Jackal Protocol Dashboard, please ensure you have a reverse proxy system setup and have a registered domain name pointing to your provider. We recommend using [Nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/).

If you have UPNP enabled on your router, your provider will be open to the internet by default at port `3333`. You can find the address it can be connected to by running `canined network ip`.

## Setting up ZFS Without Mirroring

Setting up ZFS allows us to combine multiple drives together, in this case we are merging two drives. We don't recommend you only merge drives with striping and instead we recommend mirroring. However mirroring is a longer process and different for each configuration. In our case, this machine is only running with 24TB across 2 drives. We are less concerned about a drive failing as that would wipe half our storage anyways.

List all drives with :
```sh
sudo fdisk -l
```

You should end up seeing something like this
```sh
...

Disk /dev/sda: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors
Disk model: ST14000NM001G-2K
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: 4DE192A1-7AFF-F64D-93D5-CA48B806DAA0

Disk /dev/sdb: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors
Disk model: ST14000NM001G-2K
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: D2827F71-7F0A-EE4A-BB12-1B2172641DBE

...
```

Note down the Disk paths that you wish to use for your storage provider, in this case it is `/dev/sdb` and `/dev/sda`. Now we create a new pool as follows:

```sh
sudo zpool create {pool-name} /dev/sdb /dev/sda ...
```

This folder will now have the drives mounted at `/{pool-name}`. For more in-depth guides to using zfs, check out [this page](https://zfsonlinux.org/).
