const state = require('../../lib/state.js')
const gmr = require('../src/gmr.js')
const prefabAbilityIcon = require('../prefab/ability-icon.js')

module.exports = gmr.scene( (scene, app) => {
  scene.addPrefab( prefabAbilityIcon )

  let selected = []
  state.offping`preview-aid`
  state.onping`preview-aid`((l, r) => {
    selected.forEach(t => {
      t.destroy()
    })
    selected[0] = scene.spawn('ability-icon', 0, 0, 240, 240, l)
    selected[1] = scene.spawn('ability-icon', 240, 0, 240, 240, r)
    app.renderLoop.on()
    app.renderLoop.delay(1, () => app.renderLoop.off())
  })
})