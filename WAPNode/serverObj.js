const express = require('express');
const app = express();
const port = 8080;

let person = {
    firstName: "Robeil",
    lastName: "Aregawi",
    role: "Student",
    age: 900,
    gradute: "soon"
}

app.get('/',(req,res) => {
    res.send("Welcome to my page");
});
app.get('/name',(req,res) => {
    //let choose = req.params,person;
  return res.json(person)
    
})

app.listen(port,()=> {
    console.log(`Listening on port ${port}`);
})