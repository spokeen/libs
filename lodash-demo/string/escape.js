const escape = require('lodash').escape;

let str = 'a < b >';
let temp = escape(str);

console.log(temp); // a &lt; b &gt;