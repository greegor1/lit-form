import { html } from 'lit'
import '@lion/ui/define/lion-input'

export const getInput = (fieldName, formValues, updateFormValue) => html`
  <lion-input
    label="${fieldName}"
    .modelValue="${formValues[fieldName]}"
    @model-value-changed="${(e) => updateFormValue(fieldName, e.detail.value)}"
  ></lion-input>
`
