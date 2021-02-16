'use strict'

/*
 * adonis-firebase
 *
 * (c) alexandreguertin
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ioc, ServiceProvider } = require('@adonisjs/fold')

class FirebaseProvider extends ServiceProvider {
  _extendAuthScheme () {
    ioc.extend('Adonis/Src/Auth', 'firebase', function () {
      const FirebaseScheme = require('../src/Schemes/Firebase')
      return FirebaseScheme
    }, 'scheme')
  }

  _register () {
    this.app.singleton('Firebase', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('../src/Firebase'))(Config)
    })
  }

  register () {
    this._extendAuthScheme()
    this._register()
  }
}

module.exports = FirebaseProvider
