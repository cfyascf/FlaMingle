// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const register = require('./src/controllers/register');
const home = require('./src/controllers/home');

// Iniciando as rotas
route.get('/', home.homeGet);

route.get('/registeruser', register.registerGet);
route.post('/registeruser', register.registerPost);

module.exports = route;