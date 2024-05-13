const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Owner = require('./ownerModel');

// Remova a definição da coluna ownerId do modelo Pet
const Pet = db.define('Pet', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// Defina a associação e especifique o nome da coluna da chave estrangeira
Pet.belongsTo(Owner, { as: 'owner', foreignKey: 'ownerId' });
Owner.hasMany(Pet, { as: 'pets', foreignKey: 'ownerId' });

module.exports = Pet;
