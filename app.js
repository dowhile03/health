const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
app.set('view engine', 'hbs')
app.use('/',require('./routes/home'))
app.listen(port)