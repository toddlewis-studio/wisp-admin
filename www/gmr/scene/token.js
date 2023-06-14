const state = require('../../lib/state.js')
const gmr = require('../src/gmr.js')
const prefabToken = require('../prefab/token.js')

module.exports = gmr.scene( (scene, app, settings ) => {
  scene.addPrefab( prefabToken )

  let selectedToken = []
  if(settings.token) { 
    if(Array.isArray(settings.token.img)) settings.token.img = settings.token.img.map(v => parseInt(v))
    const rarity = {
      Common: 'lightgreen',
      Rare: '#90cfee',
      Ultra: '#cc90ee',
      Special: '#eeed90'
    }
    selectedToken[0] = scene.spawn('token', 0, 0, 240, 240, settings.token.img[0], settings.token.img[1], rarity[settings.token.rarity])
    selectedToken[0].setAnimation('Right')
    app.renderLoop.delay(2, () => app.renderLoop.off())
  } else {
    state.offping`preview`
    state.onping`preview`((lx, ly) => {
      if(selectedToken.length) {
        selectedToken.forEach(t=>t.destroy())
        selectedToken = []
      }
      selectedToken[0] = scene.spawn('token', 0, 0, 240, 240, lx, ly)
      if(settings.mode && settings.mode === 'double'){
        selectedToken[1] = scene.spawn('token', 240, 0, 240, 240, lx, ly)
        selectedToken[1].setAnimation('Right')
      } else {
        selectedToken[0].setAnimation('Right')
      }
      app.renderLoop.on()
      app.renderLoop.delay(1, () => app.renderLoop.off())
    })
  }
})