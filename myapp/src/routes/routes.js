const Controller = require('../controllers/usuario-controller');
const {nome, email} = require('../models/model-usuario');
const {nome,senha} = require('../models/model-usuario');

module.exports = (app) => {

  app.get('/usuario', Controller.listarUsuarios());

  app.get('/usuario/:id' , Controller.listarUsuariosById());

  app.post('/usuario', [nome, email], Controller.inserirUsuario());

  app.delete('/usuario/:id',Controller.deletarUsuario());

  app.put('/usuario:/id',[nome,senha], Controller.modificaUsuario());
}