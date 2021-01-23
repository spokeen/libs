const lodash = require('lodash');


let arr = ['a','b','c','d','e','f'];
let temp = lodash.chunk(arr, 2);
console.log(temp); // [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]

temp = lodash.chunk(arr, 4);
console.log(temp); // [ [ 'a', 'b', 'c', 'd' ], [ 'e', 'f' ] ]