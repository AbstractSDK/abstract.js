import dedent from 'dedent'
import { default as fse } from 'fs-extra'
import { relative, resolve } from 'pathe'
import pc from 'picocolors'
import { z } from 'zod'

import type { Config } from '../config'
import { defaultConfig } from '../config'
import { fromZodError } from '../errors'
import * as logger from '../logger'
import { findConfig, format, getIsUsingTypeScript } from '../utils'

export type Init = {
  /** Path to config file */
  config?: string
  /** Watch for file system changes to config and plugins */
  content?: Config
  /** Directory to init config file */
  root?: string
}

const Init = z.object({
  config: z.string().optional(),
  content: z.object({}).optional(),
  root: z.string().optional(),
})

function serializeConfig(
  config:
    | Config
    | {
        out: string
        contracts: never[]
        plugins: string[]
      },
) {
  const serialized = JSON.stringify(config)
  // HACK: Replacing `'react'` keyword to `react()`
  return serialized.replaceAll('"react"', 'react()')
}

export async function init(options: Init = {}) {
  // Validate command line options
  try {
    await Init.parseAsync(options)
  } catch (error) {
    if (error instanceof z.ZodError)
      throw fromZodError(error, { prefix: 'Invalid option' })
    throw error
  }

  // Check for exisiting config file
  const configPath = await findConfig(options)
  if (configPath) {
    logger.info(
      `Config already exists at ${pc.gray(
        relative(process.cwd(), configPath),
      )}`,
    )
    return configPath
  }

  const spinner = logger.spinner()
  spinner.start('Creating config')
  // Check if project is using TypeScript
  const isUsingTypeScript = await getIsUsingTypeScript()
  const rootDir = resolve(options.root || process.cwd())
  let outPath: string
  if (options.config) {
    outPath = resolve(rootDir, options.config)
  } else {
    const extension = isUsingTypeScript ? 'ts' : 'js'
    outPath = resolve(rootDir, `abstract.config.${extension}`)
  }

  let content: string
  if (isUsingTypeScript) {
    const config = options.content ?? defaultConfig
    content = dedent(`
      import { defineConfig } from '@abstract-money/cli'
      import { react } from '@abstract-money/cli/plugins'

      export default defineConfig(${serializeConfig(config)})
    `)
  } else {
    const config = options.content ?? {
      ...defaultConfig,
      out: defaultConfig.out.replace('.ts', '.js'),
    }
    content = dedent(`
      // @ts-check

      import { react } from '@abstract-money/cli/plugins'

      /** @type {import('@abstract-money/cli').Config} */
      export default ${serializeConfig(config)}
    `)
  }

  const formatted = await format(content)
  await fse.writeFile(outPath, formatted)
  spinner.succeed()
  logger.success(
    `Config created at ${pc.gray(relative(process.cwd(), outPath))}`,
  )

  return outPath
}
