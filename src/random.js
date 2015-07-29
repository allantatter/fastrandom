/*!
 * Faster random function
 * Made for your faster random needs
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com> (http://hendrysadrak.com)
 */
(function randomConstruct() {
    "use strict";
    /**
     * /////////////////////////////////////////////////////////////////////
     * Variables
     */
    var _randomArray = [];

    var _currentRandomIndex = 0;
    var _currentRandomChangeIndex = 0;

    /**
     * /////////////////////////////////////////////////////////////////////
     * Options
     */
    var _defaults = {
        valuesCount: 10000,
        randomInterval: 30,
        removeOptions: true
    };
    var _options = {};

    if (typeof window === "object" && window.fastrandomOptions)_options = window.fastrandomOptions;
    else if (typeof global === "object" && global.fastrandomOptions) _options = global.fastrandomOptions;
    else if (typeof fastrandomOptions === "object") _options = fastrandomOptions;

    for (var key in _defaults) {
        if (_defaults.hasOwnProperty(key) && !_options.hasOwnProperty(key)) {
            _options[key] = _defaults[key];
        }
    }

    /**
     * /////////////////////////////////////////////////////////////////////
     * Remove the global options var
     */
    if (_options.removeOptions && (typeof window.fastrandomOptions !== "undefined")) {
        delete window.fastrandomOptions;
    }

    /**
     * /////////////////////////////////////////////////////////////////////
     * Returns random value
     * @param index - (optional) index of the random value to get
     * @returns {float}
     */
    var random = function random(index) {
        /**
         * If index given, return by index
         */
        if (index) {
            return _randomArray[index];
        }

        if (_currentRandomIndex == _options.valuesCount) {
            _currentRandomIndex = 0;
        }

        return _randomArray[_currentRandomIndex++];
    };

    /**
     * /////////////////////////////////////////////////////////////////////
     * Function to generate one new random value over time
     * @type {Function}
     */
    random.randomChanger = function randomChanger() {
        if (_currentRandomChangeIndex == _options.valuesCount) {
            _currentRandomChangeIndex = 0;
        }

        _randomArray[_currentRandomChangeIndex++] = Math.random();
    };

    /**
     * /////////////////////////////////////////////////////////////////////
     * Generate random values
     */
    for (var i = 0; i < _options.valuesCount; i++) {
        random.randomChanger();
    }

    /**
     * /////////////////////////////////////////////////////////////////////
     * Set the random generation loop
     */
    if (_options.randomInterval) {
        setInterval(random.randomChanger, _options.randomInterval);
    }

    /**
     * /////////////////////////////////////////////////////////////////////
     * Extends random functions with some values
     */

    /**
     * Random valueOf
     * @type {Function}
     */
    random.valueOf = random;

    /**
     * Random function options
     * @type {Object}
     */
    random.options = _options;

    /**
     * If Object.defineProperty is defined then add some getters fo extended api usage
     */
    if (typeof Object.defineProperty !== "undefined") {
        /**
         * random.random getter
         */
        Object.defineProperty(random, 'random', {
            get: function () {
                return random();
            }
        });

        /**
         * random.randomArray returns current random values array
         */
        Object.defineProperty(random, 'randomArray', {
            get: function () {
                return _randomArray;
            }
        });

        /**
         * random.currentRandomIndex returns current index where random function is at in array
         */
        Object.defineProperty(random, 'currentRandomIndex', {
            get: function () {
                return _currentRandomIndex;
            }
        });
    }

    /**
     * /////////////////////////////////////////////////////////////////////
     * Exports random to different roots
     */

    /**
     * Export as module
     */
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = random;
    }
    /**
     * Register as AMD module
     */
    else if (typeof define === "function" && define.amd) {
        define("fastrandom", [], function () {
            return random;
        });
    }

    /**
     * If there is a window object, that at least has a document property, define random
     */
    if (typeof window === "object") {
        window.random = random;
    }
})();
