---
"@abstract-money/core": major
"@abstract-money/react": major
"wagemos-cosmoskit-nextjs": patch
"wagemos-graz-nextjs": patch
"@abstract-money/cli": patch
---

Changed the API for `react` and `core` packages. Previously `core` package had unnecessary `args:{}` wrapping, now it doesn't. Also, `query` and `mutation` fields were added to the `react` package to have a clear separation of concerns, as well as fixed inconsistent API around `chainName` and types.
