#!/usr/bin/env node

// This is used as an example in the README for:
//    Common option types, boolean and value

// const commander = require('commander'); // (normal include)
const {Command} = require('commander'); // include commander in git clone of commander repo
const program = new Command();
program.version('0.0.1');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-aype <AA>', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaAype) console.log(`- ${options.pizzaAype}`);