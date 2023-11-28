import { html } from 'lit'
import '@lion/ui/define/lion-textarea'
import ConnectedElement from '../../../helpers/ConnectedElement'
import store from '../../../redux/store'
import { setFormValue } from '../../../redux/actions'

class CustomTextarea extends ConnectedElement {
  static get properties() {
    return { fieldName: { type: String }, validators: { type: Array } }
  }
  constructor() {
    super()
  }

  render() {
    html`
      <lion-textarea
        label="${this.fieldName}"
        .modelValue="${this.formValues[this.fieldName]}"
        @model-value-changed="${(e) => store.dispatch(setFormValue(this.fieldName, e.detail.value))}"
        .validators="${[this.validators]}"
      ></lion-textarea>
    `
  }
}

customElements.define('custom-textarea', CustomTextarea)
