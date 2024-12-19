const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

// Conexão com o mysql server
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "hekiranoten", {
  host: "localhost",
  dialect: "mysql",
});

// Config
// Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/cad", (req, res) => {
  res.send("Rota de cadastro de posts");
});

app.listen(8081, () => {
  console.log("Servidor rodando na porta 8081");
});
