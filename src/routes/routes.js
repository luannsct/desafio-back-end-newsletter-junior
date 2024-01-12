const express = require('express')
const { validarAtualizacaoStatus, validaGetReport, validarSalvarResgistro } = require('../middlewares/middleware')
const { atualizarStatusMensagem, obterListaMensagensPorStatus, salvarRegistroBanco } = require('../controllers/controller')
const routes = express()
routes.post('/insert', validarSalvarResgistro, salvarRegistroBanco)
routes.post('/update', validarAtualizacaoStatus, atualizarStatusMensagem)
routes.get('/reports', validaGetReport, obterListaMensagensPorStatus)
module.exports = { routes }