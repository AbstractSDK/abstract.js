---
"@abstract-money/cli": minor
"wagemos-cosmoskit-nextjs": patch
"wagemos-graz-nextjs": patch
"@abstract-money/react": patch
---

Dropped the `chainName` that was passed previously as a parameter to every query/mutation. It's not needed as the account always has a `chainName` set.
