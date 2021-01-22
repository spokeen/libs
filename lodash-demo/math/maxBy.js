const maxBy = require('lodash').maxBy;

let arr = [
    {
        name: 'dd',
        age: 21
    },
    {
        name: 'dd2',
        age: 22
    }
];



let temp = maxBy(arr, (ele) => {
    // 根据 age 属性选择最大值
    return ele.age;
})
console.log(temp); // { name: 'dd2', age: 22 }