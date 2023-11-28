export const validateField = (fieldName, field, formValues) => {
  for (const validator of field.validators || []) {
    const [type, value] = validator.split(':')
    const errors = []
    switch (type) {
      case 'required':
        if (!formValues[fieldName]) {
          errors.push({ field: fieldName, message: 'This field is required.' })
        }
        break
      case 'min-len':
        if (formValues[fieldName].length < parseInt(value)) {
          errors.push({
            field: fieldName,
            message: `Minimum length is ${value} characters.`
          })
        }
        break
    }

    return errors
  }
}
