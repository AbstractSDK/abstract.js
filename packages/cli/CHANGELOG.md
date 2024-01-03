# @abstract-money/cli

## 0.1.2

### Patch Changes

- [#16](https://github.com/AbstractSDK/abstract.js/pull/16) [`fadd8fb`](https://github.com/AbstractSDK/abstract.js/commit/fadd8fb0a0dc2dd6fcc518a5fc27a8f8dd32a277) Thanks [@dalechyn](https://github.com/dalechyn)! - Pins the version of `bundle-require` to `3.1.2` to fix invalid `esbuild` resolution when `pnpm` is used.

## 0.1.1

### Patch Changes

- [#14](https://github.com/AbstractSDK/abstract.js/pull/14) [`bfb3519`](https://github.com/AbstractSDK/abstract.js/commit/bfb351972b4bd901d219f0f3790050c3a7264e0e) Thanks [@dalechyn](https://github.com/dalechyn)! - Implements the `useAccounts` hook to retrieve the list of accounts of the connected signer.

## 0.1.0

### Minor Changes

- [`33390a1`](https://github.com/AbstractSDK/abstract.js/commit/33390a1ca0f7c73ff39dd7fb494802b8cc2e9de0) Thanks [@dalechyn](https://github.com/dalechyn)! - First release of **abstract.js** revamped SDK!

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
