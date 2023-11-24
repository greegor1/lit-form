import { html } from 'lit'
import '@lion/ui/define/lion-radio-group'

export const getRadioGroup = (fieldName) => html`
  <lion-radio-group
    label="${fieldName}"
    .modelValue="${this.formValues[fieldName]}"
    @model-value-changed="${(e) => this.updateFormValue(fieldName, e.detail.value)}"
  >
    ${dataset.map((option) => html`<lion-radio .modelValue="${option}">${option}</lion-radio>`)}
  </lion-radio-group>
`
