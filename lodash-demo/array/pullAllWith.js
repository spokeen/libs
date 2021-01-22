const pullAllWith = require('lodash').pullAllWith;

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
let temp = pullAllWith(array, [{ 'x': 1 }, { 'x': 2 }], (d1, d2) => {
    return d1.x === d2.x;
})
console.log(temp); // [ { x: 3 } ]