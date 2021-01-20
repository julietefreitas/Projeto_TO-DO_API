
module.exports = (app) => {
  app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso TAREFA através do nodemon');
  });
}


