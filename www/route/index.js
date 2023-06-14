const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const WispH = require('../el/wisp-h.js')
const WispA = require('../el/wisp-a.js')

customElements.define('index-route', class extends LitElement {
  constructor() { super() }
  connectedCallback(){
    super.connectedCallback()
    this.listener = state.listener(this)('pubkey');
  }
  disconnectedCallback(){
    super.disconnectedCallback()
    this.listener.forEach(off => off())
  }
  render = () => html`
    <top-nav></top-nav>

    <div>
      ${new WispH('Wisp Manager')}
      <ul>
        <li>${new WispA('Admin', '#admin')}</li>
        <li>${new WispA('Collection', '#collection')}</li>
        <li>${new WispA('Sound', '#sound')}</li>
      </ul>
    </div>
  `
  static styles = css``
})
module.exports = customElements.get('index-route')