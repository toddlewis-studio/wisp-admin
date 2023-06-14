const {LitElement, css, html} = require('lit')
const w3 = require('../lib/web3.js')

customElements.define('wisp-h', class extends LitElement {
  constructor(text) { 
    super();
    this.text = text;
  }
  render = () => html`<h1>${this.text}</h1>`
  static styles = css`
    h1{
      display: flex;
      font-weight: bold;
      padding: 9px 6px;
      color: var(--tlc-secondary);
      background: var(--tlc-primary);
      margin: 9px;
      box-shadow: 2px 3px var(--tlc-tertiary);
    }
  `
})
module.exports = customElements.get('wisp-h')