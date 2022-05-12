const express = require('express');
const path = require('path');
const calculated = require('./result');
const mongoose = require('mongoose');
require('./db/mongoose');

const port = 8080;

const app = express();

//const dbURI = 'mongodb+srv://robeil1:123456789@cluster0.tp84g.mongodb.net/dbMIU?retryWrites=true&w=majority';
//const mongoose = 'mongodb://localhost:27017/test', { useUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb://localhost:27017/dbMIU', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=> {
    console.log(`connection succesfull`);
}).catch((err) => {
    console.log(`connection failed`);
})
//mongoose.connect('mongodb+srv://robeil1:123456789@cluster0.tp84g.mongodb.net/dbMIU');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});
app.get('/app.js', (req, res) => {
    res.send(calculated.result(req, res));
});
app.listen(port, () => {
    console.log(`listening port http:localhost/${port}`);
});
