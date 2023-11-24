import { html } from 'lit'
import '@lion/ui/define/lion-checkbox-group'

export const getCheckbox = (fieldName) => html`
  <lion-checkbox
    label="${fieldName}"
    .modelValue="${this.formValues[fieldName]}"
    @model-value-changed="${(e) => this.updateFormValue(fieldName, e.detail.value)}"
  ></lion-checkbox>
`
