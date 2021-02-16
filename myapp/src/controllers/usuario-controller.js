const UsuariosDAO = require("../DAO/usuario-dao");
const bd = require("../infra/sqlite-db");
const UsuarioBD = new UsuariosDAO(bd);
const { validationResult } = require("express-validator");

class ControllerUsuario {
  static listarUsuarios() {
    return async (req, resp) => {
      const listaDeUsuarios = await UsuarioBD.listaUsuarios();
      resp.send(listaDeUsuarios);
    };
  }

  static listarUsuariosById() {
    return async (req, resp) => {
      const id = req.params.id;
      const listaUsuarioById = await UsuarioBD.pesquisaById(id)
        .then((listaDeUsuarios) => {
          resp.send(listaDeUsuarios);
        })
        .catch((error) => {
          resp.send(error);
        });
    };
  }

  static inserirUsuario() {
    return async (req, resp) => {
      const erros = validationResult(req);
      console.log(erros);
      if (!erros.isEmpty()) {
        resp.send(`Parâmetros incorretos!<h3>Usuário não inserido</h3>`);
      } else {
        const newUsuario = req.body;
        const resultadoAssincrono = await UsuarioBD.insereUsuario(newUsuario);
        resp.send(resultadoAssincrono);
      }
    };
  }

  static deletarUsuario() {
    return async (req, resp) => {
      const id = req.params.id;
      const usuarioDeletado = await UsuarioBD.deletaUsuario(id)
        .then((usuarioDeletado) => {
          resp.send(usuarioDeletado);
        })
        .catch((error) => {
          resp.send(error);
        });
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
        const body = req.body;
        const resultadoAssincrono = await UsuarioBD.updateUsuario(id, body);
        resp.send(resultadoAssincrono);
      }
    }
  }

}

module.exports = ControllerUsuario;

