const differenceBy = require('lodash').differenceBy;

let arr = [1.2, 2.6],
arr2 = [1.3, 3.4];

let temp = differenceBy(arr, arr2, Math.floor);

console.log(temp); // [ 2.6 ]



let arr3 = [{x: 2}, {x:3}],
arr4 = [{x:2}];

temp = differenceBy(arr3, arr4, 'x');
console.log(temp); //[ 2.6 ]

let arr5 = [{a: {c: 1}}, {a: {c:2}}],
arr6 = [{a: {c:2}}]; // [ { x: 3 } ]

temp = differenceBy(arr5, arr6, 'a.c');
console.log(temp); // [ { a: { c: 1 } } ]