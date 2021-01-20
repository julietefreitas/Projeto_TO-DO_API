const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const bd = require('../infra/bd');

const usuarioControler = require('./controllers/usuario-controller');
const tarefaControler = require ('./controllers/tarefa-controller')
const modelUsuario = require('./models/model-usuario');
const modelTarefa = require ('./models/model-tarefa');

const user = new modelUsuario("Pessoa X", "emailinventado@gmail.com","123456");
const tarefa = new modelTarefa("Tarefa1","Minha primeira tarefa","Em andamento","20/01/2020");

console.log(user);
console.log(tarefa);

app.user(bodyParser.json());

usuarioControler(app, bd);
tarefaControler(app, bd);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});  