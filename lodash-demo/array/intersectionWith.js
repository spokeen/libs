const intersectionWith = require('lodash').intersectionWith;

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

let temp = intersectionWith(objects, others, (d1, d2) => {
    return d1.x === d2.x
});
console.log(temp);//[ { x: 1, y: 2 } ]