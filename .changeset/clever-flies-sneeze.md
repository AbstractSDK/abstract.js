---
"@abstract-money/cli": minor
"@abstract-money/core": minor
"@abstract-money/cosmwasm-utils": minor
"@abstract-money/react": minor
---

First release of **abstract.js** revamped SDK!

New SDK structure involves multiple packages, each with its own dependencies.
This allows for more flexibility and better control over the SDK.

Old-new packages mapping:

- `@abstract-money/abstract.js` -> `@abstract-money/core`
- `@abstract-money/abstract.js-react` -> `@abstract-money/react`
- `@abstract-money/cosmwasm` -> `@abstract-money/cosmwasm-utils`

A new package was introduced, `@abstract-money/cli` that adopts a quicker
development setup when using Abstract contracts.
A developer is now not obligated to download the Abstract contract schemas himself,
and can simply enumerate the required contracts via the `registry` plugin,
available at `@abstract-money/cli/plugins`, and the CLI will download and cache them
itself.
This feature also allowed to cut out the boilerplate code from the old `@abstract-money/abstract.js`,
yet keeping the backwards compatibility.
