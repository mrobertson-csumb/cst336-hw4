const express = require('express');
const app = express();
const faker = require('faker');

app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

// routes
app.route('/').get((req, resp) => resp.render('index.html', {nav: req.url}));
app.get('/history', (req, resp) => resp.render('history.html', {nav: req.url}));
app.get('/comparison', (req, resp) => resp.render('comparison.html', {nav: req.url}));
app.get('/example', (req, resp) => resp.render('example.html', {nav: req.url}));
app.get('/reviews', (req, resp) => resp.render('reviews.html', {nav: req.url, reviews: fakeReviews()}));

// server listener
app.listen('8081', '0.0.0.0', () => console.log('express server is running...'));


function fakeReviews() {
    let reviews = [];
    while (reviews.length < 8) {
        reviews.push(genReview())
    }
    return reviews;


}

function genReview() {
    let emp = faker.fake("{{name.firstName}} {{name.lastName}}, {{name.jobTitle}} at {{company.companyName}}");
    let review = faker.fake("{{lorem.sentence}}");
    return {emp: emp, review: review}
}