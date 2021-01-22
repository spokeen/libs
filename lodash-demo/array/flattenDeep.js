const flattenDeep = require('lodash').flattenDeep;


let arr = [1,[2, [3,4]], 5];

let temp = flattenDeep(arr);
console.log(temp); // [ 1, 2, 3, 4, 5 ]