const logger = require('../logger')
const chalk = require('chalk')

// To see more detailed messages, uncomment the following line:
// logger.level = 'debug';

const options = {
  before: chalk.yellow.bold,
  after: chalk.green.bold,
  error: chalk.red.bold,
  DEFAULT: chalk.black.bold
}

const logType = (type) => options[type] ? options[type] : options.DEFAULT

module.exports = function () {
  return hook => {
    let message = `${hook.type} app.service('${hook.path}').${hook.method}()`
    const logColor = logType(hook.type)
    logger.info(logColor(message))

    // if (hook.error && !hook.result) {
    //   logger.error(hook.error.stack)
    // }

    // logger.info('hook.data', hook.data)
    // logger.info('hook.params', hook.params)

    // if (hook.result) {
    //   logger.info('hook.result', hook.result)
    // }
  }
}
