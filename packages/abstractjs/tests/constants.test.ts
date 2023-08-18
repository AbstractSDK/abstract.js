import packageJson from '../package.json'
import { ABSTRACT_VERSION } from '../src'

test('Version matches package.json', () => {
  expect(ABSTRACT_VERSION).toBe(packageJson.version)
})
