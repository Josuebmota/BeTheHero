const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    try {
      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

      if (!ong) {
        return res.status(404).json({ error: 'Não existe ongs com esse ID' })
      }

      return res.status(201).json(ong)
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao fazer longin' })
    }
  }
}