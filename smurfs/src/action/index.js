import axios from 'axios'

export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'

export const loadData = () => {
  return dispatch => {
    dispatch({ type: LOAD_DATA })
    axios.get('http://localhost:3333/smurfs')
      .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: LOAD_FAIL, err }))
  }
}
