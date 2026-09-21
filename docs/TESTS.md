# Tests CA OS V0.1

Commande CI :
```bash
npm install
npm test
npm run build
```

`npm test` compile le cœur (`tsconfig.core.json`) puis exécute `tests/core.test.mjs`.
Les tests couvrent : SequenceService/ID_COUNTERS, CRUD métier minimal, persistance locale, isolation A/B, diagnostic OAuth, SCHEMA_VERSION=2 et présence des champs V2.

Le test navigateur Google complet requiert un OAuth Client ID Web autorisé pour l’URL HTTPS déployée.
