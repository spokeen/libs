const {Command} = require('commander');

let cmd = new Command();

cmd.option('-l, --look <aaa>', 'look yuan', 'duo');

cmd.parse();
let options = cmd.opts();
console.log(options.look);