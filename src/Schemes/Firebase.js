'use strict'

/*
 * adonis-firebase
 *
 * (c) alexandreguertin
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const JwtScheme = require('@adonisjs/auth/src/Schemes/Jwt')
const CE = require('@adonisjs/auth/src/Exceptions')

const Firebase = use('Firebase')

class FirebaseScheme extends JwtScheme {
  async check () {
    if (this.user) {
      return true
    }

    const token = this.getAuthHeader()

    try {
      // Verify token manually
      // https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
      this.jwtPayload = await Firebase.admin.auth().verifyIdToken(token)
    } catch ({ errorInfo }) {
      if (errorInfo.code === 'auth/id-token-expired') {
        throw CE.ExpiredJwtToken.invoke()
      }
      throw CE.InvalidJwtToken.invoke()
    }

    const { _Model, _config } = this._serializerInstance

    this.user = await _Model.findOrCreate({
      [_config.uid]: this.jwtPayload.sub
    })

    return true
  }
}

module.exports = FirebaseScheme
