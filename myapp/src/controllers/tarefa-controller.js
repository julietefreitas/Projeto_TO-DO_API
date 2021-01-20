const Tarefa = require('../models/model-tarefa');

module.exports = (app, bd) => {
  app.get('/tarefa', (req, resp) => {
    console.log('Rota ativada com GET e recurso retornando um objeto JSON');
    resp.send(bd.tarefa);
  });

  app.post('/tarefa', (req, resp) => {
    resp.send("Rota ativada com POST ");
    const tarefa = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao);
    bd.tarefa.push(tarefa);
  })
}


