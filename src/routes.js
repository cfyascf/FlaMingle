// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const register = require('./controllers/register');
const home = require('./controllers/home');

// Iniciando as rotas
route.get('/', home.homeGet);

route.get('/view login', register.userGet);
route.post('/view login', register.userInsert);

module.exports = route;