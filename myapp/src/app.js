const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioControler = require('./controllers/usuario-controller');
const tarefaControler = require ('./controllers/tarefa-controller');
const port = 8000;


app.use(bodyParser.json());
app.use(cors());

usuarioControler(app);
tarefaControler(app);

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});  