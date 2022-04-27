function classzz(target) {}

function filedzzz(target, prop) {
  console.log("filedzzz", target, prop);
}

function methodzzz(target, prop, dec) {
  console.log("methodzzz", target, prop, dec);
}

@classzz
export class Student {
  @filedzzz
  status = "abc";

  @methodzzz
  getStatus() {}
}

let stu = new Student();
