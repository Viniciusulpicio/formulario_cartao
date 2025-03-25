const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database'); 
const Cartao = require('../models/Cartao'); 

// Criando a conexão
const connection = new Sequelize(dbConfig);

Cartao.init(connection);

connection.sync()
  .then(() => {
    console.log('Tabela Cartao criada com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao criar a tabela Cartao:', err);
  });


module.exports = connection;
