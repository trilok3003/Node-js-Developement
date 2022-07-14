const express = require('express');
const app=express();
const port=3000;
// homepage routing
app.get('/',(req,res)=>{
    res.send('GET request to the homepage');
});
app.post('/',(req,res)=>{
    res.send('POST request to the homepage');
});
app.put('/',(req,res)=>{
    res.send('PUT request to the homepage');
});
app.delete('/',(req,res)=>{
    res.send('Delete request to the homepage');
});
app.all('/secret', function (req, res, next) {
    res.send('Accessing the secret section ...')
    next() // pass control to the next handler
  })
  // route handlers
  app.get('/multiple', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from B!')
  })
  var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
   // res.send('Hello from C1!')
   console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/multiple/c', [cb0, cb1, cb2])

  // using app.route
  app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
  .delete(function (req, res) {
    res.send('delete the book')
  })
  
// using express.router() users and its routing
var users=require('./routes/routes');
app.use("/users",users);
app.listen(port,()=>{
  console.log(`express app listening on port ${port}!`);
});
