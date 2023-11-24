import { html } from 'lit'
import '@lion/ui/define/lion-select'
import '@lion/ui/define/lion-option'

export const getSelect = (fieldName, formValues, updateFormValue, dataset) => {
  return html`
    <lion-select
      label="${fieldName}"
      .modelValue="${formValues[fieldName]}"
      @model-value-changed="${(e) => updateFormValue(fieldName, e.detail.value)}"
    >
      <select slot="input">
        ${dataset.map((option) => html`<lion-option .modelValue="${option}">${option}</lion-option>`)}
      </select>
    </lion-select>
  `
}
