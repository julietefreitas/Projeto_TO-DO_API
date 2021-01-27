const Usuario = require('../models/model-usuario');

module.exports = (app , bd) => {

  app.get('/usuario', (req, resp) => {
    console.log('Rota ativada com GET e recurso retornando um objeto JSON');
    console.log(bd.usuario)
    resp.send(bd.usuario);
  });

  app.get('/usuario/:email', (req, resp) => {
    const email = req.params.email;
    const usuarioSelecionados =  [];
    for (let user of bd.usuario) {
      if (email == user.email)
        console.log(user)
        usuarioSelecionados.push(user);
        //resp.send(`Usuario encontrado:${user}`);
    }
    resp.send(usuarioSelecionados);
    //bd.usuario.push(preencherBanco());
  });


  app.post('/usuario', (req, resp) => {
    const user = new Usuario(req.body.nome, req.body.email, req.body.senha);
    //bd.usuario.push(preencherBanco());
    resp.send("Rota ativada com POST");
  });

  app.delete('/usuario/:email', (req, resp) => {
    const email = req.params.email;
    for (let i= 0; i< bd.usuario.length; i++) {
      if (bd.usuario[i].email == email) {
        bd.usuario.splice(i,1);
        resp.send("<h3>Usuário excluído com sucesso</h3>")  
      }
    }
  }) ; 

  app.put('/usuario/:email', (req,resp) => {
    const email = req.params.email;
    for (let i = 0; i < bd.usuario.length; i++) {
      if(bd.usuario[i].email == email) {
        bd.usuario[i].nome = req.body.nome;
        bd.usuario[i].senha = req.body.senha;
        resp.send(`<h3>Registro: Nome e Senha do usuário com email ${email} foram atualizados</h3>`);
      }
    }
  })


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





