const express = require('express')
const cors = require('cors')
const { validarAtualizacaoStatus, validaGetReport, validarSalvarResgistro } = require('../middlewares/middleware')
const { atualizarStatusMensagem, obterListaMensagensPorStatus, salvarRegistroBanco } = require('../controllers/controller')
const routes = express()
routes.use(cors())

routes.all('/', (req, res) => { return res.status(200).json({ message: "Olá mundo!" }) })
routes.post('/insert', validarSalvarResgistro, salvarRegistroBanco)
routes.post('/update', validarAtualizacaoStatus, atualizarStatusMensagem)
routes.get('/reports', validaGetReport, obterListaMensagensPorStatus)

module.exports = { routes }