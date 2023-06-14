const gmr = require('../src/gmr.js')
const sceneAbilityIconDouble  = require('../scene/ability-icon-double.js')

module.exports = div => gmr.instance(div, app => {
  app.setResolution(480, 240)
  app.setFPS(1)
  app.openScene( sceneAbilityIconDouble() )
  app.setPixelMode(true)
  app.canvas.el.style.background = 'transparent'
})