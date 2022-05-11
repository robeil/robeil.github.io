const express = require('express');
const app = express();

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send(`<form action="/product" method="post">
    <input name ="title">
    <button type="submit">Submit</button>
    </form>`);
});
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

//app.listen(3000);