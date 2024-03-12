# @abstract-money/cli

## 0.2.12

### Patch Changes

- [#75](https://github.com/AbstractSDK/abstract.js/pull/75) [`6a02ff5`](https://github.com/AbstractSDK/abstract.js/commit/6a02ff503356d8d17bd94973f7b75c728b13b340) Thanks [@dalechyn](https://github.com/dalechyn)! - Deprecated `AbstractAccountIdProvider` in favor of custom client's accountId state management.
  Introduced consequent changes to types involving `accountId`.
  Fixes the peer-dependency issue in `provider-graz` package.
  Dropped `@cosmjs/amino` in favor of `@cosmjs/stargate`

## 0.2.11

### Patch Changes

- [#71](https://github.com/AbstractSDK/abstract.js/pull/71) [`d7b32cf`](https://github.com/AbstractSDK/abstract.js/commit/d7b32cf3e3ca1ca8460ba91c7013ed4bf3f3e301) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes bad dependencies in all of the packages.

- Updated dependencies [[`d7b32cf`](https://github.com/AbstractSDK/abstract.js/commit/d7b32cf3e3ca1ca8460ba91c7013ed4bf3f3e301)]:
  - @abstract-money/bundle-require@0.0.2

## 0.2.10

### Patch Changes

- [`b56c2db`](https://github.com/AbstractSDK/abstract.js/commit/b56c2db0d0fb4d0630cae3ea305071c7aeb1e99b) Thanks [@dalechyn](https://github.com/dalechyn)! - Fix imports.

## 0.2.9

### Patch Changes

- [`61866cd`](https://github.com/AbstractSDK/abstract.js/commit/61866cdc4b93eaa2b43fdceb8144016037228998) Thanks [@dalechyn](https://github.com/dalechyn)! - Bump contract versions and add encoding create sub account msg util.

## 0.2.8

### Patch Changes

- [`f183560`](https://github.com/AbstractSDK/abstract.js/commit/f1835604f7b00e4b89c550620940d0df3af1a6a2) Thanks [@dalechyn](https://github.com/dalechyn)! - Partial arguments for generated hooks

## 0.2.7

### Patch Changes

- [`3ca6d2f`](https://github.com/AbstractSDK/abstract.js/commit/3ca6d2f0c302978b3d03e9deb511b94765a68b15) Thanks [@dalechyn](https://github.com/dalechyn)! - Support non-abstract apps codegen, and minor optimizations.

## 0.2.6

### Patch Changes

- [`2d2935a`](https://github.com/AbstractSDK/abstract.js/commit/2d2935a7b389d363810e521842df2ba528acc829) Thanks [@dalechyn](https://github.com/dalechyn)! - Adds a guard to never generate abstractApp for cw-plus namespace and allows a user to configure other namespaces to not generate abstractApp for.

## 0.2.5

### Patch Changes

- [`8c5c289`](https://github.com/AbstractSDK/abstract.js/commit/8c5c289be8d82f2ab827b7e10179962f2353cc24) Thanks [@dalechyn](https://github.com/dalechyn)! - Transforms the dash-cased contract names to camel case to fix the export.

## 0.2.4

### Patch Changes

- [`3f2e5c2`](https://github.com/AbstractSDK/abstract.js/commit/3f2e5c2c655f0b4eca847b336b2851f36d82a00e) Thanks [@dalechyn](https://github.com/dalechyn)! - Adds another pattern url for `registry` plugin.

## 0.2.3

### Patch Changes

- [`1d6201e`](https://github.com/AbstractSDK/abstract.js/commit/1d6201efe3b52b8d34e7ad9de5179b5abe318e9a) Thanks [@dalechyn](https://github.com/dalechyn)! - Improves `accountId` usage, when passed to generated hooks or hooks from \`react\` package, it takes precedence over the context, yet if one is not passed, an error is thrown to indicate that it either should be passed or account id provider wrapping is needed. Also improves `cli` to not require args in hooks that don't need them.

- [`26c4409`](https://github.com/AbstractSDK/abstract.js/commit/26c4409bc4c713d9e0dd0f1bc2244bbb7415f737) Thanks [@dalechyn](https://github.com/dalechyn)! - Disallow `proxy` and `manager` from codegen.

## 0.2.2

### Patch Changes

- [`1df4fde`](https://github.com/AbstractSDK/abstract.js/commit/1df4fde2d3e44104fb134aa64285d21cc7da89f1) Thanks [@dalechyn](https://github.com/dalechyn)! - Guard specific contracts from being turned into app clients.

## 0.2.1

### Patch Changes

- [#33](https://github.com/AbstractSDK/abstract.js/pull/33) [`ec5cb1e`](https://github.com/AbstractSDK/abstract.js/commit/ec5cb1e346668d3b93ad175fe3964a6be7327c29) Thanks [@dalechyn](https://github.com/dalechyn)! - Moves the provider-injection logic from `cli` package into `react` package.

## 0.2.0

### Minor Changes

- [#30](https://github.com/AbstractSDK/abstract.js/pull/30) [`24438df`](https://github.com/AbstractSDK/abstract.js/commit/24438dfd851ff9d8b7ca02da2168bf60cd91cfde) Thanks [@dalechyn](https://github.com/dalechyn)! - Reimplements `core` package, with backwards compatibility support at `@abstract-money/core/legacy`.

## 0.1.4

### Patch Changes

- [#22](https://github.com/AbstractSDK/abstract.js/pull/22) [`cc949bf`](https://github.com/AbstractSDK/abstract.js/commit/cc949bf5485c7676db8724116b8f307463dd0fc8) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes schema parsing issue with a regexp.

- [#23](https://github.com/AbstractSDK/abstract.js/pull/23) [`2811970`](https://github.com/AbstractSDK/abstract.js/commit/281197085b04750aa041fb1904535d5926e043de) Thanks [@dalechyn](https://github.com/dalechyn)! - Optional accountId and optional provider.

- [#20](https://github.com/AbstractSDK/abstract.js/pull/20) [`90d6a49`](https://github.com/AbstractSDK/abstract.js/commit/90d6a49051ad5e881b540a4644f2d1032bc16cf6) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes the conflicting types and `react` plugin when used with multiple contracts.

## 0.1.3

### Patch Changes

- [#18](https://github.com/AbstractSDK/abstract.js/pull/18) [`31348c5`](https://github.com/AbstractSDK/abstract.js/commit/31348c5a05da05b2d5e4d4446a72662e4669c466) Thanks [@dalechyn](https://github.com/dalechyn)! - Forked `bundle-require` package with the fixed peer dependency.

- Updated dependencies [[`31348c5`](https://github.com/AbstractSDK/abstract.js/commit/31348c5a05da05b2d5e4d4446a72662e4669c466)]:
  - @abstract-money/bundle-require@0.0.1

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
