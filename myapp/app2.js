const express = require('express');
const app = express();
const port = 3308;

app.get('/tarefa', (req, res) => {
  res.send('Rota ativada com GET e recurso TAREFA: valores de TAREFA devem ser retornados');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})