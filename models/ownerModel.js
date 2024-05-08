const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

const Owner = sequelize.define('Owner', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Owner.sync().then(() => {
    console.log('Tabela Owners criada com sucesso.');
}).catch((error) => {
    console.error('Erro ao criar a tabela Owners:', error);
});

module.exports = Owner;
