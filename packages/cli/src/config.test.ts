import { describe, expect, it, vi } from 'vitest'

import type { Config } from './config'
import { defineConfig } from './config'

describe('defineConfig', () => {
  it('object', () => {
    const config: Config = {
      contracts: [],
      out: 'abstract.ts',
      plugins: [],
    }
    expect(defineConfig(config)).toEqual(config)
  })

  it('array', () => {
    const config: Config = {
      contracts: [],
      out: 'abstract.ts',
      plugins: [],
    }
    expect(defineConfig([config, config])).toEqual([config, config])
  })

  it('function', () => {
    const config = vi.fn().mockImplementation(() => ({
      contracts: [],
      out: 'abstract.ts',
      plugins: [],
    }))
    expect(defineConfig(config)).toEqual(config)
  })

  it('async function', () => {
    const config = vi.fn().mockImplementation(async () => ({
      contracts: [],
      out: 'abstract.ts',
      plugins: [],
    }))
    expect(defineConfig(config)).toEqual(config)
  })
})
