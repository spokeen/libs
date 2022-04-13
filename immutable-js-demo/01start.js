const { Map, is } = require("immutable");

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set("b", 50);
console.log(map1.get("b") + "vs" + map2.get("b"));

const map3 = Map({ a: 1, b: 2, c: 3 });

// 通过 equals 判断两个对象的值是否相等，而不是判断它的引用是否相等
console.log(map1.equals(map3)); // true

// 如果值没有改变，将不会产生一个新的对象
const map4 = map1.set("b", 2);
console.log(map4 === map1); // true
