const divid = require('lodash').divide;

let temp = divid(1,3);
console.log(temp); // 0.3333333333333333

temp = divid(3,0);
console.log(3/0); // Infinity
console.log(temp); // Infinity