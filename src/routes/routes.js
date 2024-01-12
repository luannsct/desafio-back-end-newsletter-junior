const express = require('express')
const { validarAtualizacaoStatus } = require('../middlewares/middleware')
const { atualizarStatusMensagem } = require('../controllers/controller')
const routes = express()

routes.post('/update', validarAtualizacaoStatus, atualizarStatusMensagem)
module.exports = { routes }