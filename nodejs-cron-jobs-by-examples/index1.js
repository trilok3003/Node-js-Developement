const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

app = express();
// Task1 : Schedule tasks to be run on the server.
// cron.schedule('* * * * *', function() {
//     console.log('running a task every minute');
//   });
  // Taks2 : Remove the error.log file every twenty-first day of the month.
cron.schedule('0 0 29 * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    fs.unlink('./error.log', err => {
      if (err) throw err;
      console.log('Error file successfully deleted');
    });
  });
app.listen(11000);