# Fastrandom
### Made for your fast random needs

Fastranom works by pregenerating an array of random values and later returns values from the array. 

---------
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

##### Basic usage
```javascript
random(); // returns a random value like Math.random();
```

### Options
Define ```window.fastrandomOptions``` before requiring the script.
Default options:
```javascript
window.fastrandomOptions = {
    randomValuesCount: 10000, // How many random values should be generated at init
    randomInterval: 30        // Interval, how often a new random value is generated (in ms)
};
```

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
