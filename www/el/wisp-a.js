const {LitElement, css, html} = require('lit')
const w3 = require('../lib/web3.js')

customElements.define('wisp-a', class extends LitElement {
  constructor(text, link, config) { 
    super();
    this.text = text; 
    this.link = link;
    let c = []
    if(config?.error) c.push('error')
    if(config?.full) c.push('full')
    this.c = c.join(',')
    if(config?.out) this.target = '_blank'
    else this.target = '_self'
  }
  render = () => html`<a target="${this.target}" class="${this.c}" href="${this.link}">${this.text}</a>`
  static styles = css`
    a{
      display: inline-flex;
      align-items: center;
      border-radius: 0;
      transition: .3s;
      font-weight: bold;
      font-size: 18px;
      border: none;
      padding: 9px 6px;
      margin: 3px 9px;
      background: var(--tlc-tertiary);
      color: var(--tlc-light);
      text-decoration: none;
      outline: 3px solid transparent;
      border-bottom: 3px solid rgba(0,0,0,0.27);
    }
    a:hover{
      cursor: pointer;
      box-shadow: 4px 6px rgba(0,0,0,0.27);
      text-decoration: underline;
      position: relative;
    }
    a:focus{
      outline: 6px solid var(--tlc-bg);
      text-decoration: underline;
    }
    .error{
      background-color: var(--tlc-light);
      color: var(--tlc-error-dark);
    }
    .full{
      width: 100%;
      margin: 9px 0px -9px -6px;
    }
  `
})
module.exports = customElements.get('wisp-a')