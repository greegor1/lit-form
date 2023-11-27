import { html } from 'lit'
import '@lion/ui/define/lion-textarea'
import ConnectedElement from '../../../helpers/ConnectedElement'

export default class CustomTextarea extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String } }
  }

  render() {
    html`
      <lion-textarea
        label="${this.fieldName}"
        .modelValue="${this.formValues[fieldName]}"
        @model-value-changed="${(e) => this.updateFormValue(fieldName, e.detail.value)}"
      ></lion-textarea>
    `
  }
}

customElements.define('custom-textarea', CustomTextarea)
