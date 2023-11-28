import { html } from 'lit'
import '@lion/ui/define/lion-radio-group'
import ConnectedElement from '../../../helpers/ConnectedElement'
import store from '../../../redux/store'
import { setFormValue } from '../../../redux/actions'

class CustomRadioGroup extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String }, validators: { type: Array } }
  }

  render() {
    html`
      <lion-radio-group
        label="${this.fieldName}"
        .modelValue="${this.formValues[this.fieldName]}"
        @model-value-changed="${(e) => store.dispatch(setFormValue(this.fieldName, e.detail.value))}"
        .validators="${[this.validators]}"
      >
        ${dataset.map((option) => html`<lion-radio .modelValue="${option}">${option}</lion-radio>`)}
      </lion-radio-group>
    `
  }
}

customElements.define('custom-radio-group', CustomRadioGroup)
