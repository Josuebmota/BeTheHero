const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    try {
      const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

      return res.status(200).json(incidents)
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar incidents desta organização" })
    }

  }
}