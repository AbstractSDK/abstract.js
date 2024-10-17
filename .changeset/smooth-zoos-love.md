---
"@abstract-money/cli": major
"@abstract-money/core": major
"@abstract-money/react": major
"@abstract-money/provider-cosmoskit": major
"@abstract-money/provider-graz": major
"wagemos-cosmoskit-nextjs": minor
"wagemos-graz-nextjs": minor
"@abstract-money/cosmwasm-utils": minor
"@abstract-money/bundle-require": minor
---

Update Abstract to 0.24.0 with unified accounts

The major changes include:
- Updating Abstract to 0.24.0
- Removing distinction between `proxy` and `manager`, replacing them with simply `account`
- Clarify `executeRemote` and `executeOnRemote`
- Add doc comments
- Remove components from legacy code
- Ensure generation works for both esm and cjs
