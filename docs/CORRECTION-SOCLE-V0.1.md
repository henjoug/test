# Correction SOCLE CA OS V0.1

État Producteur du 21/09/2026.

- `CA_OS_VERSION = 0.1.0`
- `SCHEMA_VERSION = 2`
- INSTANCE 001 et INSTANCE 002 alignées sur le même schéma.
- IDs métier générés par `SequenceService` / table `ID_COUNTERS`, indépendamment de LocalData.
- Bootstrap d'instance centralisé dans `public/caos.instances.json`; après OAuth la table `CONFIG` du Sheet devient la source d'autorité.
- OAuth officiel Google Identity Services; aucun client secret frontend.
- Scopes : openid, email, profile, spreadsheets, drive.file.
- CA OS INSTALL crée racine, 5 dossiers, Sheet, 14 tables, CONFIG, SCHEMA_VERSION, MIGRATIONS, ID_COUNTERS, AUDIT_LOG et diagnostic.
- Test backend E2E exécuté sur INSTANCE 001 : affaire + action + décision + document + contact + événement écrits et relus; absence confirmée dans INSTANCE 002; données de test supprimées après contrôle.

Blocages externes restants : création du Client ID OAuth Google par le propriétaire du projet Google Cloud et activation d'un hébergement public autorisé pour l'origine OAuth.

Statut : SOCLE CA OS V0.1 — PRODUIT À CONTRÔLER PAR INSPECTEUR.
