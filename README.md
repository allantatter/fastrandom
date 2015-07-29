# Fastrandom
### Made for your fast random needs

Random-js works by pregenerating an array of random values and later on just calling values from the array. 

---------
### Usage

##### Require as module
```javascript
var random = require('fastrandom');
```

##### Use in browser
```html
<!-- Source -->
<script type="text/javascript" src="./src/random.js"></script>
<!-- Minified -->
<script type="text/javascript" src="./dist/random.js"></script>
```

##### Basic usage
```javascript
random(); // returns a random value like Math.random();
```

### Options

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
