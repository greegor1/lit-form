import { html } from 'lit'
import '@lion/ui/define/lion-select'
import ConnectedElement from '../../../helpers/ConnectedElement'

export default class CustomSelect extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String } }
  }

  render() {
    return html`
      <lion-select
        label="${this.fieldName}"
        .modelValue="${formValues[fieldName]}"
        @model-value-changed="${(e) => updateFormValue(fieldName, e.detail.value)}"
      >
        <select slot="input">
          ${dataset.map((option) => html`<option value="${option}">${option}</option>`)}
        </select>
      </lion-select>
    `
  }
}

customElements.define('custom-select', CustomSelect)
