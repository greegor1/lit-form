import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { SET_FORM_DATA, SET_FORM_VALUES } from './actions'

const initialState = {
  formData: [],
  formValues: {}
}

const rootReducer = (state = initialState, { payload, type } = action) => {
  switch (type) {
    case SET_FORM_DATA:
      return { ...state, formData: payload }
    case SET_FORM_VALUES:
      return { ...state, formValues: { ...state.formValues, [payload.formField]: payload.formValue } }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
