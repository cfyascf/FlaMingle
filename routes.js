// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const register = require('./src/controllers/register');
const login = require('./src/controllers/login');
const userpage = require('./src/controllers/userpage');

// Iniciando as rotas
route.get('/', home.homeGet);
route.post('/', home.homePost);

route.get('/login', login.loginGet);
route.post('/login', login.loginPost);

route.get('/registeruser', register.registerGet);
route.post('/registeruser', register.registerPost);

route.get('/userpage', userpage.userpageGet);
route.get('/userpageconvert', userpage.userpageconvertGet);
route.get('/userpagewallet', userpage.userpagewalletGet);

module.exports = route;