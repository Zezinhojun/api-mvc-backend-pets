const { Sequelize } = require('sequelize');

// Criando uma instância do Sequelize para conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;
