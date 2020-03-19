const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'audiblyBottomPlayer'
});
connection.connect();

app.listen(port, () => console.log(`Example app listening on port ${port}`));

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/songs', (req, res) => {

  connection.query('SELECT * FROM songs', function(err, data) {
    if (err) {
      console.error('error getting data from db: ', err);
    } else {
      res.send(data);
    }
  });

  // connection.end();
});