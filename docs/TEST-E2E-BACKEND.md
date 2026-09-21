# Test E2E backend — INSTANCE 001 / INSTANCE 002

Date : 21/09/2026

Parcours testé directement sur Google Sheets :
1. création temporaire d'une affaire dans INSTANCE 001 ;
2. création d'une action ;
3. création d'une décision ;
4. ajout d'une référence document ;
5. ajout d'un contact ;
6. ajout d'un événement ;
7. relecture des six objets depuis `CA OS — DATA — INSTANCE 001` ;
8. recherche de l'affaire test dans INSTANCE 002 : 0 occurrence ;
9. suppression des six lignes de test dans INSTANCE 001.

Identifiant affaire de preuve : `AFF-TEST-E2E-001`.

Résultat backend : OK — persistance Google confirmée et isolation INSTANCE 001 / INSTANCE 002 confirmée.

Limite : ce test valide le backend réel. Le parcours navigateur complet reste dépendant du Client ID OAuth Google et de l'origine HTTPS autorisée.
