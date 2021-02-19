const UsuariosDAO = require("../DAO/usuario-dao");
const bd = require("../infra/sqlite-db");
const UsuarioBD = new UsuariosDAO(bd);
const { validationResult } = require("express-validator");

class ControllerUsuario {
  static listarUsuarios() {
    return async (req, resp) => {
      try{
        const listaDeUsuarios = await UsuarioBD.listaUsuarios();
        resp.status(200).send(listaDeUsuarios);
      }
      catch(err){
        resp.send(err);
      }
    }
  }

  static listarUsuariosById() {
    return async (req, resp) => {
      const id = req.params.id;
      try{
        const listaUsuarioById = await UsuarioBD.pesquisaById(id);
        resp.status(200).send(listaUsuarioById);
      }
      catch(err){
          resp.status.send(err);
        }
    };
  }

  static inserirUsuario() {
    return async (req, resp) => {
      const erros = validationResult(req);
      if(!erros.isEmpty()) {
        resp.send(`Parâmetros incorretos!<h3>${erros.errors[0].msg}!</h3>Usuário não inserido!`);
      } else{
          try{
            const newUsuario = req.body;
            const resultadoAssincrono = await UsuarioBD.insereUsuario(newUsuario);
            resp.send(resultadoAssincrono);
          } catch(err) {
            resp.send(err);
          }
      }
    };
  }

  static deletarUsuario() {
    return async (req, resp) => {
      const id = req.params.id;
      try{
        const usuarioDeletado = await UsuarioBD.deletaUsuario(id)
        resp.send(usuarioDeletado);
      }
      catch(err){
         resp.send(err);
      }
    };
  }

  static alterarUsuario(){
    return async(req,resp) => {
      const id = req.params.id;
      const erros = validationResult(req);
      if(!erros.isEmpty()){
        resp.send(`Parâmetros incorretos!<h3>${erros.errors[0].msg}</h3>`);
      }else if (req.body.EMAIL != undefined || req.body.ID != undefined){
        resp.send(`Só é possível alterar NOME E SENHA do seu usuário!`);
      }
      else {
        try {
          const body = req.body;
          const resultadoAssincrono = await UsuarioBD.updateUsuario(id, body);
          resp.send(resultadoAssincrono);
        }
        catch(err){
          resp.send(err);
        }
      }
    }
  }

}

module.exports = ControllerUsuario;

