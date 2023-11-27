import { html, css } from 'lit'
import store from './redux/store'
import { fetchFormData } from './redux/thunks'
import { validateField } from './validators/validateField'
import ConnectedElement from './helpers/ConnectedElement'
import { setFormValue } from './redux/actions'
import './components/services/http.service'
import '@lion/ui/define/lion-button'
import '@lion/ui/define/lion-form'
import CustomFormElement from './components/molecules/CustomFormElement/CustomFormElement'

class CustomForm extends ConnectedElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `

  static scopedElements = {
    'custom-form-element': CustomFormElement
  }

  static get properties() {
    return {
      formData: { type: Array },
      currentPage: { type: Number },
      formValues: { type: Object },
      errors: { type: Array }
    }
  }

  constructor() {
    super()
    this.currentPage = 0
    this.formValues = {}
    this.errors = []
  }

  connectedCallback() {
    super.connectedCallback()
    store.dispatch(fetchFormData())
  }

  stateChanged(state) {
    console.log(state)
    this.formData = state.formData
    this.formValues = state.formValues
  }

  render() {
    console.log('this.formData', this.formData)
    if (!this.formData || this.formData.length === 0) {
      return html`<div>Loading...</div>`
    }

    const currentPageData = this.formData[this.currentPage].form || []
    return html`
      <lion-form>
        ${Object.keys(currentPageData).map((fieldName) => {
          store.dispatch(setFormValue({ ...this.formValues, [fieldName]: '' }))
          return html`<custom-form-element .fieldName=${fieldName}></custom-form-element>`
        })}
        ${this.getButton()}
      </lion-form>
    `
  }

  getButton() {
    if (this.currentPage < this.formData.length - 1) {
      return html`<lion-button @click=${this.onNextStep}>Next</lion-button>`
    }
    return html`<lion-button @click=${this.onSave}>Save</lion-button>`
  }

  updateFormValue(fieldName, value) {
    this.formValues = { ...this.formValues, [fieldName]: value }
  }

  onNextStep() {
    this.currentPage++
  }

  onSave() {
    this.errors = []

    for (const pageData of this.formData) {
      for (const fieldName in pageData.form) {
        const field = pageData.form[fieldName]
        validateField(fieldName, field)
      }
    }

    if (this.errors.length === 0) {
      console.log('Data saved successfully:', this.formValues)
    } else {
      console.error('Validation errors:', this.errors)
    }
  }
}

customElements.define('custom-form', CustomForm)
