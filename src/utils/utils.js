const validaStatus = (status) => {
    const statusArray = [
        { "ENVIADO": 1 },
        { "RECEBIDO": 2 },
        { "ERRO DE ENVIO": 3 }]
    return (statusArray[0][status] || statusArray[1][status] || statusArray[2][status])
}

module.exports = { validaStatus }