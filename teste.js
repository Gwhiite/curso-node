// Aprendendo a se conectar com bando de dados mysql utilizando a biblioteca sequelize

const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "hekiranoten", {
  host: "localhost",
  dialect: "mysql",
});

// Criando a tabela 'postagens'
const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Inserindo dados no banco a partir da função create()
/* Postagem.create({
  titulo: "Titulo qualquer",
  conteudo: "zegzu",
}); */

// Criando a tabela 'usuarios'
const Usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Inserindo dados no banco a partir da função create()
/* Usuario.create({
  nome: "Branco",
  sobrenome: "Campos",
  idade: 24,
  email: "guibrancodecampos@gmail.com",
}); */

// Função para criar a tabela no mysql server
/* Usuario.sync({ force: true }); */
/* Postagem.sync({ force: true }); */

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso nessa porra");
  })
  .catch((error) => {
    console.log("Deu erro nessa porra: " + error);
  }); */
