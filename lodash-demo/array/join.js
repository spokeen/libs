const join = require('lodash').join;

let arr = [1,2,3,4,5];
let temp = join(arr, '-');
console.log(temp); // 1-2-3-4-5