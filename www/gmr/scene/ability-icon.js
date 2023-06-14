const state = require('../../lib/state.js')
const gmr = require('../src/gmr.js')
const prefabAbilityIcon = require('../prefab/ability-icon.js')

module.exports = gmr.scene( (scene, app, index ) => {
  scene.addPrefab( prefabAbilityIcon )

  let selected
  if(index) {
    selected = scene.spawn('ability-icon', 0, 0, 240, 240, index)
    app.renderLoop.delay(2, () => app.renderLoop.off())
  } else {
    state.offping`preview-ai`
    state.onping`preview-ai`(index => {
      if(selected) {
        selected.destroy()
        selected = undefined
      }
      selected = scene.spawn('ability-icon', 0, 0, 240, 240, index)
      app.renderLoop.on()
      app.renderLoop.delay(1, () => app.renderLoop.off())
    })
  }
})