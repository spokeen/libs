const remove = require('lodash').remove;

let arr = [1,2,3,4,5];

let temp = remove(arr, (ele) =>  {
    return  ele % 2 ===0;
})

console.log(temp); //[ 2, 4 ]
console.log(arr); //[ 1, 3, 5 ]