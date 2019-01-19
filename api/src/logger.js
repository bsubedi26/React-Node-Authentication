const winston = require('winston')
const { format, transports } = winston

winston.addColors({
  debug: 'cyan',
  info: 'red',
  error: 'red'
})

const logTimeStamp = format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)

const logger = winston.createLogger({
  // To see more detailed errors, change this to 'debug'
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.simple(),
    format.timestamp(),
    logTimeStamp
  ),
  transports: [
    new transports.Console()
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    // new transports.File({ filename: 'error.log', level: 'error' }),
    // new transports.File({ filename: 'combined.log' })
  ]
})

module.exports = logger
