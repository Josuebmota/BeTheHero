const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    try {
      let { name, email, whatsapp, city, uf } = req.body;

      const id = generateUniqueId()

      whatsapp = '+55' + whatsapp

      await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
      })

      return res.status(201).json({ id })
    } catch (err) {
      return res.status(401).json({ erro: "Erro ao criar" })
    }

  },

  async index(req, res) {
    try {
      const ongs = await connection('ongs').select('*')

      return res.status(200).json(ongs)
    } catch (err) {
      return res.status(401).json({ erro: "Erro ao listar" })
    }
  }
}