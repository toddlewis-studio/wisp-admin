const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const WispH = require('../el/wisp-h.js')

customElements.define('sound-route', class extends LitElement {
  constructor() { super() }
  render = () => html`
    <top-nav></top-nav>

    <div>
      ${new WispH('Sound')}
    </div>
  `
  static styles = css``
})
module.exports = customElements.get('sound-route')