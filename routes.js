// Iniciando Multer
const multer = require("multer");

// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');

// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const register = require('./src/controllers/register');
const login = require('./src/controllers/login');
const userpage = require('./src/controllers/userpage');
const edit = require('./src/controllers/edit');

// Iniciando as rotas
route.get('/', home.homeGet);
route.post('/', home.homePost);

route.get('/login', login.loginGet);
route.post('/login', login.loginPost);

route.get('/registeruser', register.registerGet);
route.post('/registeruser', register.registerPost);


route.post('/userpage', multer(config).single('photo'), edit.editUser);
route.get('/userpage', userpage.userpageGet);

route.get('/userpageconvert', userpage.userpageconvertGet);

route.get('/userpagewallet', userpage.userpagewalletGet);
route.post('/userpagewallet', userpage.userwalletPost);

module.exports = route;