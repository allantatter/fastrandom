var random = (function randomConstruct() {
    /**
     * Vars
     */
    var _randomArray = [];
    var _currentRandomIndex = -1;
    var _currentRandomChangeIndex = -1;
    var _randomArrayLength = 10000;

    /**
     * Generate random values
     */
    for (var i = 0, len = _randomArrayLength; i < len; i++) {
        _randomArray[i] = Math.random();
    }

    /**
     * Change out random values over time
     */
    setInterval(function () {
        _currentRandomChangeIndex++;

        if (_currentRandomChangeIndex >= _randomArrayLength) {
            _currentRandomChangeIndex = 0;
        }

        _randomArray[_currentRandomChangeIndex] = Math.random();
    }, 30);

    /**
     * Returns random value
     */
    function getRandomValue(index) {
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

            if (_currentRandomIndex >= _randomArrayLength) {
                _currentRandomIndex = 0;
            }

            return _randomArray[_currentRandomIndex];
        }
    }

    return getRandomValue;
})();
