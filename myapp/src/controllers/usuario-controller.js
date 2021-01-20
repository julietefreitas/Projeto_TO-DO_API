

module.exports = (app , bd) => {
  app.get('/usuario', (req, res) => {
    res.send('Rota ativada com POST e recurso USUÁRIO sendo retornado usando POST');
  });

  app.post('/usuario', (req, resp) => {
    console.log(`Corpo da Requisição: ${req.body.nome}`);
    bd.usuario
    resp.send("Ok!");
  })
}

