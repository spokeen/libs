const capitalize = require('lodash').capitalize;

let str = 'ADSAS';
let temp = capitalize(str);
console.log(temp); // Adsas

let str2 = 'ASDAS-ASDASD';
temp = capitalize(str2);
console.log(temp); // Asdas-asdasd