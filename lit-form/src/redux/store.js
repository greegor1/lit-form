import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { SET_FORM_DATA, SET_FORM_VALUES } from './actions'

const initialState = {
  formData: [],
  formValues: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, formData: action.payload }
    case SET_FORM_VALUES:
      return { ...state, formValues: action.payload }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
