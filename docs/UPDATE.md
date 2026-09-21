# CA OS UPDATE — V0.1

Le produit expose CA_OS_VERSION et chaque instance expose SCHEMA_VERSION. Toute évolution structurelle doit utiliser une migration explicite via MigrationRunner et être tracée dans MIGRATIONS.

Avant mise à jour : sauvegarder/exporter la source de données, relever version produit et schéma, exécuter le diagnostic. Après mise à jour : rejouer les tests fonctionnels et le diagnostic. Les données utilisateur ne doivent jamais être remplacées par le code du produit.
