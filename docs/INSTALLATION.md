# CA OS INSTALL — V0.1

1. Créer/identifier l’instance et son dossier racine.
2. Créer le Google Sheet de données et les tables prévues.
3. Renseigner CONFIG : INSTANCE_ID, versions, providers, ROOT_FOLDER_ID, DATA_SOURCE_ID.
4. Créer un OAuth Client ID de type Web dans Google Cloud, sans client secret frontend.
5. Autoriser l’origine de l’application hébergée.
6. Dans CA OS > Configuration, sélectionner Google et renseigner DATA_SOURCE_ID, ROOT_FOLDER_ID et GOOGLE_OAUTH_CLIENT_ID.
7. Se connecter via OAuth Google et accepter uniquement les scopes requis.
8. Vérifier le diagnostic : aucune ligne BLOCK.

Limitation V0.1 : la création du Client ID OAuth reste une étape administrateur Google manuelle. Aucun contournement n’est prévu.
