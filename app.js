
const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')
app.use('/',require('./routes/home'))
app.use('/',require('./routes/blood'))
app.use('/',require('./routes/Donate'))
app.use('/',require('./routes/helpline'))

app.use('/',require('./routes/daignosis'))


app.listen(port)