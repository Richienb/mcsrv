# MCSrv [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/mcsrv/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/mcsrv)

An interface to the Minecraft Server Status API.

[![NPM Badge](https://nodei.co/npm/mcsrv.png)](https://npmjs.com/package/mcsrv)

## Install

```sh
npm install mcsrv
```

## Usage

```js
const mcsrv = require("mcsrv");

mcsrv("mc.hypixel.net");
//=> { online: true, ... }
```

## API

### mcsrv(address)

#### address

Type: `string`

The server address to lookup.
