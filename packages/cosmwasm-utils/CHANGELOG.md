# @abstract-money/cosmwasm-utils

## 0.2.0

### Minor Changes

- [`ccf8001`](https://github.com/AbstractSDK/abstract.js/commit/ccf80013d12e8033da273eed6d486edf6762441d) Thanks [@dalechyn](https://github.com/dalechyn)! - Added overrideable parameters that are decorated via `extra` property.

## 0.1.3

### Patch Changes

- [`21f8b18`](https://github.com/AbstractSDK/abstract.js/commit/21f8b18a813b44ff0399c422bbec971a328f34a2) Thanks [@dalechyn](https://github.com/dalechyn)! - Bumped @cosmjs dependencies versions.

## 0.1.2

### Patch Changes

- [#71](https://github.com/AbstractSDK/abstract.js/pull/71) [`d7b32cf`](https://github.com/AbstractSDK/abstract.js/commit/d7b32cf3e3ca1ca8460ba91c7013ed4bf3f3e301) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes bad dependencies in all of the packages.

## 0.1.1

### Patch Changes

- [#18](https://github.com/AbstractSDK/abstract.js/pull/18) [`31348c5`](https://github.com/AbstractSDK/abstract.js/commit/31348c5a05da05b2d5e4d4446a72662e4669c466) Thanks [@dalechyn](https://github.com/dalechyn)! - Forked `bundle-require` package with the fixed peer dependency.

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
