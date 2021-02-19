const TarefaDAO = require('../DAO/tarefa-dao');
const bd = require("../infra/sqlite-db");
const TarefaBD = new TarefaDAO(bd);
const { validationResult } = require("express-validator");


class ControllerTarefa {
   
  static listarTarefas(){
    return async (req, resp) => {
      try{
        const listaDeTarefas = await TarefaBD.listaTarefas();
        resp.status(200).send(listaDeTarefas);
      }
      catch(err){
        resp.send(err);
      }
    }  
  }

  static listarTarefasById() {
    return async (req, resp) => {
      const id = req.params.id;
      try{
        const listaTarefaById = await TarefaBD.pesquisaById(id);
        resp.status(200).send(listaTarefaById);
      }
      catch(err){
        resp.send(err);
      }
    }
  }

  static inserirTarefa() {
    return async(req,resp) =>{
      const erros = validationResult(req);
      if(!erros.isEmpty()){
        resp.send(`Parâmetros incorretos!<h3>${erros.errors[0].msg}</h3>`);
      }else {
        try{
          const newTarefa = req.body;
          const resultadoAssincrono = await TarefaBD.insereTarefa(newTarefa);
          resp.send(resultadoAssincrono);
        }
        catch(err){
          resp.send(err);
        }
      }
    }
  }

  static deletarTarefa() {
    return async (req, resp) => {
      const id = req.params.id;
      try{
        const tarefaDeletada = await TarefaBD.deletaTarefa(id);
        resp.send(tarefaDeletada);
      }
      catch(err){
        resp.send(err);
      }
    }
  }

  static alterarTarefa(){
    return async(req,resp) => {
      const id = req.params.id;
      const erros = validationResult(req);
      if(!erros.isEmpty()){
        resp.send(`Parâmetros incorretos!<h3>${erros.errors[0].msg}</h3>`);
      }else if (req.body.ID_USUARIO != undefined || req.body.DATACRIACAO != undefined){
        resp.send(`Só é possível alterar TÍTULO, DESCRIÇÃO E STATUS da tarefa!`);
      }
      else{
        try{
          const body = req.body;
          const resultadoAssincrono = await TarefaBD.updateTarefa(id, body);
          resp.send(resultadoAssincrono);
        }
        catch(err){
          resp.send(err);
        }
      }
    }
  }
  
}


 module.exports = ControllerTarefa;