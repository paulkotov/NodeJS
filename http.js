'use strict';
const http = require('http');
const request = require('request');
const cheerio = require('cheerio');

function onResponse(error, response, body){
    if (!error && response.statusCode === 200){

        const $ = cheerio.load(body);
        console.log('Главная новость с портала e1.ru', $('.main-news-block').text());
    }
}

request('http://e1.ru', onResponse);
// === task2 ===

const text = process.argv.slice(2);
const query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160402T095021Z.dd4adf9751c61860.511db6be30dd760237e75cce4bcc5a39739a5f96&text="+text[0]+"&lang=en-ru&format=plain";
/*http.get(query, function(res){
    console.log('Перевод:'+res.text+" "+res.StatusCode);
}).on('error', function(e){
    console.log('Error:'+e.message);
});
*/
request(query, function(error, response, body){
    if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        console.log('Перевод: '+obj.text); 
    }
}).on('error', function(e){
    console.log('Error:'+e.message);
});