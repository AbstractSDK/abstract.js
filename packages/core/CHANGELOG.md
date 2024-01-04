## 0.1.0

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
