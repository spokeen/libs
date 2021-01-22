const findIndex = require('lodash').findIndex;

let arr = [1,3,3,4];

let temp = findIndex(arr , (ele) =>{
    return ele >2;
});
console.log(temp); // 1

temp = findIndex(arr, (ele)=>{
    return ele  > 2
}, 3)

console.log(temp); // 3