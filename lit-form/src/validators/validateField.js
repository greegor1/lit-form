export const validateField = (fieldName, field) => {
  for (const validator of field.validators || []) {
    const [type, value] = validator.split(':')
    switch (type) {
      case 'required':
        if (!this.formValues[fieldName]) {
          this.errors.push({ field: fieldName, message: 'This field is required.' })
        }
        break
      case 'min-len':
        if (this.formValues[fieldName].length < parseInt(value)) {
          this.errors.push({
            field: fieldName,
            message: `Minimum length is ${value} characters.`
          })
        }
        break
    }
  }
}
