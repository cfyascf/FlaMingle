// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");

// Recebendo arquivo do multer que criamos
const config = require('../src/config/multer');

// Home user irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/homeUser', multer(config).single('photo'), cadastro.alunoInsert);

// Importando os Controllers
const register = require('./controllers/register');
const home = require('./controllers/home');

// Iniciando as rotas
route.get('/', home.homeGet);

route.get('/view login', register.userGet);
route.post('/view login', register.userInsert);

module.exports = route;