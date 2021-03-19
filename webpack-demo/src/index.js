import join from 'lodash/join';
import './style.css'
import Icon from './icon.png';
import Notes from './data.csv';
import Data from './data.xml';
import json from './data.json5';
import printMe from './print.js';


console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
printMe();
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;
  
    console.log(Notes);
    console.log(Data);

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  
    return element;
  }
  
document.body.appendChild(component());
  