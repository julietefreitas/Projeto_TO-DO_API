const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
