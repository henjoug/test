# OAuth Google — CA OS V0.1

CA OS utilise Google Identity Services (OAuth 2.0 navigateur) et ne stocke aucun mot de passe ni client secret.

Scopes V0.1 :
- `openid`
- `email`
- `profile`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/drive.file`

## ACTION UTILISATEUR REQUISE
Créer dans Google Cloud un **OAuth Client ID / Web application**, autoriser l'origine HTTPS exacte de CA OS, puis copier uniquement le **Client ID** dans Diagnostic > Configuration. Ne jamais copier de Client Secret dans CA OS.

Une fois connecté, le fichier de bootstrap sert uniquement à localiser le Sheet de l'instance. La table `CONFIG` du Sheet est ensuite chargée et devient la configuration d'autorité.
