# Bootstrap des instances CA OS

Le fichier `public/caos.instances.json` contient uniquement les points d'entrée non secrets nécessaires pour localiser une instance avant OAuth : INSTANCE_ID, nom, DATA_SOURCE_ID et ROOT_FOLDER_ID.

Il ne contient ni donnée métier, ni token, ni mot de passe, ni Client Secret.

Après OAuth, CA OS lit la table `CONFIG` du Sheet désigné. Cette table devient la configuration d'autorité de l'instance.
