require('dotenv').config()
const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URI
})

module.exports = { knex }