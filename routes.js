// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const editar = require('./src/controllers/editar');
const  cadastro = require('./src/controllers/cadastro');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialGet);

// route.get('/', home.pagInicialGet);
// route.post('/', home.pagInicialGet);

route.get('/cadastroSala', cadastro.sala);
route.post('/cadastroSala', cadastro.salaInsert);
// route.post('/cadastroAluno', multer(config).single('foto'), cadastro.aluno);

module.exports = route;