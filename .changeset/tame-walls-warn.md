---
"wagemos-cosmoskit-nextjs": patch
"wagemos-graz-nextjs": patch
"@abstract-money/provider-cosmoskit": patch
"@abstract-money/provider-graz": patch
"@abstract-money/react": patch
---

Moved query client to be defined outside of the abstract provider. Now you either need to declare one in your app in case you're using cosmos-kit, or the sdk will use graz provider's query client.
