'use strict'

/*
 * adonis-firebase-admin
 *
 * (c) alexandreguertin
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const FirebaseAdmin = require('firebase-admin')

class Firebase {
  constructor (Config) {
    const credential = FirebaseAdmin.credential.cert(Config.get('firebase.credential'))
    this.admin = FirebaseAdmin.initializeApp(credential)
  }
}

module.exports = Firebase
