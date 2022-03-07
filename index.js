var express = require('express');
const res = require('express/lib/response');
var app = express();
const mysql = require('mysql2');
app.use(express.static('views'));
app.set('view engine', 'ejs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // So secure way to do this
    password: 'root',
    database: 'frizeraj'
});
connection.connect();

app.get('/', (req, res) => {
        if (err) throw err;
        res.render('index', { REZULTAT: rows });
});

app.listen(3000);