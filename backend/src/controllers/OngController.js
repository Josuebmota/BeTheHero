const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    try {
      let { name, email, whatsapp, city, uf } = req.body;

      const id = generateUniqueId()

      whatsapp = '+55' + whatsapp

      const ongs = await connection('ongs').where('email', email).select('email').first()

      if (ongs) {
        return res.status(406).json({ erro: "Email já existente" })
      }

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

      if (ongs.length == 0) {
        return res.status(404).json({ erro: "Nenhuma ong cadastrada" })
      }

      return res.status(200).json(ongs)
    } catch (err) {
      return res.status(400).json({ erro: "Erro ao listar" })
    }
  }
}