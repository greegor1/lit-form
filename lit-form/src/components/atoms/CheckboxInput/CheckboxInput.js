import { html } from 'lit'
import '@lion/ui/define/lion-checkbox-group'
import ConnectedElement from '../../../helpers/ConnectedElement'
import store from '../../../redux/store'
import { setFormValue } from '../../../redux/actions'

class CustomCheckbox extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String }, validators: { type: Array } }
  }
  constructor() {
    super()
  }

  render() {
    return html`
      <lion-checkbox-group
        label="${this.fieldName}"
        .modelValue="${formValues[this.fieldName]}"
        @model-value-changed="${(e) => store.dispatch(setFormValue(this.fieldName, e.detail.value))}"
        .validators="${[this.validators]}"
      ></lion-checkbox-group>
    `
  }
}

customElements.define('custom-checkbox', CustomCheckbox)
