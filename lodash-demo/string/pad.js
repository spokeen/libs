const pad = require('lodash').pad;

let str = 'abc';

// 将少的位数左右平分再做填充
let temp = pad(str, '8', '*?&');
console.log(temp); // *?abc*?&

let str2 = 'abcd';
temp = pad(str2, 8, '*?&');
console.log(temp); // *?abcd*?

