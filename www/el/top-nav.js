const {LitElement, css, html, nothing} = require('lit')
const WispA = require('./wisp-a.js')
const state = require('../lib/state.js')
const TwitterIcon = require('../asset/twitter.png')

customElements.define('top-nav', class extends LitElement {
  constructor() { super(); }
  connectedCallback(){
    super.connectedCallback()
    this.listener = state.listener(this)('pubkey');
  }
  disconnectedCallback(){
    super.disconnectedCallback()
    this.listener.forEach(off => off())
  }
  page(){
    if(location.hash == '') return 'Home'
    if(location.hash == '#') return 'Home'
    if(location.hash == '#index') return 'Home'
  }
  render = () => html`
    <nav>
        <ul>
          ${location.hash != '' ? html`<li>${new WispA("Home", "#")}</li>` : nothing}
          ${location.hash != '#collection' ? html`<li>${new WispA("Collection", "#collection")}</li>` : nothing}
          ${location.hash != '#admin' ? html`<li>${new WispA("Admin", "#admin")}</li>` : nothing}
        </ul>
    </nav>
  `
  static styles = css`
    nav {
      display: flex;
      justify-content: end;
      padding: 0 12px;
      align-items: center;
    }
    ul {
      list-style: none;
      display: flex;
      padding: 0;
    }
    li{
      margin: 0 -6px;
    }
    b{
      color: var(--tlc-primary);
      padding-right: 9px;
    }
  `
})
module.exports = customElements.get('top-nav')