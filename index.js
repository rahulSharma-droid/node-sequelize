const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
require('./database/sequelize');

const app = express();

app.use('/first', require('./routes/first'));

app.use('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port : ${PORT}`));