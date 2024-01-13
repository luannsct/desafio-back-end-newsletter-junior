const { knex } = require("../config/knex");

const atualizarStatusMensagem = async (req, res) => {
    try {
        let { status } = req.body;
        status = status.toUpperCase()
        const id = req.idBusca
        const resultado = await knex("sms_message").where({ id }).update({ status }).returning("*");
        return res.status(200).json
            (resultado[0])
    } catch (error) {
        return res.status(500).json({ message: "Erro interno!" })
    }
}
const obterListaMensagensPorStatus = async (req, res) => {
    let { status } = req.body;
    status = status.toUpperCase()
    try {
        const buscaEnvios = await knex("sms_message").where({ status });
        if (buscaEnvios.length === 0) {
            return res.status(404).json({ message: "Nenhuma mensagem encontrada com o status informado." })
        }
        return res.status(200).json(buscaEnvios)
    } catch (error) {
        return res.status(500).json({ message: "Erro interno!" })
    }
}
const salvarRegistroBanco = async (req, res) => {
    const { phone, message, status } = req.dadosMessage;
    try {
        let resultado = {}
        if (status) {
            resultado = await knex("sms_message").insert({ phone, message, status }).returning("*")
        } else {
            resultado = await knex("sms_message").insert({ phone, message }).returning("*")
        }
        return res.status(200).json(resultado)
    } catch (error) {
        return res.status(500).json({ message: "Erro interno!" })
    }

}
module.exports = { atualizarStatusMensagem, obterListaMensagensPorStatus, salvarRegistroBanco }