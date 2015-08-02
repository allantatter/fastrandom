'use strict';

describe('Test fastrandom', function () {
    var random;

    beforeEach(function() {
        random = require('../src/random.js');
    });

    it('should output a random number between 0 and 1', function () {
        var randomNumber = random();

        expect(typeof randomNumber).toBe('number');
        expect(randomNumber).toBeGreaterThan(0);
        expect(randomNumber).toBeLessThan(1);
    });

    it('should output a random number between 0 and 1 using getters', function () {
        var randomNumber = random.random;

        expect(typeof randomNumber).toBe('number');
        expect(randomNumber).toBeGreaterThan(0);
        expect(randomNumber).toBeLessThan(1);
    });

    it('should output an array of random numbers', function () {
        var randomArray = random.randomArray;

        expect(typeof randomArray).toBe('object');
        expect(randomArray.length).toBeGreaterThan(1);

        expect(typeof randomArray[0]).toBe('number');
        expect(randomArray[0]).toBeGreaterThan(0);
        expect(randomArray[0]).toBeLessThan(1);
    });

    it('should ensure that current random index is defined', function () {
        expect(typeof random.currentRandomIndex).toBe('number');
    });
});
