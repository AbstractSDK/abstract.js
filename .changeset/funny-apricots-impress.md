---
"wagemos-cosmoskit-nextjs": patch
"wagemos-graz-nextjs": patch
"@abstract-money/cli": patch
"@abstract-money/react": patch
---

Improves `accountId` usage, when passed to generated hooks or hooks from \`react\` package, it takes precedence over the context, yet if one is not passed, an error is thrown to indicate that it either should be passed or account id provider wrapping is needed. Also improves `cli` to not require args in hooks that don't need them.
