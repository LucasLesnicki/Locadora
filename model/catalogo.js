const Sequelize = require('sequelize');
const db = require('./database');


const catalogo = db.define('catalogo', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    filme: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'catalogo', // Define o nome da tabela como 'catalogo'
    timestamps: false // Desativa a criação automática dos campos createdAt e updatedAt
  });
  
  // Criar a tabela
  // catalogo.sync();
  
  module.exports = catalogo;
  