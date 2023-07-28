const Sequelize = require('sequelize');
const db = require('../config/config');

const CuentaCorriente = db.define('cuentacorriente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: Sequelize.DATEONLY
    },
    ingreso: {
        type: Sequelize.DECIMAL(10, 2)
    },
    salida: {
        type: Sequelize.DECIMAL(10, 2)
    },
    aclaraciones: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

module.exports = CuentaCorriente;