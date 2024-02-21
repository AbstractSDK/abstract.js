## 0.1.0

## 0.3.3

### Patch Changes

- [#58](https://github.com/AbstractSDK/abstract.js/pull/58) [`22daa16`](https://github.com/AbstractSDK/abstract.js/commit/22daa16fd55a0c54066b46c98d7b1cf68e88d1ab) Thanks [@adairrr](https://github.com/adairrr)! - Update init2 logic to use correct account ids

## 0.3.2

### Patch Changes

- [#55](https://github.com/AbstractSDK/abstract.js/pull/55) [`2bca172`](https://github.com/AbstractSDK/abstract.js/commit/2bca17257f8b957f6e2b8e156e7e9cad1b4674ff) Thanks [@adairrr](https://github.com/adairrr)! - Add helpers to predict module address

## 0.3.1

### Patch Changes

- [#52](https://github.com/AbstractSDK/abstract.js/pull/52) [`4526937`](https://github.com/AbstractSDK/abstract.js/commit/4526937949897f736daf125558454cc069205562) Thanks [@dalechyn](https://github.com/dalechyn)! - Introduces new hooks for the savings app.

- [#52](https://github.com/AbstractSDK/abstract.js/pull/52) [`cadb381`](https://github.com/AbstractSDK/abstract.js/commit/cadb381837899de18a71efb2a21e14819d70214d) Thanks [@dalechyn](https://github.com/dalechyn)! - Added authz utils and util to retrieve account address before creation.

## 0.3.0

### Minor Changes

- [#50](https://github.com/AbstractSDK/abstract.js/pull/50) [`9f6274a`](https://github.com/AbstractSDK/abstract.js/commit/9f6274a756cc84f2013f1f460dd2212d01f159b1) Thanks [@adairrr](https://github.com/adairrr)! - Add interchain account queries

### Patch Changes

- [`ce722cc`](https://github.com/AbstractSDK/abstract.js/commit/ce722cc4821e220694ec710ebd867e2c906aa888) Thanks [@dalechyn](https://github.com/dalechyn)! - Bump `graphql-request`.

## 0.2.3

### Patch Changes

- [`bb7def0`](https://github.com/AbstractSDK/abstract.js/commit/bb7def01d62cb759edb6972b7a49331c39bad1e9) Thanks [@dalechyn](https://github.com/dalechyn)! - useAccountBalanceFromApi hook

## 0.2.2

### Patch Changes

- [#33](https://github.com/AbstractSDK/abstract.js/pull/33) [`ec5cb1e`](https://github.com/AbstractSDK/abstract.js/commit/ec5cb1e346668d3b93ad175fe3964a6be7327c29) Thanks [@dalechyn](https://github.com/dalechyn)! - Moves the provider-injection logic from `cli` package into `react` package.

## 0.2.1

### Patch Changes

- [`f1ba82a`](https://github.com/AbstractSDK/abstract.js/commit/f1ba82a116296c8d4d9cdc88e3cac136284528a1) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes args propagation in `useDeposit`, `useExecute` and `useWithdraw` hook, and prettifies types from cut arguments.

## 0.2.0

### Minor Changes

- [#30](https://github.com/AbstractSDK/abstract.js/pull/30) [`24438df`](https://github.com/AbstractSDK/abstract.js/commit/24438dfd851ff9d8b7ca02da2168bf60cd91cfde) Thanks [@dalechyn](https://github.com/dalechyn)! - Reimplements `core` package, with backwards compatibility support at `@abstract-money/core/legacy`.

## 0.1.5

### Patch Changes

- [#27](https://github.com/AbstractSDK/abstract.js/pull/27) [`72c2d2c`](https://github.com/AbstractSDK/abstract.js/commit/72c2d2c7dffb34fedad3af4a8905f8737f58f206) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes api url propagation

## 0.1.4

### Patch Changes

- [#25](https://github.com/AbstractSDK/abstract.js/pull/25) [`39b71f4`](https://github.com/AbstractSDK/abstract.js/commit/39b71f43a7a207199dcf3abcd491db8de4f7825f) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes the missing override of the `apiUrl`

## 0.1.3

### Patch Changes

- [#23](https://github.com/AbstractSDK/abstract.js/pull/23) [`2811970`](https://github.com/AbstractSDK/abstract.js/commit/281197085b04750aa041fb1904535d5926e043de) Thanks [@dalechyn](https://github.com/dalechyn)! - Optional accountId and optional provider.

## 0.1.2

### Patch Changes

- Updated dependencies [[`31348c5`](https://github.com/AbstractSDK/abstract.js/commit/31348c5a05da05b2d5e4d4446a72662e4669c466)]:
  - @abstract-money/cosmwasm-utils@0.1.1

## 0.1.1

### Patch Changes

- [#14](https://github.com/AbstractSDK/abstract.js/pull/14) [`bfb3519`](https://github.com/AbstractSDK/abstract.js/commit/bfb351972b4bd901d219f0f3790050c3a7264e0e) Thanks [@dalechyn](https://github.com/dalechyn)! - Implements the `useAccounts` hook to retrieve the list of accounts of the connected signer.

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
  - @abstract-money/cosmwasm-utils@0.1.0

# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] - yyyy-mm-dd

### Added

### Changed

### Fixed

## [0.19.0] - 2023-09-07

### Added

- Abstract SDK 0.19.0

### Changed

- AbstractAccount.createAccountWithGovernance accepts an object instead of individual parameters
- Manager.installModule => installModules
- Additional `installModules` attribute on AccountFactory.createAccount
- AccountIds are now objects, and use AbstractAccountId class
- Apps now take in version control in their ExecuteMsg Factory

### Fixed

## [0.17.9]

### Added

- Owner cache on AbstractClient

## [0.13.0] - 2023-03-15

### Added

### Changed

- ANS Host keys -> ids, entries -> metadatas

### Fixed

## [0.11.0] - 2023-02-08

Abstract 0.8.0

### Added

### Changed

- Version Control Breaking changes

### Fixed

## [0.10.0] - 2023-01-24

### Added

### Changed

- Abstract addresses now use hyphens instead of underscores

### Fixed

## [0.9.2] - 2023-01-12

### Added

### Changed

- Updated VC client with list modules

### Fixed

## [0.9.0] - 2023-01-12

### Added

### Changed

- Updated ANS types to be compatible with abstract [0.5.2]

### Fixed

## [0.8.2] - 2023-01-12

### Added

- composeExecuteOnModule in AbstractOsClient

### Changed

### Fixed

## [0.7.1] - 2022-01-09

### Added

### Changed

### Fixed

- undefined return on index

## [0.7.0] - 2022-01-09

### Added

### Changed

- Version control updated to Abstract 0.5.0

### Fixed

## [0.6.1] - 2022-01-08

### Added

#### AnsQueryClient

- Channel, contract filter and list

### Changed

### Fixed

## [0.6.0] - 2022-01-08

### Added

- `AnsQueryClient` with better list and filter methods for assets

### Changed

- `AnsQueryClient` (generated) -> `AnsHostQueryClient`

### Fixed
