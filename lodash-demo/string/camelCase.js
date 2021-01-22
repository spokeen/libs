const camelCase = require('lodash').camelCase;


// 将字符串转换为驼峰
let temp = camelCase('FOO BAR');
console.log(temp); // fooBar


temp = camelCase('--foo-bar--');
console.log(temp); // fooBar

