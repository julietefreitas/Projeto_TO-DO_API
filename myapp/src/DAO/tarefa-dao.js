class TarefaDAO {
  constructor(bancoDeDados) {
    this.bancoDeDados = bancoDeDados;
  }

  listaTarefas() {
    return new Promise((resolve, reject) => {
      this.bancoDeDados.all(
        `SELECT * FROM TAREFAS`,
        (error, linhasSelecionadas) => {
          if (error) reject(error);
          else resolve(linhasSelecionadas);
        }
      );
    });
  }

  pesquisaById(id) {
    return new Promise((resolve, reject) => {
      this.bancoDeDados.get(
        `SELECT * FROM TAREFAS WHERE ID = ?`,
        [id],
        (error, resultadoPesquisa) => {
          if (error) reject(`Tarefa não encontrada`);
          else if (resultadoPesquisa == undefined) {
            reject(`Esta tarefa não existe no banco`);
          } else resolve(resultadoPesquisa);
        }
      );
    });
  }

  insereTarefa(newTarefa) {
    return new Promise((resolve, reject) => {
      this.bancoDeDados.run(
        `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)`,
        [
          newTarefa.TITULO,
          newTarefa.DESCRICAO,
          newTarefa.STATUS,
          newTarefa.DATACRIACAO,
          newTarefa.ID_USUARIO,
        ],
        (error) => {
          if(error) reject(`Tarefa não inserida`)
          else resolve(`Tarefa inserida com sucesso!`)
        }
      );
    });
  }

  deletaTarefa(id) {
    return new Promise((resolve, reject) => {
      this.bancoDeDados.run(
        `DELETE FROM TAREFAS WHERE ID = ?`,
        [id],
        function (error) {
          if (error) reject(error);
          if (this.changes == 0) {
            reject("Nenhuma Tarefa com esse identificador foi encontrada!");
          } else resolve("Tarefa deletada com sucesso!");
        }
      );
    });
  }

}

module.exports = TarefaDAO;