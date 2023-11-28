import { html } from 'lit'
import '@lion/ui/define/lion-select'
import ConnectedElement from '../../../helpers/ConnectedElement'
import store from '../../../redux/store'
import { setFormValue } from '../../../redux/actions'

class CustomSelect extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String }, dataset: { type: Array }, validators: { type: Array } }
  }
  constructor() {
    super()
  }

  render() {
    const { formValues } = store.getState()
    return html`
      <lion-select
        label="${this.fieldName}"
        .modelValue="${formValues[this.fieldName]}"
        @model-value-changed="${(e) => store.dispatch(setFormValue(this.fieldName, e[0].__formattedValue))}"
        .validators="${[this.validators]}"
      >
        <select slot="input">
          ${this.dataset.map((option) => html`<option value="${option}">${option}</option>`)}
        </select>
      </lion-select>
    `
  }
}

customElements.define('custom-select', CustomSelect)
