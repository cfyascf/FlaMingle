// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const register = require('./controllers/register');
const home = require('./controllers/home');

// Iniciando as rotas
route.get('/', home.homeGet);

route.get('/registeruser', register.userGet);
route.post('/registeruser', register.userPost);

module.exports = route;