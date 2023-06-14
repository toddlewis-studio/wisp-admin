const gmr = require('../src/gmr.js')
const ssCatalog = require('../../asset/spritesheet_catalog.PNG')

module.exports = gmr.prefab('catalog', (sprite, app, x) => {

  // 72 x 96
  sprite.addAnimation('Default', [x * 72, 0, 72, 96])

}, gmr.animation('spritesheet', ssCatalog))