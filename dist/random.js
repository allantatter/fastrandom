/*!
 * Faster random function
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com>
 */
!function(){"use strict";function n(){c.valueOf=c,c.options=t,c.randomChanger=i,"undefined"!=typeof Object.defineProperty&&(Object.defineProperty(c,"randomArray",{get:function(){return a}}),Object.defineProperty(c,"currentRandomIndex",{get:function(){return d}}))}function e(){"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd&&define("fastrandom",[],function(){return c}),"object"==typeof window&&"object"==typeof window.document&&(window.random=c)}var o={valuesCount:1e4,randomInterval:30},t=window.fastrandomOptions||{};for(var r in o)o.hasOwnProperty(r)&&!t.hasOwnProperty(r)&&(t[r]=o[r]);for(var a=[],d=-1,u=-1,f=0;f<t.valuesCount;f++)a[f]=Math.random();var i=function(){u++,u>=t.valuesCount&&(u=0),a[u]=Math.random()};0!=t.randomInterval&&setInterval(i,t.randomInterval);var c=function(n){return n?a[n]:(d++,d==t.valuesCount&&(d=0),a[d])};n(),e()}();