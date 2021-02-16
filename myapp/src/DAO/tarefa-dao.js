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
        (error, linhasSelecionadas) => {
          if (error) reject(error);
          else resolve(linhasSelecionadas);
        }
      );
    });

  }

}

module.exports = TarefaDAO;