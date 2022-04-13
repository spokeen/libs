const { interval } = require("rxjs");
/**
 * 主要用来取消 observable 的
 */
const observable = interval(1000);
const subscription = observable.subscribe((x) => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
