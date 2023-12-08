import { default as dedent } from 'dedent'
import { default as fse, ensureDir } from 'fs-extra'
import { basename, dirname, resolve } from 'pathe'
import pc from 'picocolors'
import { z } from 'zod'

import type { Contract, ContractConfig, Plugin } from '../config'
import { fromZodError } from '../errors'
import * as logger from '../logger'
import {
  findConfig,
  format,
  getIsUsingTypeScript,
  resolveConfig,
} from '../utils'

const Generate = z.object({
  /** Path to config file */
  config: z.string().optional(),
  /** Directory to search for config file */
  root: z.string().optional(),
})
export type Generate = z.infer<typeof Generate>

export async function generate(options: Generate = {}) {
  // Validate command line options
  try {
    await Generate.parseAsync(options)
  } catch (error) {
    if (error instanceof z.ZodError)
      throw fromZodError(error, { prefix: 'Invalid option' })
    throw error
  }

  // Get cli config file
  const configPath = await findConfig(options)
  if (!configPath) {
    if (options.config)
      throw new Error(`Config not found at ${pc.gray(options.config)}`)
    throw new Error('Config not found')
  }

  const resolvedConfigs = await resolveConfig({ configPath })
  const isTypeScript = await getIsUsingTypeScript()

  const outNames = new Set<string>()
  const isArrayConfig = Array.isArray(resolvedConfigs)
  const configs = isArrayConfig ? resolvedConfigs : [resolvedConfigs]
  for (const config of configs) {
    if (isArrayConfig)
      logger.log(`Using config ${pc.gray(basename(configPath))}`)
    if (!config.out) throw new Error('out is required.')
    if (outNames.has(config.out))
      throw new Error(`out "${config.out}" must be unique.`)
    outNames.add(config.out)

    // Collect contracts from plugins
    const plugins = (config.plugins ?? []).map((x, i) => ({
      ...x,
      id: `${x.name}-${i}`,
    }))
    const spinner = logger.spinner()
    spinner.start('Validating plugins')
    for (const plugin of plugins) {
      await plugin.validate?.()
    }

    // Check for required plugins
    if (!plugins.some((plugin) => plugin.name !== 'React')) {
      throw new Error('React plugin is required.')
    }

    spinner.succeed()

    // Add plugin contracts to config contracts
    const contractConfigs = config.contracts ?? []
    spinner.start('Resolving contracts')
    for (const plugin of plugins) {
      if (plugin.contracts) {
        const contracts = await plugin.contracts()
        contractConfigs.push(...contracts)
      }
    }

    // Get contracts from config
    const contractNames = new Set<string>()
    const contractMap = new Map<string, Contract>()
    for (const contractConfig of contractConfigs) {
      if (contractNames.has(contractConfig.name))
        throw new Error(
          `Contract name "${contractConfig.name}" must be unique.`,
        )
      const contract = await getContract(contractConfig)
      contractMap.set(contract.name, contract)

      contractNames.add(contractConfig.name)
    }

    // Sort contracts by name Ascending (low to high) as the key is `String`
    const sortedAscContractMap = new Map([...contractMap].sort())
    const contracts = [...sortedAscContractMap.values()]
    if (!contracts.length) {
      spinner.fail()
      logger.warn('No contracts found.')
      return
    }
    spinner.succeed()

    // Run plugins
    const imports = []
    const prepend = []
    const content = []
    type Output = {
      plugin: Pick<Plugin, 'name'>
    } & Awaited<ReturnType<Required<Plugin>['run']>>
    const outputs: Output[] = []
    spinner.start('Running plugins')
    for (const plugin of plugins) {
      if (!plugin.run) continue
      const result = await plugin.run({
        contracts,
        isTypeScript,
        outputs,
        out: config.out,
      })
      outputs.push({
        plugin: { name: plugin.name },
        ...result,
      })
      if (!result.imports && !result.prepend && !result.content) continue
      content.push(getBannerContent({ name: plugin.name }), result.content)
      result.imports && imports.push(result.imports)
      result.prepend && prepend.push(result.prepend)
    }
    spinner.succeed()

    // Write output to file
    spinner.start(`Writing to ${pc.gray(config.out)}`)
    await writeContracts({
      content,
      contracts,
      imports,
      prepend,
      filename: config.out,
    })
    spinner.succeed()
  }

  async function getContract({
    name,
    ...rest
  }: ContractConfig): Promise<Contract> {
    const content = dedent`
      ${getBannerContent({ name })}
    `

    return { content, name, ...rest }
  }

  async function writeContracts({
    content,
    contracts,
    imports,
    prepend,
    filename,
  }: {
    content: string[]
    contracts: Contract[]
    imports: string[]
    prepend: string[]
    filename: string
  }) {
    // Assemble code
    let code = dedent`
      ${imports.join('\n\n') ?? ''}

      ${prepend.join('\n\n') ?? ''}
    `
    for (const contract of contracts) {
      code = dedent`
        ${code}

        ${contract.content}
      `
    }
    code = dedent`
      ${code}

      ${content.join('\n\n') ?? ''}
    `

    // Format and write output
    const cwd = process.cwd()
    const outPath = resolve(cwd, filename)
    await ensureDir(dirname(outPath))
    const formatted = await format(code)
    await fse.writeFile(outPath, formatted)
  }

  function getBannerContent({ name }: { name: string }) {
    return dedent`
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ${name}
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    `
  }
}
