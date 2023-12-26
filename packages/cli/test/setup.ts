import { resolve } from 'pathe'
import { vi } from 'vitest'

const cliPath = resolve(process.cwd(), 'packages/cli/src/')
const cliPluginsPath = resolve(process.cwd(), 'packages/cli/src/plugins')

vi.mock('@abstract-money/cli', async () => vi.importActual(cliPath))
vi.mock('@abstract-money/cli/plugins', async () =>
  vi.importActual(cliPluginsPath),
)

vi.mock('ora', async () => {
  function ora() {
    class Ora {
      #text: string | undefined

      start(text: string | undefined = 'start') {
        console.log(`- ${text}`)
        this.#text = text
      }

      succeed(text: string | undefined = this.#text ?? 'succeed') {
        console.log(`✔ ${text}`)
        this.#text = undefined
      }

      fail(text: string | undefined = this.#text ?? 'fail') {
        console.error(`✖ ${text}`)
        this.#text = undefined
      }
    }
    return new Ora()
  }
  return {
    default: ora,
  }
})

vi.mock('picocolors', async () => {
  function pass(input: string | number | null | undefined) {
    return input
  }
  return {
    default: {
      blue: pass,
      gray: pass,
      green: pass,
      red: pass,
      white: pass,
      yellow: pass,
    },
  }
})

vi.mock('picocolors', async () => {
  function pass(input: string | number | null | undefined) {
    return input
  }
  return {
    default: {
      blue: pass,
      gray: pass,
      green: pass,
      red: pass,
      white: pass,
      yellow: pass,
    },
  }
})
