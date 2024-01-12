const express = require('express')
const { validarAtualizacaoStatus, validaGetReport } = require('../middlewares/middleware')
const { atualizarStatusMensagem, obterListaMensagensPorStatus } = require('../controllers/controller')
const routes = express()

routes.post('/update', validarAtualizacaoStatus, atualizarStatusMensagem)
routes.get('/reports', validaGetReport, obterListaMensagensPorStatus)
module.exports = { routes }