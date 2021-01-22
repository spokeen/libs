const differenceBy = require('lodash').differenceBy;

let arr = [1.2, 1.1, 3.1];
let temp = differenceBy(arr, [1.3], Math.floor);
console.log(temp); // [ 3.1 ]

let arr2 = [{
    a: 1
}, {
    a:2
}];
let arr3 = [{
    a:1
}]
temp = differenceBy(arr2, arr3, 'a');
console.log(temp); // [ { a: 2 } ]