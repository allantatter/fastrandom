# Fastrandom
### Made for your faster random needs

Fastrandom works by pregenerating an array of random values and later returns values from the array.

[![NPM](https://nodei.co/npm/fastrandom.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastrandom/)

[![Twitter](https://img.shields.io/twitter/url/https/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https://www.npmjs.com/package/fastrandom&via=hendrysadrak&text=Fastrandom - For your random needs&hashtags=fastrandom)

### Usage

##### npm
In your project, run the following command:
```
npm install fastrandom --save
```

##### Require as module
```javascript
var random = require('fastrandom');
var value = random(); // random value like Math.random();
```

##### Use in browser
```html
<!-- Source -->
<script type="text/javascript" src="./src/random.js"></script>
<!-- Minified -->
<script type="text/javascript" src="./dist/random.js"></script>

<script>
var value = random();
</script>
```

##### Browser using AMD or RequireJS
```javascript
define(function (require) {
  var random = require("fastrandom");
  var value = random();
});

define(["fastrandom"], function (random) {
  var value = random();
});
```

##### From CLI
```javascript
npm install fastrandom -g

fastrandom
```

##### Basic usage
```javascript
random(); // returns a random value like Math.random();
```

##### Other functions
```javascript
// Returns object of current options
random.options

// generates a new random value to array changing out an old one in current index
random.randomChanger();

// If browser supports getters and setters then there is also:
// getter version of the random
random.random // returns a random value like Math.random(); works the same like random();

// array that contains current random values
random.randomArray // [0.1414, 0.91325, ...];

// Current index in the random array
random.currentRandomIndex // 0 ... n
```

### Support
Tested with:
* Safari 8.0.7 (OSX)
* Chrome 44.0.2403.125 (PC)
* Chrome 44.0.2403.107 (OSX)
* Firefox 37 (PC)
* Firefox 38 (PC)
* Firefox 39 (OSX)
* Microsoft Edge

### Options
Define ```window.fastrandomOptions``` before requiring the script.
Default options:
```javascript
window.fastrandomOptions = {
    valuesCount: 10000,   // How many random values should be generated at init, more values mean less looping
    randomInterval: 30    // Interval, how often a new random value is generated (in ms),
    removeOptions: true   // if true then global window.fastrandomOptions will be deleted after init
};
```

### Shoutout!
##### If there is someone who knows how to write tests then fork it and do a pull request after! Thank you! I will add people who contribute to contributors and credits!

### Development
First you should install dependencies
```
npm install
```
Do your magic ;) (add features, fix bugs, etc) All the code is in the ```src``` folder, ```dist``` folder contains minified version of the src.

Run default gulp task for minfication.
```
gulp
```

### License
```
ISC
```
