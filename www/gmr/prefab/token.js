const gmr = require('../src/gmr.js')
const ssToken = require('../../asset/spritesheet_token.PNG')

module.exports = gmr.prefab('token', (sprite, app, x, y, rarity) => {

  sprite.addAnimation('Left', [x * 48, y * 24, 24, 24])
  sprite.addAnimation('Right', [(x * 48) + 24, y * 24, 24, 24])
  sprite.setAnimation('Left')

  if(rarity)
    sprite.setBackground(true, rarity)

}, gmr.animation('spritesheet', ssToken))