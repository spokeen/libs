const { of, Observable } = require("rxjs");
const { map } = require("rxjs/operators");

map((x) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

/**
 * 分为两种操作符：
 *  1、Pipeable Operators：作为 pipe 的参数
 *  2、Creation Operators：创建一个新的 Observable
 */

/**
 *
 * 1、Pipeable Operators
 * 例子：op4()(op3()(op2()(op1()(obs))))
 * 等价于下面
 */

let obs = new Observable();
obs.pipe(op1(), op2(), op3(), op4());

/**
 *
 * 所有的 Creation Operators 的地址： https://v6.rxjs.dev/guide/operators#creation-operators
 */
