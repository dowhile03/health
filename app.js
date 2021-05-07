

const express = require('express');
const exphbs = require("express-handlebars");

const app = express();
const port = 3000 || process.env.PORT;

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')
app.use('/',require('./routes/home'))
app.use('/',require('./routes/blood'))
app.listen(port)