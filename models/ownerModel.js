const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Owner = db.define('Owner', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING
    }
});

module.exports = Owner;