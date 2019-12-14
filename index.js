"use strict"

const ky = require("ky-universal").create({
    prefixUrl: "https://api.mcsrvstat.us/2/",
})

module.exports = (address) => ky(address).json()
