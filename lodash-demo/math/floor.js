const floor = require('lodash').floor;


let temp = floor(2.1);
console.log(temp); // 2

temp = floor(2.9);
console.log(temp); // 2


temp = floor(2.3333, 2);
console.log(temp); // 2.33