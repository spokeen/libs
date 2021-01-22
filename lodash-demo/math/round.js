const round = require('lodash').round;

let temp = round(2.4);
console.log(temp); // 2

temp = round(2222);
console.log(temp); // 2222

temp = round(2255, -2);
console.log(temp);// 2300