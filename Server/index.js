var express = require('express');
var cors = require('cors');

var app = express()

app.use(cors());
app.use(express.json());


app.post('/api/register',(req,res) =>{
    console.log(req.body);
 res.send({status:'ok'})
})


app.get('/hello',(req,res) => {
    res.send("hello world");
})



app.listen(3000,() =>{
    console.log("listening port number 3000");
})


