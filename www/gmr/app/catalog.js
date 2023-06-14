const gmr = require('../src/gmr.js')
const sceneCatalog = require('../scene/catalog.js')

module.exports = (div, catalog) => gmr.instance(div, app => {
  app.setResolution(72, 96)
  app.setFPS(1)
  app.openScene( sceneCatalog(catalog) )
  app.setPixelMode(true)
})