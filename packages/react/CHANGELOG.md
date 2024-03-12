# @abstract-money/react

## 0.3.1

### Patch Changes

- [#77](https://github.com/AbstractSDK/abstract.js/pull/77) [`ecbdd3a`](https://github.com/AbstractSDK/abstract.js/commit/ecbdd3aec6226ff23e71f9b16596834bf808742f) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixed typing of `QueryData` for certain hooks.

## 0.3.0

### Minor Changes

- [#75](https://github.com/AbstractSDK/abstract.js/pull/75) [`6a02ff5`](https://github.com/AbstractSDK/abstract.js/commit/6a02ff503356d8d17bd94973f7b75c728b13b340) Thanks [@dalechyn](https://github.com/dalechyn)! - Deprecated `AbstractAccountIdProvider` in favor of custom client's accountId state management.
  Introduced consequent changes to types involving `accountId`.
  Fixes the peer-dependency issue in `provider-graz` package.
  Dropped `@cosmjs/amino` in favor of `@cosmjs/stargate`

### Patch Changes

- Updated dependencies []:
  - @abstract-money/core@0.3.9

## 0.2.28

### Patch Changes

- [#71](https://github.com/AbstractSDK/abstract.js/pull/71) [`d7b32cf`](https://github.com/AbstractSDK/abstract.js/commit/d7b32cf3e3ca1ca8460ba91c7013ed4bf3f3e301) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixes bad dependencies in all of the packages.

- Updated dependencies [[`d7b32cf`](https://github.com/AbstractSDK/abstract.js/commit/d7b32cf3e3ca1ca8460ba91c7013ed4bf3f3e301)]:
  - @abstract-money/core@0.3.9

## 0.2.27

### Patch Changes

- [`2edf0de`](https://github.com/AbstractSDK/abstract.js/commit/2edf0de7ae902a3543c8b6728a563d4583aec808) Thanks [@dalechyn](https://github.com/dalechyn)! - Make AbstractAccountIdProvider controllable.

## 0.2.26

### Patch Changes

- Updated dependencies [[`87b2119`](https://github.com/AbstractSDK/abstract.js/commit/87b2119b09e167a3693e75703b5db16cb1c1b491)]:
  - @abstract-money/core@0.3.8

## 0.2.25

### Patch Changes

- [`6b6809d`](https://github.com/AbstractSDK/abstract.js/commit/6b6809d7f9b4288aa3626c18818218dbc6805728) Thanks [@dalechyn](https://github.com/dalechyn)! - Fix the parameters for hooks that get the version.

- Updated dependencies [[`6b6809d`](https://github.com/AbstractSDK/abstract.js/commit/6b6809d7f9b4288aa3626c18818218dbc6805728)]:
  - @abstract-money/core@0.3.7

## 0.2.24

### Patch Changes

- [`795d207`](https://github.com/AbstractSDK/abstract.js/commit/795d2079b714bc740c670a95954fd17dbf4ca9de) Thanks [@dalechyn](https://github.com/dalechyn)! - Add hook to fetch module version./

- Updated dependencies [[`795d207`](https://github.com/AbstractSDK/abstract.js/commit/795d2079b714bc740c670a95954fd17dbf4ca9de)]:
  - @abstract-money/core@0.3.6

## 0.2.23

### Patch Changes

- [`12f8922`](https://github.com/AbstractSDK/abstract.js/commit/12f89220a5abeaf673d3836330d162f9694f89b7) Thanks [@dalechyn](https://github.com/dalechyn)! - Return version along with address from the version control to cache it.

- Updated dependencies [[`12f8922`](https://github.com/AbstractSDK/abstract.js/commit/12f89220a5abeaf673d3836330d162f9694f89b7)]:
  - @abstract-money/core@0.3.5

## 0.2.22

### Patch Changes

- [`42f205d`](https://github.com/AbstractSDK/abstract.js/commit/42f205d544336b452649a490e22e7a5d1c015cb0) Thanks [@dalechyn](https://github.com/dalechyn)! - Add `useSubAccountsIds` hook.

## 0.2.21

### Patch Changes

- [`6275682`](https://github.com/AbstractSDK/abstract.js/commit/627568200c08d6e786693ef4f8795b5b7de11b4c) Thanks [@dalechyn](https://github.com/dalechyn)! - Fix the query key for account public hooks.

## 0.2.20

### Patch Changes

- [`e838eb0`](https://github.com/AbstractSDK/abstract.js/commit/e838eb076f7a14cd3ee4034a88d8383869d5efb6) Thanks [@dalechyn](https://github.com/dalechyn)! - Fix broken `enabled` on public account hooks.

## 0.2.19

### Patch Changes

- [`bd6928a`](https://github.com/AbstractSDK/abstract.js/commit/bd6928a8e6779f02498b09dbcb01a09421f1c7e4) Thanks [@dalechyn](https://github.com/dalechyn)! - Added hook to fetch account factory config

## 0.2.18

### Patch Changes

- Updated dependencies [[`61866cd`](https://github.com/AbstractSDK/abstract.js/commit/61866cdc4b93eaa2b43fdceb8144016037228998)]:
  - @abstract-money/core@0.3.4

## 0.2.17

### Patch Changes

- Updated dependencies [[`22daa16`](https://github.com/AbstractSDK/abstract.js/commit/22daa16fd55a0c54066b46c98d7b1cf68e88d1ab)]:
  - @abstract-money/core@0.3.3

## 0.2.16

### Patch Changes

- [`396d21e`](https://github.com/AbstractSDK/abstract.js/commit/396d21e1fe6a0fd80655b9de5fa6bd68eebd8ea1) Thanks [@dalechyn](https://github.com/dalechyn)! - Added missed overload for module address prediction hook

## 0.2.15

### Patch Changes

- [#55](https://github.com/AbstractSDK/abstract.js/pull/55) [`2bca172`](https://github.com/AbstractSDK/abstract.js/commit/2bca17257f8b957f6e2b8e156e7e9cad1b4674ff) Thanks [@adairrr](https://github.com/adairrr)! - Add helpers to predict module address

- Updated dependencies [[`2bca172`](https://github.com/AbstractSDK/abstract.js/commit/2bca17257f8b957f6e2b8e156e7e9cad1b4674ff)]:
  - @abstract-money/core@0.3.2

## 0.2.14

### Patch Changes

- [#53](https://github.com/AbstractSDK/abstract.js/pull/53) [`f0d965e`](https://github.com/AbstractSDK/abstract.js/commit/f0d965e33176306bfb6e11d6d4c1924b5e960a5a) Thanks [@dalechyn](https://github.com/dalechyn)! - Add persistKey parameter to AbstractAccountIdProvider

- [#52](https://github.com/AbstractSDK/abstract.js/pull/52) [`4526937`](https://github.com/AbstractSDK/abstract.js/commit/4526937949897f736daf125558454cc069205562) Thanks [@dalechyn](https://github.com/dalechyn)! - Introduces new hooks for the savings app.

- Updated dependencies [[`4526937`](https://github.com/AbstractSDK/abstract.js/commit/4526937949897f736daf125558454cc069205562), [`cadb381`](https://github.com/AbstractSDK/abstract.js/commit/cadb381837899de18a71efb2a21e14819d70214d)]:
  - @abstract-money/core@0.3.1

## 0.2.13

### Patch Changes

- Updated dependencies [[`ce722cc`](https://github.com/AbstractSDK/abstract.js/commit/ce722cc4821e220694ec710ebd867e2c906aa888), [`9f6274a`](https://github.com/AbstractSDK/abstract.js/commit/9f6274a756cc84f2013f1f460dd2212d01f159b1)]:
  - @abstract-money/core@0.3.0

## 0.2.12

### Patch Changes

- [`82b5ca6`](https://github.com/AbstractSDK/abstract.js/commit/82b5ca619f5a8bf0e6dcc4b0741d4e91edb396d0) Thanks [@dalechyn](https://github.com/dalechyn)! - Hook name fix

## 0.2.11

### Patch Changes

- [`bb7def0`](https://github.com/AbstractSDK/abstract.js/commit/bb7def01d62cb759edb6972b7a49331c39bad1e9) Thanks [@dalechyn](https://github.com/dalechyn)! - useAccountBalanceFromApi hook

- Updated dependencies [[`bb7def0`](https://github.com/AbstractSDK/abstract.js/commit/bb7def01d62cb759edb6972b7a49331c39bad1e9)]:
  - @abstract-money/core@0.2.3

## 0.2.10

### Patch Changes

- [`f183560`](https://github.com/AbstractSDK/abstract.js/commit/f1835604f7b00e4b89c550620940d0df3af1a6a2) Thanks [@dalechyn](https://github.com/dalechyn)! - Partial arguments for generated hooks

- Updated dependencies []:
  - @abstract-money/core@0.2.2

## 0.2.9

### Patch Changes

- [`c49dee6`](https://github.com/AbstractSDK/abstract.js/commit/c49dee6c6db5dad9896e9b858fede68b645efcaf) Thanks [@dalechyn](https://github.com/dalechyn)! - Type fix

## 0.2.8

### Patch Changes

- [`3ae1291`](https://github.com/AbstractSDK/abstract.js/commit/3ae1291a673964478e74aca758d7537d4a4db615) Thanks [@dalechyn](https://github.com/dalechyn)! - Fixed lost export

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
