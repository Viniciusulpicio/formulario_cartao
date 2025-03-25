const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Cartao extends Model {}

Cartao.init(
  {
    nome: { type: DataTypes.STRING, allowNull: false },
    numero: { type: DataTypes.STRING, allowNull: false, unique: true },
    validade: { type: DataTypes.STRING, allowNull: false },
    cvv: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Cartao',
    tableName: 'cartao',
    timestamps: false,
  }
);

module.exports = Cartao;
