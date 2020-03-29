const knex = require('knex');

const configuration = require('../../knexfile')

const config
switch (process.env.NODE_ENV) {
  case 'teste':
    config = configuration.test
    break
  case 'dev':
    config = configuration.development
    break
  case 'start':
    config = configuration.production
    break
}

const connection = knex(config);

module.exports = connection;