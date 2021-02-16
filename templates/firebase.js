'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  credential: {
    type: Env.getOrFail('FIREBASE_CREDENTIALS_TYPE'),
    project_id: Env.getOrFail('FIREBASE_PROJECT_ID'),
    private_key_id: Env.getOrFail('FIREBASE_PRIVATE_KEY_ID'),
    private_key: Env.getOrFail('FIREBASE_PRIVATE_KEY'),
    client_email: Env.getOrFail('FIREBASE_CLIENT_EMAIL'),
    client_id: Env.getOrFail('FIREBASE_CLIENT_ID'),
    auth_uri: Env.getOrFail('FIREBASE_AUTH_URI'),
    token_uri: Env.getOrFail('FIREBASE_TOKEN_URI'),
    auth_provider_x509_cert_url: Env.getOrFail('FIREBASE_AUTH_PROVIDER_X509_CERT_URL'),
    client_x509_cert_url: Env.getOrFail('FIREBASE_CLIENT_X509_CERT_URL')
  }
}
