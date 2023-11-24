import { fetchData } from '../components/services/http.service'
import { setFormData } from './actions'

export const fetchFormData = () => async (dispatch) => {
  try {
    const formData = await fetchData()
    dispatch(setFormData(formData))
  } catch (error) {
    console.error('Error fetching form data:', error)
  }
}
