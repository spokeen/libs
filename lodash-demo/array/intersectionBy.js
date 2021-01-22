const intersectionBy = require('lodash').intersectionBy;


var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

let temp = intersectionBy(objects, others, 'x')
console.log(temp) // [ { x: 1, y: 2 } ]