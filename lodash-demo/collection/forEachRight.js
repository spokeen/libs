const forEachRight = require('lodash').forEachRight;

let arr = ['a','b','c'];

let temp = forEachRight(arr , (ele) => {
    console.log(ele);
})

console.log(temp); // [ 'a', 'b', 'c' ]