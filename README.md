# Abstract Typescript SDKs

This monorepo contains the Typescript-based SDKs for AbstractSDK.

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
   
2**Install Dependencies**:

   ```bash
   pnpm i
   ```

3**Build the Repository**:

   We use turbo-build to build the repository. This will build all packages in parallel.

   ```bash
   pnpm build
   ```

