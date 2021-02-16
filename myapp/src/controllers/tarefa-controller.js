const Tarefa = require('../models/model-tarefa');
const TarefaDAO = require('../DAO/tarefa-dao');
const bd = require("../infra/sqlite-db");
const TarefaBD = new TarefaDAO(bd);
const { validationResult } = require("express-validator");
/* 
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
 */
 class ControllerTarefa {
   
  static listarTarefas(){
    return async (req, resp) => {
      const listaDeTarefas = await TarefaBD.listaTarefas()
      .then((listaDeTarefas) => {
        resp.send(listaDeTarefas);
      })
      .catch((error) =>{
        resp.send(error);
      });
    }  
  }

  static listarTarefasById() {
    return async (req, resp) => {
      const id = req.params.id;
      const listaTarefaById = await TarefaBD.pesquisaById(id)
      .then((listaTarefasById) => {
        resp.send(listaTarefasById);
      })
      .catch((error) =>{
        resp.send(error);
      }); 
    }
  }

  static inserirTarefa() {
    return async(req,resp) =>{
      const newTarefa = req.body;
      const resultadoAssincrono = await TarefaBD.insereTarefa(newTarefa);
      resp.send(resultadoAssincrono);
    }
  }

}
 module.exports = ControllerTarefa;