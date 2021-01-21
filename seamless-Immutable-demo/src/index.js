let Immutable  = require('seamless-immutable');

/**
 * 数组 原有的方法也可以使用
 * 
 * 
 */
let arr = Immutable([1,2,3]);
console.log(arr); // [ 1, 2, 3 ]
arr[0] = 4;
console.log(arr); // [ 1, 2, 3 ]