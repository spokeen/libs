const every = require('lodash').every;


// 检查每个元素是否复合要求

let arr  = [
    {
        name: 'dd',
        age: 22
    },
    {
        name: 'd2',
        age: 16
    }
]

let temp = every(arr , (ele) => {
    return ele.age > 17;
})

console.log(temp); // false