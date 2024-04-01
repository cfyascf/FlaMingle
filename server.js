const express = require('express');
const routes = require('./routes');
const db = require('./src/config/db');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// EJS
app.set('views', './public/view');
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => console.log('Acesse: http://localhost:3000/'));