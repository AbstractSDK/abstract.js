# @abstract-money/react

## 0.2.7

### Patch Changes

- [`b48d9f2`](https://github.com/AbstractSDK/abstract.js/commit/b48d9f2154d1902073287b151195a3b1f3bd7080) Thanks [@dalechyn](https://github.com/dalechyn)! - Implemented `useAccountBaseAddressesFromApi` hook.

## 0.2.6

### Patch Changes

- [`3ca6d2f`](https://github.com/AbstractSDK/abstract.js/commit/3ca6d2f0c302978b3d03e9deb511b94765a68b15) Thanks [@dalechyn](https://github.com/dalechyn)! - Support non-abstract apps codegen, and minor optimizations.

- Updated dependencies []:
  - @abstract-money/core@0.2.2

## 0.2.5

### Patch Changes

- [`1d6201e`](https://github.com/AbstractSDK/abstract.js/commit/1d6201efe3b52b8d34e7ad9de5179b5abe318e9a) Thanks [@dalechyn](https://github.com/dalechyn)! - Improves `accountId` usage, when passed to generated hooks or hooks from \`react\` package, it takes precedence over the context, yet if one is not passed, an error is thrown to indicate that it either should be passed or account id provider wrapping is needed. Also improves `cli` to not require args in hooks that don't need them.

- [`1a38dc4`](https://github.com/AbstractSDK/abstract.js/commit/1a38dc47d7cb59eacc156471b0400c02353b15fb) Thanks [@dalechyn](https://github.com/dalechyn)! - Provide account id leverage to other wallet account hooks

- Updated dependencies []:
  - @abstract-money/core@0.2.2

## 0.2.4

### Patch Changes

- [`89c8d26`](https://github.com/AbstractSDK/abstract.js/commit/89c8d267ff9e00552bf1b56e1191f57aa25a6eee) Thanks [@dalechyn](https://github.com/dalechyn)! - Force a user to always pass accountId in account related hooks.

## 0.2.3

### Patch Changes

- [`8b41b44`](https://github.com/AbstractSDK/abstract.js/commit/8b41b444180838c7c82247ddc3f611bc7dc6085b) Thanks [@dalechyn](https://github.com/dalechyn)! - Adds ability to propagate accountId for account-related hooks to avoid setting a context.

## 0.2.2

### Patch Changes

- [#33](https://github.com/AbstractSDK/abstract.js/pull/33) [`ec5cb1e`](https://github.com/AbstractSDK/abstract.js/commit/ec5cb1e346668d3b93ad175fe3964a6be7327c29) Thanks [@dalechyn](https://github.com/dalechyn)! - Moves the provider-injection logic from `cli` package into `react` package.

- Updated dependencies [[`ec5cb1e`](https://github.com/AbstractSDK/abstract.js/commit/ec5cb1e346668d3b93ad175fe3964a6be7327c29)]:
  - @abstract-money/core@0.2.2

## 0.2.1

### Patch Changes

- [`f1ba82a`](https://github.com/AbstractSDK/abstract.js/commit/f1ba82a116296c8d4d9cdc88e3cac136284528a1) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes args propagation in `useDeposit`, `useExecute` and `useWithdraw` hook, and prettifies types from cut arguments.

- Updated dependencies [[`f1ba82a`](https://github.com/AbstractSDK/abstract.js/commit/f1ba82a116296c8d4d9cdc88e3cac136284528a1)]:
  - @abstract-money/core@0.2.1

## 0.2.0

### Minor Changes

- [#30](https://github.com/AbstractSDK/abstract.js/pull/30) [`24438df`](https://github.com/AbstractSDK/abstract.js/commit/24438dfd851ff9d8b7ca02da2168bf60cd91cfde) Thanks [@dalechyn](https://github.com/dalechyn)! - Reimplements `core` package, with backwards compatibility support at `@abstract-money/core/legacy`.

### Patch Changes

- Updated dependencies [[`24438df`](https://github.com/AbstractSDK/abstract.js/commit/24438dfd851ff9d8b7ca02da2168bf60cd91cfde)]:
  - @abstract-money/core@0.2.0

## 0.1.5

### Patch Changes

- [#27](https://github.com/AbstractSDK/abstract.js/pull/27) [`72c2d2c`](https://github.com/AbstractSDK/abstract.js/commit/72c2d2c7dffb34fedad3af4a8905f8737f58f206) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes api url propagation

- Updated dependencies [[`72c2d2c`](https://github.com/AbstractSDK/abstract.js/commit/72c2d2c7dffb34fedad3af4a8905f8737f58f206)]:
  - @abstract-money/core@0.1.5

## 0.1.4

### Patch Changes

- Updated dependencies [[`39b71f4`](https://github.com/AbstractSDK/abstract.js/commit/39b71f43a7a207199dcf3abcd491db8de4f7825f)]:
  - @abstract-money/core@0.1.4

## 0.1.3

### Patch Changes

- [#23](https://github.com/AbstractSDK/abstract.js/pull/23) [`2811970`](https://github.com/AbstractSDK/abstract.js/commit/281197085b04750aa041fb1904535d5926e043de) Thanks [@dalechyn](https://github.com/dalechyn)! - Optional accountId and optional provider.

- Updated dependencies [[`2811970`](https://github.com/AbstractSDK/abstract.js/commit/281197085b04750aa041fb1904535d5926e043de)]:
  - @abstract-money/core@0.1.3

## 0.1.2

### Patch Changes

- [#18](https://github.com/AbstractSDK/abstract.js/pull/18) [`31348c5`](https://github.com/AbstractSDK/abstract.js/commit/31348c5a05da05b2d5e4d4446a72662e4669c466) Thanks [@dalechyn](https://github.com/dalechyn)! - Forked `bundle-require` package with the fixed peer dependency.

- Updated dependencies []:
  - @abstract-money/core@0.1.2

## 0.1.1

### Patch Changes

- [#14](https://github.com/AbstractSDK/abstract.js/pull/14) [`bfb3519`](https://github.com/AbstractSDK/abstract.js/commit/bfb351972b4bd901d219f0f3790050c3a7264e0e) Thanks [@dalechyn](https://github.com/dalechyn)! - Implements the `useAccounts` hook to retrieve the list of accounts of the connected signer.

- Updated dependencies [[`bfb3519`](https://github.com/AbstractSDK/abstract.js/commit/bfb351972b4bd901d219f0f3790050c3a7264e0e)]:
  - @abstract-money/core@0.1.1

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

### Patch Changes

- Updated dependencies [[`33390a1`](https://github.com/AbstractSDK/abstract.js/commit/33390a1ca0f7c73ff39dd7fb494802b8cc2e9de0)]:
  - @abstract-money/core@0.1.0
