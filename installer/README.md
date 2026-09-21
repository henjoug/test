# CA OS INSTALL — V0.1

Le code exécutable de l’installateur est dans `src/installer/GoogleInstanceInstaller.ts`.
Ce dossier racine documente son point d’entrée sans dupliquer la logique.

L’installateur crée la racine d’instance, les dossiers, le Google Sheet, les 14 tables, CONFIG, SCHEMA_VERSION=2, ID_COUNTERS, MIGRATIONS, AUDIT_LOG puis exécute le diagnostic.

**ACTION UTILISATEUR REQUISE** : créer un OAuth Client ID de type Web application dans Google Cloud et déclarer l’origine HTTPS de CA OS. Aucun client secret n’est utilisé dans le frontend.
