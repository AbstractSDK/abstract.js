import dedent from 'dedent'
import { execa } from 'execa'
import { default as fs } from 'fs-extra'
import type { Format, Options } from 'tsup'

import path from 'path'

type GetConfig = Omit<
  Options,
  'bundle' | 'clean' | 'dts' | 'entry' | 'format'
> & {
  entry?: string[]
  experimentalDts?: boolean
  dev?: boolean
  noExport?: string[]
  format?: Format[]
}

export function getConfig({ dev, noExport, ...options }: GetConfig): Options {
  if (!options.entry?.length) throw new Error('entry is required')
  const entry: string[] = options.entry ?? []

  // Hacks tsup to create Preconstruct-like linked packages for development
  // https://github.com/preconstruct/preconstruct
  if (dev) {
    const entry: string[] = options.entry ?? []
    return {
      clean: true,
      // Only need to generate one file with tsup for development since we will create links in `onSuccess`
      entry: [entry[0] as string],
      format: [(process.env.FORMAT as Format) ?? 'esm'],
      silent: true,
      async onSuccess() {
        // remove all files in dist
        await fs.emptyDir('dist')
        // symlink files and type definitions
        for (const file of entry) {
          const filePath = path.resolve(file)
          const distSourceFile = filePath
            .replace(file, file.replace('src/', 'dist/'))
            .replace(/\.ts$/, '.js')
          // Make sure directory exists
          await fs.ensureDir(path.dirname(distSourceFile))
          // Create symlink between source and dist file
          await fs.symlink(filePath, distSourceFile, 'file')
          // Create file linking up type definitions
          const srcTypesFile = path
            .relative(path.dirname(distSourceFile), filePath)
            .replace(/\.ts$/, '')
          await fs.outputFile(
            distSourceFile.replace(/\.js$/, '.d.ts'),
            `export * from '${srcTypesFile}'`,
          )
        }
        const exports = await generateExports(entry, noExport)
        await generateProxyPackages(exports)
      },
    }
  }

  const experimentalDts = options.experimentalDts ?? true

  return {
    bundle: true,
    clean: true,
    experimentalDts,
    dts: !experimentalDts,
    format: [(process.env.FORMAT as Format) ?? 'esm'],
    splitting: true,
    target: 'es2021',
    async onSuccess() {
      if (typeof options.onSuccess === 'function') await options.onSuccess()
      else if (typeof options.onSuccess === 'string') execa(options.onSuccess)

      const exports = await generateExports(entry, noExport)
      await generateProxyPackages(exports)
    },
    ...options,
  }
}

type Exports = {
  [key: string]: string | { types?: string; require: string; import: string }
  // [key: string]: string | { types?: string; default: string }
}

/**
 * Generate exports from entry files
 */
async function generateExports(entry: string[], noExport?: string[]) {
  const exports: Exports = {}
  for (const file of entry) {
    if (noExport?.includes(file)) continue
    const extension = path.extname(file)
    const fileWithoutExtension = file.replace(extension, '')
    const name = fileWithoutExtension
      .replace(/^src\//g, './')
      .replace(/\/index$/, '')
    const distSourceFile = `${fileWithoutExtension.replace(
      /^src\//g,
      './dist/',
    )}.js`
    const distRequireFile = `${fileWithoutExtension.replace(
      /^src\//g,
      './dist/',
    )}.cjs`
    const distTypesFile = `${fileWithoutExtension.replace(
      /^src\//g,
      './dist/',
    )}.d.ts`
    exports[name] = {
      types: distTypesFile,
      require: distRequireFile,
      import: distSourceFile,
      // default: distSourceFile,
    }
  }

  exports['./package.json'] = './package.json'

  const packageJson = await fs.readJSON('package.json')
  packageJson.exports = exports
  await fs.writeFile(
    'package.json',
    `${JSON.stringify(packageJson, null, 2)}\n`,
  )

  return exports
}

/**
 * Generate proxy packages files for each export
 */
async function generateProxyPackages(exports: Exports) {
  const ignorePaths = []
  const files = new Set<string>()
  for (const [key, value] of Object.entries(exports)) {
    if (typeof value === 'string') continue
    if (key === '.') continue
    if (!value.import) continue
    await fs.ensureDir(key)
    const esmEntrypoint = path.relative(key, value.import)
    const esmFileExists = await fs.pathExists(value.import)
    if (!esmFileExists)
      throw new Error(
        `Proxy package "${key}" entrypoint "${esmEntrypoint}" does not exist.`,
      )

    const cjsEntrypoint = path.relative(key, value.require)
    const cjsFileExists = await fs.pathExists(value.require)
    if (!cjsFileExists)
      throw new Error(
        `Proxy package "${key}" cjsEntrypoint "${cjsEntrypoint}" does not exist.`,
      )

    await fs.outputFile(
      `${key}/package.json`,
      dedent`{
        "type": "module",
        "main": "${cjsEntrypoint}",
        "module": "${esmEntrypoint}",
        "exports": {
          "require": "${cjsEntrypoint}",
          "import": "${esmEntrypoint}"
        }
      }`,
    )
    ignorePaths.push(key.replace(/^\.\//g, ''))

    const file = key.replace(/^\.\//g, '').split('/')[0]
    if (!file || files.has(file)) continue
    files.add(`/${file}`)
  }

  files.add('/dist')
  const packageJson = await fs.readJSON('package.json')
  packageJson.files = [...files.values()]
  await fs.writeFile(
    'package.json',
    `${JSON.stringify(packageJson, null, 2)}\n`,
  )

  if (ignorePaths.length === 0) return
  await fs.outputFile(
    '.gitignore',
    dedent`
    # Generated file. Do not edit directly.
    ${ignorePaths.join('/**\n')}/**
  `,
  )
}
