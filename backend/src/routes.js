const express = require("express")

const OngController = require('./controllers/OngController')
const IncidentCotroller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentCotroller.create)
routes.get('/incidents', IncidentCotroller.index)
routes.delete('/incidents/:id', IncidentCotroller.delete)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)


module.exports = routes;