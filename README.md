# TO-DO api
> É um projeto proposto pela Resilia Educação, que consiste na criação de uma API -- TO DO

## Inicialização do projeto
É necessário ter o `nodejs` instalado em sua máquina.

No cmd digite o comando `npm install` para baixar as dependências desse projeto. Após o download, use o comando `npm start` para iniciar.


## Rotas
 O projeto foi feito usando o conceito de API REST com 4 verbos HTTP `GET, POST, PUT e DELETE` , utilizando-se de requisições à duas tabelas (**usuário** e **tarefa**), que retornam informações do banco de dados.

### Método GET
- Para consultar apenas um **usuário** ou uma **tarefa** utilize o seu testador de requisições de preferência no método `GET` e use as rotas, uma por vez:
`http://localhost:8000/usuario/:id`,
`http://localhost:8000/tarefa/:id` 
Substitua o `:id` pelos identificadores do **usuário**, **tarefa**.
O retorno será um json com as informações do **usuário**, **tarefa** .

Caso queira visualizar todos os clientes ou tarefas, retire o campo `id` da `url`.


### Método POST
- Para inserir um **usuário**, você terá que usar a rota `http://localhost:8000/usuário` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	NOME: "Exemplo",
	EMAIL: "exemplo@exemplo.com",
	SENHA: "exemplo"
}
```
- Para inserir uma **tarefa**, você terá que usar a rota `http://localhost:8000/tarefa` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	TITULO: "Exemplo",
	DESCRICAO: "exemplo@exemplo.com",
	STATUS: "exemplo",
        DATACRICAO: "2021-02-16",
        ID_USUARIO: "1" 
}
```
### Método PUT
- Para atualizar um **usuário**, será necessário acessar a rota `http://localhost:8000/usuario/:id` com o método `PUT` selecionado, substituindo o `:id` pelo identificador do usuário, com a mesma estrutura de dados do **método POST**. 
OBS: Apenas os campos de `NOME`,`SENHA`,`EMAIL` devem ser informados no corpo da requisição.

```json
{
	NOME:"Exemplo2",
	EMAIL:"exemplo2@gmail.com",
	SENHA: "******" 
}
```

### Método DELETE
- Para deletar um **usuário**, você terá que usar a rota `http://localhost:8000/usuario/:id` no método `DELETE`, substituindo o `:id` pelo identificador do usuário.

- Para deletar uma **tarefa**, você terá que usar a rota `http://localhost:8000/tarefa/:id` no método `DELETE`, substituindo o `:id` pelo identificador da tarefa.

## Deploy
Para hospedar gratuitamente nossa aplicação, utilizamos o Heroku. A API pode ser acessada através do link: https://agile-plateau-70677.herokuapp.com/ + rota desejada.

## Ferramentas utilizadas
- nodejs
- express
- express-validator
- body-parser
- sqlite3
- cors
- jest
- supertest

## Autora 
 - [Juliete de Freitas](https://www.linkedin.com/in/juliete-freitas/)