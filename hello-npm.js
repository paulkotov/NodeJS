var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor.beep();
cursor.red();
cursor.bg.grey();
cursor.write('Hello World!');
cursor.reset();