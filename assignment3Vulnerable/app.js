//000859536
//David VanAsselberg
//11/07/2022

const express = require('express');
const app = express();
const path = require('path')
const {readList} = require('./dbfunc')
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './Client/views'));//show express the views directory
app.use(express.urlencoded({ extended: true }));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  const name = ""
  res.render('name',{name});
});
app.post('/getName', function(req, res) {
  const name = req.body.FirstName;

  res.render("name", {name});
});
app.get("/List",readList);
app.get("/dom",function(req, res) {
  //run this: ?Name='<script>alert(123)</script>'
  res.render('domBased');
});


app.listen(8080,function(){
    console.log('Server is listening on port 8080');
});
