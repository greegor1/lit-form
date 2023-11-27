import { html } from 'lit'
import '@lion/ui/define/lion-input'
import ConnectedElement from '../../../helpers/ConnectedElement'
import { setFormValue } from '../../../redux/actions'

export default class CustomInput extends ConnectedElement {
  static properties() {
    return { fieldName: { type: String } }
  }

  render() {
    return html`
      <lion-input
        label="${this.fieldName}"
        .modelValue="${formValues[fieldName]}"
        @model-value-changed="${(e) => dispatch(setFormValue(fieldName, e.detail.formPath[0].__formattedValue))}"
      ></lion-input>
    `
  }
}
