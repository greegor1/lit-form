import { html } from 'lit'
import '@lion/ui/define/lion-checkbox-group'
import ConnectedElement from '../../../helpers/ConnectedElement'

export default class CustomCheckbox extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String } }
  }

  render() {
    return html`
      <lion-checkbox-group
        label="${this.fieldName}"
        .modelValue="${formValues[fieldName]}"
        @model-value-changed="${(e) => updateFormValue(fieldName, e.detail.value)}"
      ></lion-checkbox-group>
    `
  }
}

customElements.define('custom-checkbox', CustomCheckbox)
