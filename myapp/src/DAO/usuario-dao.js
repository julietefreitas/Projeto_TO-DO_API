class UsuariosDAO {
  constructor(bancoDeDados) {
    this.bancoDeDados = bancoDeDados;
  }

  listaUsuarios() {
    return new Promise ((resolve,reject) => {
      this.bancoDeDados.all(`SELECT * FROM USUARIOS`, (error, linhasSelecionadas) => {
        if(error)reject(error)
        else(resolve(linhasSelecionadas));
      }); 
    });
  }

  pesquisaByEmail(id) {
    return new Promise ((resolve,reject) =>{
      this.bancoDeDados.get(`SELECT * FROM USUARIOS WHERE ID = ?`,[id], (error, resultadoPesquisa) => {
        if(error)reject(error)
        else(resolve(resultadoPesquisa));
      });
    });
  }

   insereUsuario(newUsuario) {
    return new Promise ((resolve, reject) => {
      this.bancoDeDados.run(`INSERT INTO USUARIOS (NOME,EMAIL,SENHA) VALUES (?,?,?)`, [newUsuario.NOME, newUsuario.EMAIL, newUsuario.SENHA], (error) => {
        if(error)reject(`Usuário não inserido!`);
        else resolve("Usuário inserido com sucesso!");
      });
    });
  }

  deletaUsuario(id){
    return new Promise ((resolve, reject) => {
      this.bancoDeDados.run(`DELETE FROM USUARIOS WHERE ID = ?`, [id], function (error) {
        if(error)reject(error);
        if(this.changes == 0) {
          reject("Nenhum usuário com esse identificador foi encontrado!");
        }
        else resolve("Usuário deletado com sucesso!");
      });
    });
  }

  updateUsuario(id, body){
    console.log(body);
    return new Promise ((resolve, reject) => {
      this.bancoDeDados.run(`UPDATE USUARIOS SET NOME=?, EMAIL=?,SENHA=? WHERE ID=?`, [body.NOME,body.EMAIL,body.SENHA, id], (error) => {
        if(error)reject(error);
        if(this.changes == 0) {
          reject("Nenhum usuário com esse identificador foi encontrado!");
        }
        else resolve(`Alteração feita com sucesso!`);
      });
    });
  }
}

module.exports = UsuariosDAO;
