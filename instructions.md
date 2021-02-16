## Register provider

First, make sure to register the provider in `start/app.js`.

```js
const providers = [
  '@alexandreguertin/adonis-firebase/providers/FirebaseProvider'
]
```

## Config

Then define the scheme in `config/auth.js` and set it as the default authenticator (optional).

```js
module.exports = {
  authenticator: 'firebase',

  // ...

  firebase: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'firebase',
    uid: 'firebase_user_uid'
  }
}
```

## Env

Finally, transcribe your account's service key to `.env`.

```env
FIREBASE_CREDENTIALS_TYPE=...
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_CLIENT_ID=...
FIREBASE_AUTH_URI=...
FIREBASE_TOKEN_URI=...
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=...
FIREBASE_CLIENT_X509_CERT_URL=...
```

That's all 🎉