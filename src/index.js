require('dotenv').config();  // Carrega as variáveis de ambiente

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa o cors
const sequelize = require('./config/database');
const cartaoRoutes = require('./router');

const app = express();

// Usando o CORS para permitir as requisições do front-end
app.use(cors());  // Isso vai permitir todas as origens, você pode configurar mais restrições se necessário

app.use(bodyParser.json());

// Usando a rota de cartões
app.use('/cartoes', cartaoRoutes);

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log("Banco de dados sincronizado!"))
  .catch(err => console.error("Erro ao sincronizar o banco de dados:", err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
