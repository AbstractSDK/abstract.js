export class ModuleNotFoundError extends Error {
  constructor(moduleId: string, version?: string) {
    super(`${moduleId} ${version ? `with version ${version} ` : ''} not found.`)
    this.name = 'ModuleNotFoundError'
  }
}

export class AbstractNotFoundError extends Error {
  constructor(message: string) {
    super(`Abstract not found. Additional context: ${message}`)
    this.name = 'AbstractNotFoundError'
  }
}

export class AccountNotFoundError extends Error {
  constructor(accountId: string) {
    super(`Account ${accountId} not found.`)
    this.name = 'AccountNotFoundError'
  }
}
