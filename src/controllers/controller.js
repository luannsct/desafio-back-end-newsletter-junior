const { knex } = require("../config/knex");

const atualizarStatusMensagem = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.idBusca
        const resultado = await knex("sms_message").where({ id }).update({ status }).returning("*");
        return res.status(200).json
            (resultado[0])
    } catch (error) {
        return res.status(500).json({ message: "Erro interno!" })
    }
}
module.exports = { atualizarStatusMensagem }