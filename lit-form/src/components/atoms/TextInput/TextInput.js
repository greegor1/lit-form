import { html } from 'lit'
import '@lion/ui/define/lion-input'
import ConnectedElement from '../../../helpers/ConnectedElement'
import { setFormValue } from '../../../redux/actions'
import store from '../../../redux/store'

class CustomInput extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String }, validators: { type: Array } }
  }
  constructor() {
    super()
  }

  render() {
    const { formValues } = store.getState()
    return html`
      <lion-input
        label="${this.fieldName}"
        .modelValue="${formValues[this.fieldName]}"
        @model-value-changed="${(e) => store.dispatch(setFormValue(this.fieldName, e.detail.formPath[0].__formattedValue))}"
        .validators="${[this.validators]}"
      ></lion-input>
    `
  }
}

customElements.define('custom-input', CustomInput)
