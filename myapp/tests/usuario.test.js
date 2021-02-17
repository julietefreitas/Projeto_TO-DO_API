const supertest = require('supertest');

test(`Rota GET de usuários`, ()=>{
  supertest('http://localhost:8000')
  .get('/usuario')
  .expect(200)
  .then(response => {
    expect(response.body[0].ID).toBe(1);
    expect(response.body[0].NOME).toBe("Ana Lu");
    expect(response.body[0].EMAIL).toBe("eugenio.oliveira@bol.com.br");
    expect(response.body[0].SENHA).toBe("conforto");
  });
});

test(`Rota GET de usuários com parâmetro`, ()=>{
  supertest('http://localhost:8000')
  .get('/usuario/:id')
  .expect(200)
  .then(response => {
    expect(response.body[1].ID).toBe(2);
    expect(response.body[1].NOME).toBe("Olívia Ribeiro");
    expect(response.body[1].EMAIL).toBe("olivia.ribeiro@gmail.com");
    expect(response.body[1].SENHA).toBe("********");
  });
});