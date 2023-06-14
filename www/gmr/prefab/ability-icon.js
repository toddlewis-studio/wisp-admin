const gmr = require('../src/gmr.js')
const ssAbility = require('../../asset/spritesheet_ability.PNG')

module.exports = gmr.prefab('ability-icon', (sprite, app, x) => {

  sprite.addAnimation('Default', [x * 24, 0, 24, 24])

}, gmr.animation('spritesheet', ssAbility))