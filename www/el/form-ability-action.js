const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const gmr = require('../lib/gmr.js')
const logo = require('../asset/logo.PNG')

customElements.define('form-ability-action', class extends LitElement {
  constructor() { super()
    this.cooldown = 0
    this.cost = 0
    this.range = 0
  }
  create(e){
    const res = {
        name: this.name,
        img: this.img,
        tags: this.tags,
        targetType: this.targetType,
        cooldown: this.cooldown,
        cost: this.cost,
        range: this.range,
        repeat: this.repeat,
        desc: this.desc,
    }
    console.log(res)
  }
  setval(v, e){
    this[v] = e.path[0].value
    this.requestUpdate()        
  }
  pingIcon(){
    state.ping`preview-ai`(this.img || 0)
  }
  loadGmr(e){
    setTimeout(() => {
      const div = e.path[1]
      gmr.appAbilityIcon(div, this.img || 0)
      this.pingIcon()
    }, 0)
    e.path[1].removeChild(e.path[0])
  }
  render = () => html`
    <div i0="actions"></div>
    <div class="d-flex justify-content-center">
        <button i0="addnew" class="btn btn-outline-primary">Add New</button>
    </div>
    <div i0="form" class="d-none">
        <div class="mb-3">
            <label class="form-label">Target</label>
            <select i0="target" class="form-select">
                <option>Self</option>
                <option>Ally</option>
                <option>Enemy</option>
                <option>Location</option>
                <option>Sound</option>
            </select>
        </div>
        <div class="mb-3" i0="actionDiv">
            <label class="form-label">Action</label>
            <select i0="action" class="form-select">
                <option>ApplyEffects</option>
                <option>Damage</option>
                <option>Heal</option>
                <option>Buff</option>
                <option>MoveTo</option>
                <option>Pull</option>
                <option>Push</option>
                <option>Summon</option>
            </select>
        </div>
        <div class="mb-3 d-none" i0="soundDiv">
            <label class="form-label">Sound</label>
            <select i0="sound" class="form-select"></select>
            <label class="form-label">Preview</label>
            <div i0="soundPreview"></div>
            <label class="form-label">Delay</label>
            <input type="number" value="0" class="form-control mb-3" i0="soundDelay">
        </div>
        
        <div i0="actionsDiv">
            <div i0="action:applyeffects">
                <label class="form-label">Effects</label>
                <select i0="effects" class="form-select mb-3"></select>
                <div><div i0="effectPreview" class="game-icon" style="width:100px;height:100px;"></div></div>
                <div i0="selectedEffects"></div>
            </div>

            <div i0="action:damage" class="mb-3 d-none">
                <label class="form-label">Power</label>
                <select i0="power" class="form-select mb-3">
                    <option>Weak</option>
                    <option>Standard</option>
                    <option>Powerful</option>
                </select>
                <label class="form-label">Primary Stat</label>
                <select i0="statTarget" class="form-select">
                    <option>Caster</option>
                    <option>Target</option>
                </select>
                <select i0="primaryStat" class="form-select mb-3">
                    <option>Strength</option>
                    <option>Agility</option>
                    <option>Intelligence</option>
                </select>
                <label class="form-label">Can Crit?</label>
                <input i0="crit" type="checkbox" class="form-check-input mb-3">
                <label class="label">Can Be Defended?</label>
                <input i0="defend" type="checkbox" class="form-check-input mb-3">
                <label class="label">Can Be Dodged?</label>
                <input i0="dodge" type="checkbox" class="form-check-input">
            </div>

            <div i0="action:buff" class="layer d-none">
                <label class="form-label">Stat</label>
                <select i0="buffStat" class="form-select mb-3">
                    <option>Strength</option>
                    <option>Defense</option>
                    <option>Agility</option>
                    <option>Speed</option>
                    <option>Dodge</option>
                    <option>Intelligence</option>
                    <option>Resistance</option>
                    <option>Precision</option>
                </select>
                <label class="form-label" i0="buffAmtLabel">Amount</label>
                <div class="form-flex v-align mb-3">
                    <input type="range" min="0" max="60" value="0" class="input" i0="buffAmt">
                    <select i0="buffType" class="select">
                        <option>Add</option>
                        <option>Subtract</option>
                        <option>Multiply</option>
                        <option>Divide</option>
                    </select>
                </div>
                <label class="form-label">Restore Stats onEffectEnd?</label>
                <input i0="buffRestore" type="checkbox" class="form-check-input">
            </div>

            <div i0="action:heal" class="layer d-none">
                <label class="form-label">Power</label>
                <select i0="healPower" class="form-select mb-3">
                    <option>Weak</option>
                    <option>Standard</option>
                    <option>Powerful</option>
                </select>
                <label class="form-label">Intelligence Bonus?</label>
                <input i0="healBonus" type="checkbox" class="form-check-input">
            </div>

            <div i0="action:moveto" class="layer d-none">
                <label class="form-label">Delay</label>
                <input type="number" value="0" class="form-control mb-3" i0="moveDelay">
                <label class="label">Duration</label>
                <input type="number" value="0" class="form-control" i0="moveDuration">
            </div>

            <div i0="action:push" class="layer d-none">
                <label class="form-label" i0="pushDistanceLabel">Distance</label>
                <input type="range" min="0" max="60" value="0" class="form-control mb-3" i0="pushDistance">
                <label class="form-label">Delay</label>
                <input type="number" value="0" class="form-control mb-3" i0="pushDelay">
                <label class="form-label">Duration</label>
                <input type="number" value="0" class="form-control" i0="pushDuration">
            </div>

            <div i0="action:pull" class="layer d-none">
                <label class="form-label" i0="pullDistanceLabel">Distance</label>
                <input type="range" min="0" max="60" value="0" class="form-control mb-3" i0="pullDistance">
                <label class="form-label">Delay</label>
                <input type="number" value="0" class="form-control mb-3" i0="pullDelay">
                <label class="form-label">Duration</label>
                <input type="number" value="0" class="form-control" i0="pullDuration">
            </div>
        </div>

        <div class="flex center mt-3">
            <button i0="close" class="btn btn-outline-secondary">Close</button>
            <button class="btn btn-success" i0="add">Add Action</button>
        </div>
    </div>
  `
  static styles = css`
    label {
        display: flex;
    }      
  `
})
module.exports = customElements.get('form-ability-action')