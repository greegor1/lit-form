export const SET_FORM_DATA = 'SET_FORM_DATA'
export const SET_FORM_VALUES = 'SET_FORM_VALUE'

export const setFormData = (formData) => ({
  type: SET_FORM_DATA,
  payload: formData
})

export const setFormValue = (formValues) => ({
  type: SET_FORM_VALUES,
  payload: formValues
})
