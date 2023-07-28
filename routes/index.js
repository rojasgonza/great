const express = require('express');
const router = express.Router()
const cuentaController = require('../controllers/cuentaController')
const detalleController = require('../controllers/detalleController')
const insumosController = require('../controllers/insumosController')
const proveedorController = require('../controllers/proveedorController')
const stockController = require('../controllers/stockController')

module.exports = function(){
    router.get('/')
    router.post('/cuenta', cuentaController.nuevaCC)
    router.get('/cuenta', cuentaController.ccc)
    router.get('/cuenta/:idCC', cuentaController.mostrarCC);
    router.put('/cuenta/editar/:idCC', cuentaController.editarCC)
    router.delete('/cuenta/eliminar/:idCC', cuentaController.borrarCC)
    router.get('/saldo', cuentaController.totalCC)

    router.post('/detalle', detalleController.nuevoDetalle)
    router.get('/detalle', detalleController.mostrarDetalles);
    router.get('/detalle/:idDetalle', detalleController.mostrarDetalle);
    ///pendiente detalle por factura
    router.put('/detalle/editar/:idDetalle', detalleController.editarDetalle)
    router.delete('/detalle/eliminar/:idDetalle', detalleController.borrarDetalle)
    router.get('/detalleporfactura/:idStock', detalleController.detallePorFact)
    router.get('/saldoporfactura/:idStock', detalleController.saldoPorfact)

    router.post('/insumos', insumosController.nuevoInsumo)
    router.get('/insumos', insumosController.mostrarInsumos)
    router.get('/insumos/:idInsumo', insumosController.mostrarInsumo)
    router.put('/insumos/editar/:idInsumo', insumosController.editarInsumo)
    router.delete('/insumos/eliminar/:idInsumo', insumosController.borrarInsumo)

    router.post('/proveedor', proveedorController.nuevoProveedor)
    router.get('/proveedor', proveedorController.mostrarProveedores)
    router.get('/proveedor/:idProveedor', proveedorController.mostrarProveedor)
    router.put('/proveedor/editar/:idProveedor', proveedorController.editarProveedor);
    router.delete('/proveedor/eliminar/:idProveedor', proveedorController.borrarProveedor)

    router.post('/movimiento', stockController.nuevoMovimiento);
    router.get('/movimiento', stockController.mostrarFacturas)
    router.get('/movimiento/:idStock', stockController.mostrarFactura)
    router.delete('/movimiento/eliminar/:idStock', stockController.eliminarFactura)
    router.get('/stockactual', stockController.stockActual)
    router.get('/ultimomovstock', stockController.ultimoMovstock)

    return router;
}