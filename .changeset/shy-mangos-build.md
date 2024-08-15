---
"@abstract-money/core": minor
"@abstract-money/react": minor
---

Update Abstract to 0.23

This change updates:
- Abstract to 0.23
- Chain registry to 0.60.60

Breaking changes:
- `Manager.proposeOwnership` has been removed

Semi-breaking changes:
- Chain registry updating means that consumers will also need to update their chain registry + types
- Raw manager ownership query results have changed types.
