/*!
 * Faster random function
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com>
 */
!function(){var n={randomValuesCount:1e4,randomInterval:30},o=window.randomOptions||{};for(var r in n)n.hasOwnProperty(r)&&!o.hasOwnProperty(r)&&(o[r]=n[r]);for(var a=[],e=-1,t=-1,d=0;d<o.randomValuesCount;d++)a[d]=Math.random();var u=function(){t++,t>=o.randomValuesCount&&(t=0),a[t]=Math.random()};0!=o.randomInterval&&setInterval(u,o.randomInterval);var m=function(n){return n?a[n]:(e++,e>=o.randomValuesCount&&(e=0),a[e])};m.valueOf=m,m.options=o,m.randomChanger=u,m._randomArray=a,"undefined"!=typeof module&&module.exports?module.exports=m:window&&(window.random=m)}();