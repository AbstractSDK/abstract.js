# Abstract Typescript SDKs

This monorepo contains the Typescript-based SDKs for AbstractSDK. Please [read the docs](https://js.abstract.money)!

## Development

1. Install the Abstract CLI:

   ```bash
   npm i -g @abstract-money/cli
   ```

## Prerequisites

- Ensure you have Node.js installed.
- Install `pnpm` globally:

  ```bash
  npm i -g pnpm
  ```

## Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AbstractSDK/core.git abstractjs
   cd abstractjs
   ```
   
2. **Install Dependencies**:

   ```bash
   pnpm i
   ```

3. **Build the Repository**:

   We use turbo-build to build the repository. This will build all packages in parallel.

   ```bash
   pnpm build
   ```


## Types

We have tried to make this repository compatible with both ESM and CJS, following guides from https://johnnyreilly.com/dual-publishing-esm-cjs-modules-with-tsup-and-are-the-types-wrong.

To check the types are exported properly, run the commands in the packages in which you're interested:
```bash
npx --yes @arethetypeswrong/cli --pack .
```
