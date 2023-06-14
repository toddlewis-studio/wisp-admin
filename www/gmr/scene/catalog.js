const state = require('../../lib/state.js')
const gmr = require('../src/gmr.js')
const prefabCatalog = require('../prefab/catalog.js')

module.exports = gmr.scene( (scene, app, catalog ) => {
  scene.addPrefab( prefabCatalog )

  let selectedCatalog
  if(catalog) {
    selectedCatalog = scene.spawn('catalog', 0, 0, 72, 96, catalog)
    app.renderLoop.delay(2, () => app.renderLoop.off())
  } else {
    state.offping`preview`
    state.onping`preview`(catalog => {
      if(selectedCatalog) {
        selectedCatalog.destroy()
        selectedCatalog = undefined
      }
      selectedCatalog = scene.spawn('catalog', 0, 0, 72, 96, catalog)
      app.renderLoop.on()
      app.renderLoop.delay(1, () => app.renderLoop.off())
    })
  }
})