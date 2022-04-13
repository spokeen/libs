// Observer 就是 Obervable 的数据消费者
const { Observable } = require("rxjs");

let observable = new Observable((sub) => {
  sub.next(1);
  setTimeout(() => {
    sub.complete(2);
  }, 1000);
  setTimeout(() => {
    sub.error(3);
  }, 1000);
});

const observer = {
  next: (x) => console.log("Observer got a next value: " + x),
  error: (err) => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification"),
};

observable.subscribe(observer);
