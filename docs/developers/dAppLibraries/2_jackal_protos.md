---
sidebar_position: 2
---
# Jackal.js-protos / Jackal.nodejs-protos

## About

The Protos modules for Jackal.js and Jackal.nodejs ("Protos") is the conversion layer the accepts raw protobufs from the
Jackal chain and converts them to useable typescrypt code. The differences between these 2 packages are only in the
compatibility with either browser or Nodejs Javascript APIs and how they are packaged for consumption. Protos is designed
for those that wish to write their own Jackal-compatible library instead of using Jackal.js / Jackal.nodejs.

## Quickstart

To get started using Protos, you'll need a few things!

### Pre-requesites

Both:
* Nodejs v20+
* [ECIESJS](https://www.npmjs.com/package/eciesjs)

Jackal.js-protos:
* [Vite](https://vitejs.dev)
* Chromium-family browser (Chrome, Brave, Edge, etc)
* [Keplr](https://www.keplr.app) or [Leap](https://www.leapwallet.io/cosmos) wallet extension

Jackal.nodejs-protos:
* None

Protos requires Node v20+. The easiest way to manage this is with [NVM](https://github.com/nvm-sh/nvm#installing-and-updating).
```shell
nvm use 20
```

### Setting Up

To get started, make sure your Jackal.js-protos based project has [Vite installed](https://vitejs.dev/guide). Jackal.nodejs-protos
does not need this.

Install dependencies:

(Jackal.js-protos)
```shell
npm create vite@latest
npm install jackal.js-protos eciesjs @cosmjs/launchpad @cosmjs/proto-signing @cosmjs/stargate
npm install -D vite-plugin-node-stdlib-browser
```

OR

(Jackal.nodejs-protos)
```shell
npm install jackal.nodejs-protos eciesjs @cosmjs/launchpad @cosmjs/proto-signing @cosmjs/stargate
npm install -D @types/node typescript tscpaths
```

#### Updating Vite Config
(Jackal.js-protos)
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

## Next Steps

Once everything is set up as detailed above, you are free to create as little or as much using the methods exposed by Protos.
Full documentation of these methods coming soon.
