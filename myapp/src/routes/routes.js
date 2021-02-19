const ControllerUsuario = require('../controllers/usuario-controller');
const ControllerTarefa = require('../controllers/tarefa-controller');
const {nome,senha,email} = require('../models/model-usuario');
const {titulo, descricao ,status,datacriacao, id_usuario} = require('../models/model-tarefa');


module.exports = (app) => {

  /*Rotas da entidade USUÁRIO*/
  
  app.get('/usuario',ControllerUsuario.listarUsuarios());

  app.get('/usuario/:id' ,ControllerUsuario.listarUsuariosById());

  app.post('/usuario', [nome, email],ControllerUsuario.inserirUsuario());

  app.delete('/usuario/:id',ControllerUsuario.deletarUsuario());

  app.put('/usuario/:id',[nome,senha],ControllerUsuario.alterarUsuario());

  /*Rotas da entidade TAREFA*/

  app.get('/tarefa',ControllerTarefa.listarTarefas());

  app.get('/tarefa/:id',ControllerTarefa.listarTarefasById());

  app.post('/tarefa',[titulo,descricao,status,datacriacao,id_usuario],ControllerTarefa.inserirTarefa());

  app.delete('/tarefa/:id',ControllerTarefa.deletarTarefa());

  app.put('/tarefa/:id',[titulo,descricao,status],ControllerTarefa.alterarTarefa());
}