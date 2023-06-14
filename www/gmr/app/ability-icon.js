const gmr = require('../src/gmr.js')
const sceneAbilityIcon = require('../scene/ability-icon.js')

module.exports = (div, index) => gmr.instance(div, app => {
  app.setResolution(240, 240)
  app.setFPS(1)
  app.openScene( sceneAbilityIcon(index) )
  app.setPixelMode(true)
  app.canvas.el.style.background = 'transparent'
})