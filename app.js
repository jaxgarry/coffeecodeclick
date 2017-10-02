//pulling in the library express which is a web framework
const express = require('express')
//calls like an object with a bunch of functions 
const app = express()
const engine = require('consolidate');

//configuring the node app
//looking for html in the views directory
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//start of the routing for our app meaning if you are hitting a particular url we need to know what function to call
app.get('/', function (req, res) {
  res.render('index')
})

//start the app on port 3000
app.listen(3000, function() {
  console.log('Coffee is brewing') 
})
