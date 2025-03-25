const Cartao = require('../models/Cartao');
const validarCartao = require('../utils/validarNumeroCartao');

const createCartao = async (req, res) => {
  try {
    const { nome, numero, validade, cvv } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !numero || !validade || !cvv) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    // Verifica se o cartão já existe no banco de dados
    const existeCartao = await Cartao.findOne({ where: { numero } });
    if (existeCartao) {
      return res.status(400).json({ message: "Número do cartão já cadastrado." });
    }

    // Cria o novo cartão
    const novoCartao = await Cartao.create({ nome, numero, validade, cvv });
    return res.status(201).json(novoCartao);
    
  } catch (error) {
    console.error('Erro ao criar o cartão:', error);

    // Se o erro for de validação do Sequelize, retorna uma mensagem mais amigável
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Número do cartão já cadastrado no sistema." });
    }

    return res.status(500).json({ message: "Erro ao criar o cartão", error: error.message });
  }
};


const getAllCartoes = async (req, res) => {
  try {
    const cartoes = await Cartao.findAll();
    return res.json(cartoes);
  } catch (error) {
    console.error("Erro ao buscar os cartões:", error);
    return res.status(500).json({ message: "Erro ao buscar os cartões", error: error.message });
  }
};

module.exports = { createCartao, getAllCartoes };
