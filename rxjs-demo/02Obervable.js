const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
  setTimeout(() => {
    subscriber.error();
  });
});

console.log("just before subscribe");
// subscribe 相当于同步代码
observable.subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("just after subscribe");

const foo = new Observable((subscriber) => {
  console.log("Hello");
  //   subscriber.next("Hello");
  subscriber.next(42);
});

foo.subscribe((x) => {});
