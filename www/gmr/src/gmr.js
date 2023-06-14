const _css = require('./gmrStylesheet.js')
const animation = require('./gmrAnimation.js')
const behavior = require('./gmrBehavior.js')
const imgManager = require('./gmrImgManager.js')
const instance = require('./gmrInstance.js')
const keyManager = require('./gmrKeyManager.js')
const prefab = require('./gmrPrefab.js')
const scene = require('./gmrScene.js')
const sprite = require('./gmrSprite.js')
const ui = require('./gmrUI.js')

let mapUI = () => {
  let o = ui()
  delete o.el
  return o
}

module.exports = {
  animation,
  behavior,
  imgManager,
  instance,
  keyManager,
  prefab,
  scene,
  sprite,
  ui: mapUI()
}

