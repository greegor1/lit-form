import { html } from 'lit'
import '@lion/ui/define/lion-radio-group'
import ConnectedElement from '../../../helpers/ConnectedElement'

export default class CustomRadioGroup extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String } }
  }

  render() {
    html`
      <lion-radio-group
        label="${this.fieldName}"
        .modelValue="${this.formValues[fieldName]}"
        @model-value-changed="${(e) => this.updateFormValue(fieldName, e.detail.value)}"
      >
        ${dataset.map((option) => html`<lion-radio .modelValue="${option}">${option}</lion-radio>`)}
      </lion-radio-group>
    `
  }
}

customElements.define('custom-radio-group', CustomRadioGroup)
