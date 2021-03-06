const {body} = require('express-validator');

module.exports = {
  nome: body("NOME")
    .isLength({ min:3 })
    .withMessage(`Nome de usuário menor que o permitido`)
    .isLength({ max:15 })
    .withMessage(`Nome de usuário maior que o permitido`)
    .isString()
    .withMessage(`Caracteres não permitidos`),
  email: body("EMAIL")
    .isEmail()
    .withMessage(`Email informado está no formato incorreto`),
  senha: body("SENHA")
    .isString()
    .withMessage(`Passe uma senha no formato de string`)
    .isLength({min:6, max:10})
    .withMessage(`Senha com tamanho incorreto!`)
};
