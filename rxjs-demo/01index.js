const {EventEmitter} = require('events');
const {fromEvent} = require('rxjs')
const {scan,throttleTime,map} = require('rxjs/operators')

let event = new EventEmitter();

/**
 * 例子1：
 * document.addEventListener('click', () => console.log('Clicked!'));
 */

fromEvent(event, 'click').subscribe(() =>　console.log(1));
event.emit('click');


/**
 * 例子2：
 * let count = 0;
 * document.addEventListener('click', () => console.log(`Clicked ${++count} times`));
 */
fromEvent(event, 'count').pipe(scan(count => count + 1, 0)).subscribe((count) => console.log(`Clicked ${count} times`))
event.emit('count');
event.emit('count');

/**
 * 
let count = 0;
let rate = 1000;
let lastClick = Date.now();
document.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});
 */
fromEvent(event, 'flow').pipe(throttleTime(1000),  scan(count => count + 1, 0))
.subscribe(count => console.log(`Clicked flow ${count} times`));
event.emit('flow');



/**
 * 例子4：
let count = 0;
const rate = 1000;
let lastClick = Date.now();
document.addEventListener('click', event => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});
 */
fromEvent(event, 'data').pipe(throttleTime(1000), map(event => {console.log(event); return event}),  scan((count,event) =>   event + count, 0))
.subscribe(count => console.log(`Clicked data ${count} times`));
event.emit('data', 2);