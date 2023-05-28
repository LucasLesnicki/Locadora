const Sequelize = require('sequelize');
const db = require('./database');
const User = require('./user');
const Catalogo = require('./catalogo');

const Estante = db.define('estante', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  filme_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Catalogo,
      key: 'id'
    }
  },
  nome_filme: {
    type: Sequelize.STRING, // armazena o nome do filme
    allowNull: false,
  },
}, {
  tableName: 'estante', // Define o nome da tabela como 'estante'
  timestamps: false // Desativa a criação automática dos campos createdAt e updatedAt
});

module.exports = Estante;
