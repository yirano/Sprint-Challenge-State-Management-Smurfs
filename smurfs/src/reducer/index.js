import { LOAD_DATA, LOAD_SUCCESS, LOAD_FAIL, ADD_SMURF, DELETE_SMURF } from '../action'

const initialState = {
  data: [],
  isLoading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_DATA:
      return { ...state, isLoading: true, error: '' }
    case LOAD_SUCCESS:
      return { data: [...state.data, ...payload], isLoading: false, error: '' }
    case LOAD_FAIL:
      return { ...state, isLoading: false, error: payload }
    case ADD_SMURF:
      return { ...state, isLoading: false, error: '' }
    case DELETE_SMURF:
      return { ...state, data: state.data.filter(d => d.id != payload) }
    default:
      return state
  }
}
