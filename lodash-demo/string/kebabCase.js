const kebabCase = require('lodash').kebabCase;

let str = 'FooN=ASDA';
let temp = kebabCase(str);
console.log(str); // FooN=ASDA
console.log(temp); // foo-n-asda