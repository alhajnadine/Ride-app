/*--------------------Database connection---------------------------*/
//killall -9 node
const mysql = require('mysql');
const express = require('express');
var app = express();

//Access the DB
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'ride_app',
    port: '3306'
  });

//DB connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection établie!');
  });

//users display
app.get('', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
        var data = results;
        console.log(data);
    });
  });
//Adding static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))



//starting the server 
app.listen('5660', () => {
    console.log('Le serveur écoute au port 5660');
  });