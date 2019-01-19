// This program conforms with ES5 standards

"use strict";

var pointsArray = [74989, 74990, 74990, 62000, 58480, 61800];

var pointsArraySorted = pointsArray.sort(function cmpNum(a, b) {
  return b - a;
});

var winnerPoints = pointsArraySorted[0];

var medallistAverage =
  pointsArraySorted.slice(0, 3).reduce(function sum(a, b) {
    return a + b;
  }) / 3;

medallistAverage = medallistAverage.toFixed(2);

console.log("Наивысший балл: " + winnerPoints);
console.log("Средний балл призёров: " + medallistAverage);
