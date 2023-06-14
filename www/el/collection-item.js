const {LitElement, css, html, nothing} = require('lit')
const w3 = require('../lib/web3.js')
const gmr = require('../lib/gmr.js')
const logo = require('../asset/logo.PNG')

const costPipe = num => num > 0 ? num : 'Free'

customElements.define('collection-item', class extends LitElement {
  constructor(item) { 
    super()
    this.item = item
  }
  edit() {
    state.save`admin-item`(item)
    location.hash = 'admin'
  }
  loadGmr(e){
    setTimeout(() => {
        const div = e.path[1].querySelector('.gmr-container')
        if(this.item.type && (this.item.type === 'Avatar' || this.item.type === 'Ally' || this.item.type === 'Weapon')) {
            gmr.appToken(div, {token: this.item})
            this.tokenWidth = '180px'
            this.tokenHeight = '180px'
        } else if (this.item.type && this.item.type === 'Catalog') {
            gmr.appCatalog(div, this.item.img)
            this.tokenWidth = '144px'
            this.tokenHeight = '192px'
        } else if (this.item.type && this.item.type === 'Ability') {
            gmr.appAbilityIcon(div, this.item.img)
            this.tokenWidth = '144px'
            this.tokenHeight = '144px'
        } else if (this.item.type && this.item.type === 'Effect') {
            gmr.appAbilityIcon(div, this.item.img)
            this.tokenWidth = '144px'
            this.tokenHeight = '144px'
        }
    }, 0)
    e.path[1].removeChild(e.path[0])
    // else
        // ui.token.appendChild(i0.load('token', item))
  }
  render = () => html`
    <div class="flex">
      <img @load="${this.loadGmr}" src="${logo}">
      <div class="gmr-container"></div>
      <div>
          <b>${this.item.name}</b>
          <div>${this.item.cost !== undefined ? costPipe(this.item.cost) : ''}</div>
          ${this.item.tags?html`<div>${this.item.tags.join(', ')}</div>`:''}
          ${this.item.date?html`<div>${this.item.date}</div>`:''}
      </div>
      <div><p>${this.item.desc}</p></div>
      <div>
          <button @click="this.edit" class="btn btn-outline-warning" title="Edit">E</button>
      </div>
    </div>
  `
  static styles = css`
    .flex{
        display: flex;
        margin: 12px 6px;
        padding: 12px;
        background-color: var(--tlc-shadow);
    }      
    .flex > div {
        width: 100%;
    }
    .flex > div:last-child{
        width: 30px;
        align-items: center;
        display: grid;
        padding: 20px;
    }
  `
})
module.exports = customElements.get('collection-item')