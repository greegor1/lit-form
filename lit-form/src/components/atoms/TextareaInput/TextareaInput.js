import { html } from 'lit'
import '@lion/ui/define/lion-textarea'

export const getTextarea = (fieldName) => html`
  <lion-textarea
    label="${fieldName}"
    .modelValue="${this.formValues[fieldName]}"
    @model-value-changed="${(e) => this.updateFormValue(fieldName, e.detail.value)}"
  ></lion-textarea>
`
