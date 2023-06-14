const {LitElement, css, html, nothing} = require('lit')
const state = require('../lib/state.js')
const WispH = require('../el/wisp-h.js')

const formEl = {
  ability: require('../el/form-ability.js')
}

customElements.define('admin-route', class extends LitElement {
  constructor() { super(); this.setForm({path: [{value: 'ability'}]}) }
  setForm(e) {
    const val = e.path[0].value
    this.form = formEl[val] ? new formEl[val] : nothing
    this.requestUpdate()
  }
  render = () => html`
    <top-nav></top-nav>

    <div>
      ${new WispH('Admin')}
      <div>
        <label for="selectTable">Table</label>
        <select @change="${e => this.setForm(e)}">
            <option value="ability">Ability</option>
            <option value="catalog">Catalog</option>
            <option value="effect">Effect</option>
            <option value="token">Token</option>
            <option value="supertag">Super Tag</option>
            <option value="premade">Premade</option>
        </select>
      </div>
      <section i0="form">
        ${this.form ? this.form : nothing}
      </section>
    </div>
  `
  static styles = css``
})
module.exports = customElements.get('admin-route')