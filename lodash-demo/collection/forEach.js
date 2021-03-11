const forEach = require('lodash').forEach;

let arr = ['a', 'b', 'c'];

let temp = forEach(arr, (ele) => {
    console.log(ele)
})
console.log(temp); // [ 'a', 'b', 'c' ]