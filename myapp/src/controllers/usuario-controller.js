const Usuario = require('../models/model-usuario');

module.exports = (app , bd) => {
  app.get('/usuario', (req, resp) => {
    console.log('Rota ativada com GET e recurso retornando um objeto JSON');
    resp.send(bd.usuario);
  });

  app.post('/usuario', (req, resp) => {
    resp.send("Rota ativada com POST");
    const user = new Usuario(req.body.nome, req.body.email, req.body.senha);
    bd.usuario.push(user);
  })
}

