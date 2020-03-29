const vmasker = require('vanilla-masker')
const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    let { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId()

    whatsapp = '+55' + whatsapp

    console.log(whatsapp)

    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf
    })

    return res.json({ id })
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
  }
}