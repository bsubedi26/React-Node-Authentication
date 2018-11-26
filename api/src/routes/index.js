const comment = require('./comment')
const users = require('./users')
const music = require('./music')

module.exports = function (app) {
  app.configure(comment)
  app.configure(users)
  app.configure(music)
}
