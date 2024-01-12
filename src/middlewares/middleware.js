const { knex } = require("../config/knex");
const { validaStatus } = require("../utils/utils");

const validarAtualizacaoStatus = async (req, res, next) => {
    try {
        const { id, phone, message, status } = req.body;
        if (isNaN(id)) {
            return res.status(400).json({
                message: `Oops.. O id: ${id}. Precisa ser um número.`
            });
        }
        if (validaStatus(status)) {
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

module.exports = { validarAtualizacaoStatus }