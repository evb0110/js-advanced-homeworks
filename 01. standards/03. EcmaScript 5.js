// This programm conforms with ES5 standards

'use strict';

var pointsArray = [74989, 74990, 74990, 62000, 58480, 61800];

var pointsArraySorted = pointsArray.sort().reverse();

var winnerPoints = pointsArraySorted[0];

var medallistAverage = (
  pointsArraySorted[0] +
  pointsArraySorted[1] +
  pointsArraySorted[2]
) / 3;
medallistAverage = medallistAverage.toFixed(2);

console.log('Самый лучший балл: ' + winnerPoints);
console.log('Средний балл призёров: ' + medallistAverage);