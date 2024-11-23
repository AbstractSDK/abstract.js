# @abstract-money/cosmwasm-utils

## 0.3.4

### Patch Changes

- [#148](https://github.com/AbstractSDK/abstract.js/pull/148) [`83cd666`](https://github.com/AbstractSDK/abstract.js/commit/83cd666774aa33d60e41fe404fa920a53b2e465b) Thanks [@adairrr](https://github.com/adairrr)! - Update Abstract to 0.25 with account instantiation changes

## 0.3.3

### Patch Changes

- [#146](https://github.com/AbstractSDK/abstract.js/pull/146) [`d37943d`](https://github.com/AbstractSDK/abstract.js/commit/d37943d4fa3cfc12ab040c6958f43176409db7ec) Thanks [@adairrr](https://github.com/adairrr)! - Disallow aggregated aggregated queries

## 0.3.2

### Patch Changes

- [#144](https://github.com/AbstractSDK/abstract.js/pull/144) [`e90ce9e`](https://github.com/AbstractSDK/abstract.js/commit/e90ce9eede700abbf67dc52404971485d0b7fe56) Thanks [@adairrr](https://github.com/adairrr)! - Add a multiquery cosmwasm client for more efficient queries

- [#143](https://github.com/AbstractSDK/abstract.js/pull/143) [`c937b82`](https://github.com/AbstractSDK/abstract.js/commit/c937b82e457817ff2099ae78a72aee27f678a7e0) Thanks [@adairrr](https://github.com/adairrr)! - Throw proper error in rawQury

## 0.3.1

### Patch Changes

- [#131](https://github.com/AbstractSDK/abstract.js/pull/131) [`04cb51f`](https://github.com/AbstractSDK/abstract.js/commit/04cb51fffc933abf6e47b881001e6bb3fb340f02) Thanks [@adairrr](https://github.com/adairrr)! - Ensure that cosmwasm-utils is cjs-compatible

## 0.3.0

### Minor Changes

- [#127](https://github.com/AbstractSDK/abstract.js/pull/127) [`e46ec91`](https://github.com/AbstractSDK/abstract.js/commit/e46ec91c1169752f552dd627d2fe93bb3ff932be) Thanks [@adairrr](https://github.com/adairrr)! - Update Abstract to 0.24.0 with unified accounts

  The major changes include:

  - Updating Abstract to 0.24.0
  - Removing distinction between `proxy` and `manager`, replacing them with simply `account`
  - Clarify `executeRemote` and `executeOnRemote`
  - Add doc comments
  - Remove components from legacy code
  - Ensure generation works for both esm and cjs

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
