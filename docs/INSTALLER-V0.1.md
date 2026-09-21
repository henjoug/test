# CA OS INSTALL — V0.1

L'installateur Google prévu dans le source V0.1 exécute :
1. création d'une racine d'instance ;
2. création des dossiers `01 - Données`, `02 - Documents`, `03 - Photos`, `04 - Plans`, `05 - Générés` ;
3. création d'un Google Sheet natif ;
4. création des 14 tables ;
5. initialisation de CONFIG ;
6. initialisation de SCHEMA_VERSION=2 ;
7. initialisation des compteurs ID_COUNTERS ;
8. journal AUDIT_LOG + MIGRATIONS ;
9. diagnostic final des tables.

Intervention manuelle indispensable avant exécution : fournir un OAuth Client ID Web Google valide et autoriser l'origine HTTPS de CA OS.
