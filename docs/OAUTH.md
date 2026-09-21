# OAuth Google — CA OS V0.1

CA OS utilise Google Identity Services avec un OAuth 2.0 Client ID **Web application**. Aucun client secret n’est utilisé ni stocké dans le frontend ou Git.

Scopes V0.1 :
- `openid`
- `email`
- `profile`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/drive.file`

## ACTION UTILISATEUR REQUISE
1. Ouvrir Google Cloud Console.
2. Sélectionner ou créer le projet CA OS.
3. Activer **Google Sheets API** et **Google Drive API**.
4. Configurer l’écran de consentement OAuth (interne si Workspace le permet, sinon externe en mode test).
5. Dans **APIs & Services → Credentials → Create credentials → OAuth client ID**, choisir **Web application**.
6. Ajouter l’URL HTTPS finale de CA OS dans **Authorized JavaScript origins** (ex. `https://ca-os.example.app`).
7. Copier uniquement le **Client ID** (`...apps.googleusercontent.com`).
8. Dans CA OS → Diagnostic & Configuration, renseigner `GOOGLE_OAUTH_CLIENT_ID`, enregistrer puis cliquer **Se connecter à Google**.
9. Ne jamais copier le Client Secret dans CA OS, le dépôt Git ou CONFIG.

Une fois connecté, le token OAuth reste en mémoire de la session navigateur et le connecteur Sheets utilise `DATA_SOURCE_ID` de l’instance active.
