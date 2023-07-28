const Sequelize = require('sequelize');
const db = require('../config/config');
const Proveedor = require('./proveedor')
const Stock = db.define('stocks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    fecha:{
        type: Sequelize.STRING
    },
    aclaraciones: {
        type: Sequelize.STRING
    }
},  {timestamps: false})

Stock.Proveedor = Stock.belongsTo(Proveedor,{
    onDelete: 'cascade',
    onUpdate: 'cascade'
});
module.exports = Stock;