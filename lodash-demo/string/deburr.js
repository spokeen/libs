const deburr = require('lodash').deburr;

let str = 'déjà vu';
let temp = deburr(str);
console.log(temp); // deja vu