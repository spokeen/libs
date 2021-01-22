const ceil = require('lodash').ceil;

let temp = ceil(2.1);
console.log(temp); // 3
temp = ceil(2.9);
console.log(temp); // 3

temp = ceil(2.3333, 2);
console.log(temp); // 2.34
