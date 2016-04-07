'use strict';
const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const bodyParser = require('body-parser');
const templater = require('consolidate');
const app = express();

app.engine('hbs', templater.handlebars); //
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
app.use(bodyParser.json);

app.get('/', (req, res)=> {
    res.render('index');

});

app.post('/news', (req, res) => {
    function getNews(address, selector, title){
        request(address, (error, response, body) =>{
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(body);
                var count_elem = $(selector).length;
                for (var i = 0; i < count && i < count_elem; i++) {
                    news[i] = $(selector).eq(i).text();
                }
            }
        res.render('index', {
                name: title,
                news: news
            });    
        });
    }

    var category = req.body.news;
    var count = req.body.count_news;
    var news = [];
    switch(category){
        case 'e1.ru':
            var address = 'http://e1.ru';
            var selector = '.main-news-block';
            var title = 'Новости e1.ru';
            getNews(address, selector, title);
            break;
        case '66.ru':
            var address = 'http://66.ru';
            var selector = '.b-news-item';
            var title = 'Портал 66.ru';
            getNews(address, selector, title);
            break;
        case 'uralweb.ru':
            var address = 'http://uralweb.ru';
            var selector = '.nsm_left';
            var title = 'Uralweb.ru';
            getNews(address, selector, title);
            break;
        }
});

app.listen(5000);