# CA OS — SCHEMA_VERSION 2

Le schéma V2 est l'unique schéma actif du socle V0.1.

Ajouts principaux par rapport au schéma initial :
- `AFFAIRES.CLIENT_NOM`
- standard détaillé CA-Decision dans `DECISIONS` : `FAIT`, `RISQUE`, `IMPACT`, `INFORMATION_MANQUANTE`, `FIABILITE`, `RECOMMANDATION`, `ACTION`, `RESPONSABLE_USER_ID`, `ECHEANCE`.

Les instances existantes sont migrées explicitement via `MIGRATIONS`; aucune modification structurelle importante ne doit être appliquée silencieusement.
