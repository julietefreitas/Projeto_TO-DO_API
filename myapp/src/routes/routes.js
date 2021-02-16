const ControllerUsuario = require('../controllers/usuario-controller');
const ControllerTarefa = require('../controllers/tarefa-controller');
const {nome, email} = require('../models/model-usuario');
//const {nome,senha} = require('../models/model-usuario');

module.exports = (app) => {

  app.get('/usuario', ControllerUsuario.listarUsuarios());

  app.get('/usuario/:id' , ControllerUsuario.listarUsuariosById());

  app.post('/usuario', [nome, email], ControllerUsuario.inserirUsuario());

  app.delete('/usuario/:id', ControllerUsuario.deletarUsuario());

 // app.put('/usuario:/id',[nome,senha], ControllerUsuario.modificaUsuario());

  app.get('/tarefa', ControllerTarefa.listarTarefas());

  app.get('/tarefa/:id', ControllerTarefa.listarTarefasById());

}