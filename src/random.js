/*
 window['randomOptions'] = {
 randomValuesCount: 10000,
 randomInterval: 30
 };
 */

/**
 * Random function
 */
window['random'] = (function randomConstruct() {
    /**
     * Options
     */
    var _optionsDefault = {
        randomValuesCount: 10000,
        randomInterval: 30
    };

    var _options = window['randomOptions'] || {};
    for (var option in _optionsDefault) {
        if (_optionsDefault.hasOwnProperty(option) && !_options.hasOwnProperty(option)) {
            _options[option] = _optionsDefault[option];
        }
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
    for (var i = 0; i < _options.randomValuesCount; i++) {
        _randomArray[i] = Math.random();
    }

    /**
     * Change out random values over time
     */
    var randomChanger = function randomChanger() {
        _currentRandomChangeIndex++;

        if (_currentRandomChangeIndex >= _options.randomValuesCount) {
            _currentRandomChangeIndex = 0;
        }

        _randomArray[_currentRandomChangeIndex] = Math.random();
    };

    if (_options.randomInterval != false) {
        setInterval(randomChanger, _options.randomInterval);
    }

    /**
     * Returns random value
     */
    var randomFunction = function randomFunction(index) {
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

            if (_currentRandomIndex >= _options.randomValuesCount) {
                _currentRandomIndex = 0;
            }

            return _randomArray[_currentRandomIndex];
        }
    };

    /**
     * Apply some values to random function and return it
     */
    randomFunction.options = _options;

    return randomFunction;
})();
