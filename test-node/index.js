const express = require('express')
const app = express();
var square = require('./export');
console.log('The area of a square with a width of 4 is ' + square.area(4));
console.log('The perimeter of a square with a width of 4 is ' + square.perimeter(5));
setTimeout(function() {
    console.log('First');
    }, 3000);
 console.log('Second');

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });
  // router
  var route = require('./route');
// ...
app.use('/route', route);



app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
