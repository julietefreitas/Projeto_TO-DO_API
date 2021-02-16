const {body} = require('express-validator');

module.exports = {
  titulo: body("TITULO")
    .isLength({ min: 10 })
    .withMessage(`Titulo de tarefa menor que o permitido`)
    .isLength({ max: 64 })
    .withMessage(`Titulo de tarefa maior que o permitido`)
    .isString()
    .withMessage(`Titulo com caracteres não permitidos`),
  descricao: body("DESCRICAO")
    .isLength({ min: 10 })
    .withMessage(`Descrição menor que o tamanho mínimo`)
    .isLength({ max: 32 })
    .withMessage(`Descrição maior que o tamanho permitido`),
  status: body("STATUS")
    .equals("TODO","DOING","CONTÍNUO")
    .withMessage(`Status fora das possibilidades`),
  datacriacao: body("DATACRIACAO")
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage(`Data no formato incorreto`),
};