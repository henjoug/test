# SOCLE CA OS V0.1 — État des tests Producteur

Dernier build code vérifié : `tsc && vite build` réussi sur GitHub Actions (run 35602013304). Les tests cœur locaux couvrent IDs, affaire, action/clôture, décision, document, contact, événement, persistance et isolation de deux instances.

- PASS : 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.
- PARTIEL : 01, 02 — build responsive/PWA validé, mais l'URL publique n'est pas encore activée.
- BLOQUÉ : 03 — OAuth Google nécessite un Client ID Web autorisé.

Le déploiement GitHub Pages a été tenté : le build a réussi mais l'activation Pages a été refusée à l'intégration (`Resource not accessible by integration`). Aucun hébergement payant n'a été activé.
