const comment = require('./comment')

module.exports = function (app) {
  app.configure(comment)
}
