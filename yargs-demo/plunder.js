#!/usr/bin/env node
console.log(process.argv);
console.log(process.argv.slice(2));
var argv = require("yargs/yargs")(process.argv).argv;
console.log(argv);
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log("Plunder more riffiwobbles!");
} else {
  console.log("Retreat from the xupptumblers!");
}

console.log(require("yargs/yargs")(["-x", "1", "-y", "2"]).argv);

console.log(require("yargs/yargs")().parse(["-x", "1", "-y", "2"]));

console.log(require("yargs/yargs")([]).parse());

class Test {
  constructor(age) {
    console.log(age, this.age);
  }
}

class MyTest {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getTest() {
    let test = new Test(this);
  }
}

let t = new MyTest("dd", 23);
t.getTest();
