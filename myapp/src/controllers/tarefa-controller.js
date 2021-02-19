const TarefaDAO = require('../DAO/tarefa-dao');
const bd = require("../infra/sqlite-db");
const TarefaBD = new TarefaDAO(bd);
const { validationResult } = require("express-validator");


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
      const erros = validationResult(req);
      console.log(erros) // tirar
      if(!erros.isEmpty()){
        resp.send(`Parâmetros incorretos!<h3>${erros.errors[0].msg}</h3>`);
      }else {
        const newTarefa = req.body;
        const resultadoAssincrono = await TarefaBD.insereTarefa(newTarefa);
        resp.send(resultadoAssincrono);
      }
    }
  }

  static deletarTarefa() {
    return async (req, resp) => {
      const id = req.params.id;
      const tarefaDeletada = await TarefaBD.deletaTarefa(id)
        .then((tarefaDeletada) => {
          resp.send(tarefaDeletada);
        })
        .catch((error) => {
          resp.send(error);
        });
    };
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
      else {
        const body = req.body;
        const resultadoAssincrono = await TarefaBD.updateTarefa(id, body);
        resp.send(resultadoAssincrono);
      }
    }
  }
  
}


 module.exports = ControllerTarefa;