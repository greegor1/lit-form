import { getInput } from '../../atoms/TextInput/TextInput'
import { getTextarea } from '../../atoms/TextareaInput/TextareaInput'
import { getSelect } from '../../atoms/SelectInput/SelectInput'
import { getCheckbox } from '../../atoms/CheckboxInput/CheckboxInput'
import { getRadioGroup } from '../../atoms/RadioInput/RadioInput'

export const renderFormField = (fieldName, fieldData, formValues, updateFormValue) => {
  const { type, validators = [], visibility = 'always', dataset = [] } = fieldData

  if (visibility === 'always') {
    switch (type) {
      case 'text':
      case 'number':
        return getInput(fieldName, formValues, updateFormValue)
      case 'textarea':
        return getTextarea(fieldName, formValues, updateFormValue, dataset)
      case 'select':
        return getSelect()
      case 'checkbox':
        return getCheckbox()
      case 'radio-group':
        return getRadioGroup()
      default:
        return html``
    }
  }
}
