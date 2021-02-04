const UsuariosDAO = require ('../DAO/usuario-dao');
const bd = require('../infra/sqlite-db');
const usuario = new UsuariosDAO(bd);

module.exports = (app) => {


  app.get('/usuario', async (req, resp) => {
    const listaDeUsuarios = await usuario.listaUsuarios();
    resp.send(listaDeUsuarios);
  });

  app.get('/usuario/:id', async (req, resp) => {
    const id = req.params.id;
    const usuarioPesquisado =  await usuario.pesquisaByEmail(id);
    resp.send(usuarioPesquisado);
  });

  app.post('/usuario' , async (req,resp) => {
    const newUsuario = req.body;
    const resultadoAssincrono = await usuario.insereUsuario(newUsuario);
    resp.send(resultadoAssincrono);
  });


  app.delete('/usuario/:id', async (req, resp) => {
    const id = req.params.id;
    const usuarioDeletado = await usuario.deletaUsuario(id)
    .then (usuarioDeletado => {
      resp.send(usuarioDeletado);
    })
    .catch(error => {
      resp.send(error);
    });
  });

  app.put('/usuario/:id', async (req,resp) => {
    const id = req.params.id;
    const updateUsuario = await usuario.updateUsuario(id,req.body)
    .then(updateUsuario => {
      resp.send(updateUsuario);
    })
    .catch(error => {
      resp.send(error);
    });
  });


  }






























/* function preencherBanco() {
  return {
    "nome":"Juliete",
    "email":"juli@gmail.com",
    "senha":"1234",
  },{
    "nome":"Andre",
    "email":"andre@gmail.com",
    "senha":"123456"}
  ;
} */





