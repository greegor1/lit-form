import CustomInput from '../../atoms/TextInput/TextInput'
import CustomTextarea from '../../atoms/TextareaInput/TextareaInput'
import CustomSelect from '../../atoms/SelectInput/SelectInput'
import CustomCheckbox from '../../atoms/CheckboxInput/CheckboxInput'
import CustomRadioGroup from '../../atoms/RadioInput/RadioInput'
import ConnectedElement from '../../../helpers/ConnectedElement'

export default class CustomFormElement extends ConnectedElement {
  static get properties() {
    return {
      fieldName: { type: String },
      fieldData: { type: Object }
    }
  }

  static scopedElements = {
    'custom-input': CustomInput,
    'custom-textarea': CustomTextarea,
    'custom-select': CustomSelect,
    'custom-checkbox': CustomCheckbox,
    'custom-radio-group': CustomRadioGroup
  }

  renderFormElement() {
    const { type, validators = [], visibility = 'always', dataset = [] } = this.fieldData

    if (visibility === 'always') {
      switch (type) {
        case 'text':
        case 'number':
          return html`<custom-input .fieldName=${this.fieldName}></custom-input>`
        case 'textarea':
          return html`<custom-textarea .fieldName=${this.fieldName}></custom-textarea>`
        case 'select':
          return html`<custom-select .fieldName=${this.fieldName}></custom-select>`
        case 'checkbox':
          return html`<custom-checkbox .fieldName=${this.fieldName}></custom-checkbox>`
        case 'radio-group':
          return html`<custom-radio-group .fieldName=${this.fieldName}></custom-radio-group>`
        default:
          return html``
      }
    }
  }

  render() {
    return this.renderFormElement()
  }
}
