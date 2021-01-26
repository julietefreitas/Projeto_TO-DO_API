const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const bd = require('./infra/bd');

const usuarioControler = require('./controllers/usuario-controller');
const tarefaControler = require ('./controllers/tarefa-controller');

app.use(bodyParser.json());

usuarioControler(app, bd);
tarefaControler(app, bd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});  