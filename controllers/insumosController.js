const Insumo = require('../models/insumos')

//nuevo insumo
exports.nuevoInsumo = async (req,res) => {
    const {nombre, propio, precio} = req.body;
    const insumo = await Insumo.create({nombre, propio, precio})
    if(insumo){
        res.json({mensaje: "Insumo creado"})
    } else {
        console.log(error);
    }
}

//mostrar insumos
exports.mostrarInsumos = async (req, res, next) => {
    const insumos = await Insumo.findAll({});
    if(!insumos){
        console.log(error);
        next()
    }
    res.json(insumos)
}

// mostrar insumo
exports.mostrarInsumo = async (req, res, next) => {
    let condition = {where: {id: req.params.idInsumo}}
    const insumo = await Insumo.findOne(condition)
    if(!insumo){
        res.json({mensaje: "no existe el insumo"})
        next()
    }
    res.json(insumo)
}

//editar insumo
exports.editarInsumo = async (req, res, next) => {
    let condition = { where: {id: req.params.idInsumo}}
    const insumo = await Insumo.update({
        nombre: req.body.nombre,
        propio: req.body.propio,
        precio: req.body.precio
    }, condition)
    res.json({mensaje: "Editado correctamente"})
}

// borrar insumo
exports.borrarInsumo = async (req, res, next) => {
    let condition = { where: { id: req.params.idInsumo }}
    const insumo = await Insumo.destroy(condition)
    if (!insumo) {
        console.log(error);
        next()
    }
}