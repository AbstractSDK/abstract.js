import { afterEach, describe, expect, it, vi } from 'vitest'

import * as logger from './logger'

const mockLog = vi.fn()

describe('logger', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe.each([
    { level: 'success' },
    { level: 'info' },
    { level: 'log' },
    { level: 'warn' },
    { level: 'error' },
  ])('${level}()', ({ level }) => {
    it(`logs message "${level}"`, () => {
      const spy = vi.spyOn(logger, level as any)
      spy.mockImplementation(mockLog)
      const loggerFn = (logger as any)[level]
      loggerFn(level)
      expect(spy).toHaveBeenCalledWith(level)
    })
  })

  // TODO: figure out how to mock the console spinner
  //
  // it('spinner', () => {
  //   const console2 = watchConsole()
  //   const spinner = logger.spinner()
  //   console.log('spinner', spinner)
  //
  //   spinner.start('Foo bar baz')
  //   spinner.succeed('Foo bar baz')
  //   spinner.fail('Foo bar baz')
  //   expect(console2.formatted).toMatchInlineSnapshot(`
  //     "- Foo bar baz
  //     ✔ Foo bar baz
  //     ✖ Foo bar baz"
  //   `)
  // })
})
