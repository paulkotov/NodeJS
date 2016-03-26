'use strict';
const ansi   = require('ansi');
const colors = require('colors');
const cursor = ansi(process.stdout);
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Enter 3 params: text, color, background color.');
}
else {
    var string = "'"+args[0] + "'" + "."+ args[1] + "." + "bg" +args[2];
    console.log(string);
    console.log('Hello!'.red.bgYellow);
    cursor.beep();
}