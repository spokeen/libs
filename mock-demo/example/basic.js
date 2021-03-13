const Mock = require('mockjs');

let Random = Mock.Random;

console.log(Random.boolean(1,9,true))

console.log(Random.natural(1,9));

console.log(Random.integer(-10,10));

console.log(Random.float(-1, 20,1,2))

console.log(Random.character()); // 随机字符

console.log(Random.string('lower', 10, 20));

console.log(Random.range(1,10,3));