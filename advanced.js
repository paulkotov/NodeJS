'use strict';
const ansi   = require('ansi');
const colors = require('colors');
const cursor = ansi(process.stdout);
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Enter 3 params: text, color, background color.');
}
else {
    let param3 = args[2];
    param3 = param3.charAt(0).toUpperCase()+param3.substr(1);
    let param = args[0][args[1]]["bg"+param3];
    
    console.log(param);
    //console.log('Hello'.red.bgYellow);
    cursor.beep();
}