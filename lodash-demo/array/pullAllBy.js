const pullAllBy = require('lodash').pullAllBy;

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

let temp = pullAllBy(array,[{ 'x': 1 }, { 'x': 2 }], 'x');
console.log(temp); // [ { x: 3 } ]