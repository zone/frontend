/* eslint-disable no-console */
const PassThroughStream = require('stream').PassThrough
const { formatter, log, levels, spinner } = require('./logger')

global.console = {
  log: jest.fn(),
}

const levelKeys = Object.keys(levels)
const start = jest.spyOn(spinner, 'start')
const stop = jest.spyOn(spinner, 'stop')
const getPassThroughStream = () => {
  const stream = new PassThroughStream()
  const noop = () => {}

  stream.writable = true
  stream.write = noop
  stream.clearLine = noop
  stream.cursorTo = noop
  stream.moveCursor = noop
  return stream
}

spinner.stream = getPassThroughStream()
spinner.isEnabled = true

describe('logger', () => {
  const message = 'test'
  const debugOutput = formatter({ level: 'debug', message })
  const errorOutput = formatter({ level: 'error', message })
  const infoOutput = formatter({ level: 'info', message })

  it('has log levels', () => {
    expect(levels).toMatchSnapshot()
  })

  it('defaults log level to "info"', () => {
    expect(log.level).toBe('info')
  })

  it.each(levelKeys)('has a method for %s', level => {
    expect(typeof log[level]).toBe('function')
  })

  it.each(levelKeys)('sets the log level to %s', level => {
    log.level = level
    expect(log.level).toBe(level)
  })

  it('does not accept accept and invalid log level', () => {
    const originalLevel = log.level

    log.level = 'hello world'
    expect(log.level).toBe(originalLevel)
  })

  it('formats debug logs', () => {
    expect(debugOutput).toMatchSnapshot()
  })

  it('formats info logs', () => {
    expect(infoOutput).toMatchSnapshot()
  })

  it('formats error logs', () => {
    expect(errorOutput).toMatchSnapshot()
  })

  it('formats error/info/debug logs differently', () => {
    expect(debugOutput).not.toEqual(infoOutput)
    expect(debugOutput).not.toEqual(errorOutput)
    expect(errorOutput).not.toEqual(infoOutput)
  })
  const spinnerMessage = 'Test'

  it('starts and stops the spinner', () => {
    spinner.start(spinnerMessage)
    spinner.isSpinning = true
    log.info('Test')
    expect(stop).toBeCalled()
    expect(start).toBeCalledWith(spinnerMessage)

    start.mockReset()
    spinner.stop()
    stop.mockReset()
  })

  it('does not start and stop the spinner', () => {
    log.info('Test')
    expect(stop).not.toBeCalled()
    expect(start).not.toBeCalledWith(spinnerMessage)
  })

  it('does not log debug messages when info', () => {
    log.level = 'info'
    expect(log.level).toBe('info')
    log.debug('Test debug')
    expect(console.log).not.toBeCalled()
  })

  afterEach(() => {
    console.log.mockReset()
  })
})
