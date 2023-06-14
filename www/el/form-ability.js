const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const gmr = require('../lib/gmr.js')
const logo = require('../asset/logo.PNG')

customElements.define('form-ability', class extends LitElement {
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
  <form @submit="${e=>e.preventDefault()}">
    <div>
        <label>Name</label>
        <input id="name" @change="${e => this.name = e.path[0].value}">
    </div>
    <div>
        <label>Icon</label>
        <input type="number" id="icon" @change="${e => {this.img = parseInt(e.path[0].value) ; this.pingIcon()}}">
    </div>
    <div><div id="preview" class="game-icon" style="width:240px;height:240px;">
      <img @load="${this.loadGmr}" src="${logo}">
    </div></div>
    <div>
        <label>Tags</label>
        <input id="tags" @change="${e => this.tags = e.path[0].value}">
    </div>
    <div>
        <label>Target Type</label>
        <select id="targetType" @change="${e => this.targetType = e.path[0].value}">
            <option>Self</option>
            <option>SingleEnemy</option>
            <option>SingleAlly</option>
            <option>AOE</option>
            <option>Location</option>
        </select>
    </div>
    <div>
        <label for="cooldown" class="form-label">Cooldown ${this.cooldown}</label>
        <input id="cooldown" type="range" min="0" max="6" value="0" @change="${e => this.setval('cooldown', e)}">
    </div>
    <div>
        <label i0="costLabel" for="cost" class="form-label">Cost ${parseInt(this.cost) * 5}</label>
        <input id="cost" type="range" min="0" max="20" value="0" @change="${e => this.setval('cost', e)}">
    </div>
    <div>
        <label i0="rangeLabel" for="range" class="form-label">Range ${this.range}</label>
        <input id="range" type="range" min="0" max="10" value="0" @change="${e => this.setval('range', e)}">
    </div>
    <div>
        <label for="repeat" class="form-label">Repeatable</label>
        <input id="repeat" type="checkbox" @change="${e => this.repeat = e.path[0].value}">
    </div>
    <div>
        <label for="desc" class="form-label">Desc</label>
        <textarea id="desc" @change="${e => this.desc = e.path[0].value}"></textarea>
    </div>
    <div>
        <b>Actions</b>
        <input id="actions">
    </div>
    <div>
        <b>SFX</b>
        <input id="sfx">
    </div>
    <div>
        <b>Review</b>
        <div id="review"></div>
    </div>
    <button @click="${this.create}">Create</button>
  </form>
  `
  static styles = css`
    label {
        display: flex;
    }      
  `
})
module.exports = customElements.get('form-ability')