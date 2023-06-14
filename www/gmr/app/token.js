const gmr = require('../src/gmr.js')
const sceneToken = require('../scene/token.js')

module.exports = (div, settings) => gmr.instance(div, app => {
  if(!settings) settings = {}
  if(settings.mode === 'double') {
    app.setResolution(480, 240)
  }
  else {
    app.setResolution(240, 240)
  }
  app.setFPS(1)
  app.openScene( sceneToken(settings) )
  app.setPixelMode(true)
  app.canvas.el.style.background = 'transparent'

})