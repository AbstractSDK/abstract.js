---
"@abstract-money/react": minor
"wagemos-cosmoskit-nextjs": patch
"wagemos-graz-nextjs": patch
"@abstract-money/cli": patch
"@abstract-money/provider-graz": patch
---

Deprecated `AbstractAccountIdProvider` in favor of custom client's accountId state management.
Introduced consequent changes to types involving `accountId`.
Fixes the peer-dependency issue in `provider-graz` package.
Dropped `@cosmjs/amino` in favor of `@cosmjs/stargate`
