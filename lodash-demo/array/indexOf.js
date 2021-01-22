const indexOf = require('lodash').indexOf;


let arr = [1,2,1,2];

let temp = indexOf(arr, 2);
console.log(temp); // 1

temp = indexOf(arr , 2 ,2);
console.log(temp); // 3

temp = indexOf(arr ,0);
console.log(temp); // -1