#!/usr/bin/env node

global.fastrandomOptions = {
    valuesCount: 1,
    randomInterval: false,
    removeOptions: true
};

var random = require('./../src/random.js');

console.log(random());

process.exit(0);
