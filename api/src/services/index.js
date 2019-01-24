const sessions = require('./sessions/sessions.service.js')
const authentication = require('./authentication')

module.exports = function (app) {
  app.configure(sessions)
  app.configure(authentication)
}
