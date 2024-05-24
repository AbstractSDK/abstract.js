import { pascalCase } from 'change-case'

export function fixSchemaResultOfError(schema: string) {
  // HACK: Replaces the undescored `Result_of` to be PascalCased as
  // it raises an error that is pretty complex to debug. Needs to be deleted later.
  return schema.replaceAll(/(Result_of_[A-Za-z-_]+)/gm, (substitution) => {
    return pascalCase(substitution)
  })
}
