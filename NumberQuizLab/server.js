const express = require('express');
const path = require('path');
const { questions, answers } = require('./givenArray');

let score = 0;
let index = 0;
const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    index = 0;
    res.render(path.join(__dirname,'./views/index.pug'), {score: score,sequence: questions[index]
 });
});

app.post('/submit', function (req, res) {

    
    var input = req.body.answer;

    if (input == answers[index]) {
        score++;
    }
    index++;
    if (index == questions.length) {

        res.render(path.join(__dirname,'./views/result.pug'),{score: score,max: questions.length});
        index = 0;
        score = 0;
        return;
    }
    res.render(path.join(__dirname, 'views', 'index.pug'), {
        score: score,
        sequence: questions[index]
    });
});

app.listen(port, () => {
    console.log(`The server is running on http:localhost ${port}`);
})
