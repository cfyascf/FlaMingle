// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const register = require('./src/controllers/register');
const home = require('./src/controllers/home');
const userpage = require('./src/controllers/userpage');

// Iniciando as rotas
route.get('/', home.homeGet);

route.get('/registeruser', register.registerGet);
route.post('/registeruser', register.registerPost);

route.get('/userpageconvert', userpage.userpageGet);

module.exports = route;