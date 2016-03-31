'use strict';
const ansi   = require('ansi');
const colors = require('colors');
const cursor = ansi(process.stdout);
const readline = require('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const fs = require('fs');
//const args = process.argv.slice(2);
rl.question('What is your name? ', (name)=>{
console.log('Hi, ' + name);
console.log('Try to guess a number I proposed or type "exit" ');
console.log('Enter 1 or 2 :');
rl.prompt();
rl.on('line',(number)=>{
        const rnd = Math.ceil(Math.random()*2);
        if(number == rnd){
            fs.appendFile('log.txt', "win!\n", (err)=>{
                if(err) throw err;
                console.log('Вы выиграли!'.green);
            });
        }else if(number.toLocaleLowerCase().trim() === 'exit'){
            console.log('Bye!');
            rl.close();
        }else if(number != rnd && number <= 2){
            fs.appendFile('log.txt', "lose!\n" ,(err)=>{
                if(err) throw err;
                console.error('Вы проиграли!'.red);
            });
        }else if(number>2){
            console.error('Error!'.red);
        }
    });
});
cursor.beep();
