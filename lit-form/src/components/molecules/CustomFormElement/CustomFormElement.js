import '../../atoms/TextInput/TextInput'
import '../../atoms/TextareaInput/TextareaInput'
import '../../atoms/SelectInput/SelectInput'
import '../../atoms/CheckboxInput/CheckboxInput'
import '../../atoms/RadioInput/RadioInput'
import ConnectedElement from '../../../helpers/ConnectedElement'
import { html } from 'lit'

class CustomFormElement extends ConnectedElement {
  static get properties() {
    return {
      fieldName: { type: String },
      fieldData: { type: Object }
    }
  }

  renderFormElement() {
    const { type, validators = [], visibility = 'always', dataset = [] } = this.fieldData

    if (visibility === 'always') {
      switch (type) {
        case 'text':
        case 'number':
          return html`<custom-input .fieldName=${this.fieldName} .validators=${validators}></custom-input>`
        case 'textarea':
          return html`<custom-textarea .fieldName=${this.fieldName} .validators=${validators}></custom-textarea>`
        case 'select':
          return html`<custom-select .fieldName=${this.fieldName} .dataset=${dataset} .validators=${validators}></custom-select>`
        case 'checkbox':
          return html`<custom-checkbox .fieldName=${this.fieldName} .validators=${validators}></custom-checkbox>`
        case 'radio-group':
          return html`<custom-radio-group .fieldName=${this.fieldName} .validators=${validators}></custom-radio-group>`
        default:
          return html``
      }
    }
  }

  render() {
    return html`${this.renderFormElement()}`
  }
}

customElements.define('custom-form-element', CustomFormElement)
