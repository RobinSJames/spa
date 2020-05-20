const createLogger = (level = 'warn') => {
  const nop = () => {}
  // eslint-disable-next-line
  let warn = console.warn
  // eslint-disable-next-line
  let error = console.error
  // eslint-disable-next-line
  let trace = console.log
  // eslint-disable-next-line
  let info = console.info
  const logger = {
    warn,
    error,
    trace,
    info
  }
  // noinspection FallThroughInSwitchStatementJS
  switch (level) {
    case 'warn':
      logger.trace = nop
      logger.info = nop
    // eslint-disable-next-line
    case 'error':
      logger.warn = nop
  }
  return logger
}

export const Logger = createLogger(
  process.env.NODE_ENV === 'production' ? 'warn' : 'trace'
)
