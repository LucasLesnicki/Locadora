const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  tableName: 'user', // Define o nome da tabela como 'usuario'
  timestamps: false // Desativa a criação automática dos campos createdAt e updatedAt
});

//Criar a tabela
//User.sync();

module.exports = User;
