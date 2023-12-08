#!/usr/bin/env node
import { cac } from 'cac'

import packageJson from '../package.json'
import type { Generate, Init } from './commands'
import * as logger from './logger'

const cli = cac('abstract')

cli
  .command('generate', 'generate code based on configuration')
  .option('-c, --config <path>', '[string] path to config file')
  .option('-r, --root <path>', '[string] root path')
  .example((name) => `${name} generate`)
  .action(async (options: Generate) => {
    const { generate } = await import('./commands')
    await generate(options)
  })

cli
  .command('init', 'create configuration file')
  .option('-c, --config <path>', '[string] path to config file')
  .option('-r, --root <path>', '[string] root path')
  .example((name) => `${name} init`)
  .action(async (options: Init) => {
    const { init } = await import('./commands')
    await init(options)
  })

cli.help()
cli.version(packageJson.version)

void (async () => {
  try {
    // Parse CLI args without running command
    cli.parse(process.argv, { run: false })
    if (!cli.matchedCommand) {
      if (cli.args.length === 0) cli.outputHelp()
      else throw new Error(`Unknown command: ${cli.args.join(' ')}`)
    }
    await cli.runMatchedCommand()
  } catch (error) {
    logger.error(`\n${(error as Error).message}`)
    process.exit(1)
  }
})()
