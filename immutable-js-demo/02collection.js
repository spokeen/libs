const { List, Seq, fromJS } = require("immutable");

// Array 上的方法基本上都可以在 List 上使用
const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
console.log(list1.size);
console.log(list2.size, list3.size, list4.size, list4.get(0));

// Seq
const myObject = { a: 1, b: 2, c: 3 };
console.log(
  Seq(myObject)
    .map((x) => x * x)
    .toObject()
);
// { a: 1, b: 4, c: 9 }

// fromJS
const obj = { 1: "one" };
console.log(Object.keys(obj)); // [ "1" ]
console.log(obj["1"], obj[1]); // "one", "one"
// Immutable 对象属性访问，不会自动将字符串转换成数字
const map = fromJS(obj);
console.log(map, map.get("1"), map.get(1)); // "one", undefined
