/*!
 * Faster random function
 * Made for your faster random needs
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com> (http://hendrysadrak.com)
 */
(function randomConstruct() {
    "use strict";

    /**
     * Options
     */
    var _optionsDefault = {
        valuesCount: 10000,
        randomInterval: 30,
        removeOptions: true
    };

    var _options = window['fastrandomOptions'] || {};
    for (var option in _optionsDefault) {
        if (_optionsDefault.hasOwnProperty(option) && !_options.hasOwnProperty(option)) {
            _options[option] = _optionsDefault[option];
        }
    }

    /**
     * Remove the global options var
     */
    if (_options.removeOptions && (typeof window['fastrandomOptions'] !== "undefined")) {
        delete window['fastrandomOptions'];
    }

    /**
     * Vars
     */
    var _randomArray = [];

    var _currentRandomIndex = -1;
    var _currentRandomChangeIndex = -1;

    /**
     * Generate random values
     */
    for (var i = 0; i < _options.valuesCount; i++) {
        _randomArray[i] = Math.random();
    }

    /**
     * Change out random values over time
     */
    var randomChanger = function randomChanger() {
        _currentRandomChangeIndex++;

        if (_currentRandomChangeIndex >= _options.valuesCount) {
            _currentRandomChangeIndex = 0;
        }

        _randomArray[_currentRandomChangeIndex] = Math.random();
    };

    if (_options.randomInterval != false) {
        setInterval(randomChanger, _options.randomInterval);
    }

    /**
     * Returns random value
     * @param index
     * @returns {*}
     */
    var random = function random(index) {
        /**
         * If index given, return by index
         */
        if (index) {
            return _randomArray[index];
        }
        /**
         * Else take next random
         */
        else {
            _currentRandomIndex++;

            if (_currentRandomIndex == _options.valuesCount) {
                _currentRandomIndex = 0;
            }

            return _randomArray[_currentRandomIndex];
        }
    };

    /**
     * Extends random functions with some values
     */
    function setRandomExtensions() {
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
         * Function to generate one new random value
         * @type {Function}
         */
        random.randomChanger = randomChanger;

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
    }

    /**
     * Exports random to different roots
     */
    function setRandomExport() {
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
        if (typeof window === "object" && typeof window.document === "object") {
            window.random = random;
        }
    }

    /**
     * Do the magic ;)
     */
    setRandomExtensions();
    setRandomExport();
})();
