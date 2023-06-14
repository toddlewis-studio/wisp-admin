const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const WispH = require('../el/wisp-h.js')
const CollectionItem = require('../el/collection-item.js')
const dataLib = require('../lib/data.js')

customElements.define('collection-route', class extends LitElement {
  constructor() { 
    super()
    this.init()
  }
  async init(){
    let data = await dataLib.Data()
    let {Ability, Effect} = data 

    this.tabledata = []
    Object.keys(data).forEach(key => {
        if(key === 'Premade') return null
        if(key === 'SuperTag') return null
        if(key === 'Lore') return null
        this.tabledata.push({data: data[key], key})
    })
    console.log('tabledata', this.tabledata)
    this.requestUpdate()
  }  
  render = () => html`
    <top-nav></top-nav>

    <div>
      ${new WispH('Collection')}
      ${this.tabledata ? this.tabledata.map(table => html`
          ${new WispH(table.key)}  
          ${Object.values(table.data).map(item => new CollectionItem(item))}
      `) : nothing}
    </div>
  `
  static styles = css``
})
module.exports = customElements.get('collection-route')