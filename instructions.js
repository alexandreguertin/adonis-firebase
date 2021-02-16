'use strict'

/*
 * adonis-firebase
 *
 * (c) alexandreguertin
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'firebase.js'),
      path.join(cli.helpers.appRoot(), 'config/firebase.js')
    )
    cli.command.completed('create', 'config/firebase.js')
  } catch (error) {
    // ignore error
  }
}
