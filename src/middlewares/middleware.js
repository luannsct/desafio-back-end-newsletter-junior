const { knex } = require("../config/knex");
const { validaStatus } = require("../utils/utils");

const validarAtualizacaoStatus = async (req, res, next) => {
    try {
        let { id, status } = req.body;
        status = status.toUpperCase()
        if (isNaN(id)) {
            return res.status(400).json({
                message: `Oops.. O id: ${id}. Precisa ser um número.`
            });
        }
        if (!validaStatus(status)) {
            return res.status(400).json({ message: "Oops.. Status enviado inválido" })
        }
        const buscaID = await knex("sms_message").select("id").where({ id })
        if (!buscaID.length) {
            return res.status(404).json({ message: `Oops... Esse id: ${id} não existe, favor verificar.` })
        }
        req.idBusca = buscaID[0].id
        next()
    } catch (error) {
        return res.status(500).json({ message: "Erro interno!" })
    }
}
const validaGetReport = (req, res, next) => {
    const { status } = req.body;

    if (!validaStatus(status.toUpperCase())) {
        return res.status(400).json({ message: "Oops... Status enviado inválido!" })
    }
    next();
}
const validarSalvarResgistro = (req, res, next) => {
    const { phone, message, status } = req.body

    if (!phone, !message) {
        return res.status(400).json({ message: "Oops... Os campos Phone e Message são obrigatórios" });
    }

    if (!status) {
        req.dadosMessage = { phone, message }
        next();
    }
    else {
        if (!validaStatus(status.toUpperCase())) {
            return res.status(400).json({ message: "Oops... Status enviado inválido!" })
        }
        req.dadosMessage = { phone, message, status: status.toUpperCase() }
        next()
    }


}

module.exports = { validarAtualizacaoStatus, validaGetReport, validarSalvarResgistro }