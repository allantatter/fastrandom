/*!
 * Faster random function
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com>
 */
!function(){"use strict";function n(){m.valueOf=m,m.options=t,m.randomChanger=i,"undefined"!=typeof Object.defineProperty&&(Object.defineProperty(m,"randomArray",{get:function(){return a}}),Object.defineProperty(m,"currentRandomIndex",{get:function(){return d}}))}function e(){"object"==typeof module&&"object"==typeof module.exports?module.exports=m:"function"==typeof define&&define.amd&&define("random",[],function(){return m}),"object"==typeof window&&"object"==typeof window.document&&(window.random=m)}var o={randomValuesCount:1e4,randomInterval:30},t=window.randomOptions||{};for(var r in o)o.hasOwnProperty(r)&&!t.hasOwnProperty(r)&&(t[r]=o[r]);for(var a=[],d=-1,u=-1,f=0;f<t.randomValuesCount;f++)a[f]=Math.random();var i=function(){u++,u>=t.randomValuesCount&&(u=0),a[u]=Math.random()};0!=t.randomInterval&&setInterval(i,t.randomInterval);var m=function(n){return n?a[n]:(d++,d>=t.randomValuesCount&&(d=0),a[d])};n(),e()}();