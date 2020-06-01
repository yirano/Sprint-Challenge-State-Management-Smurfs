import axios from 'axios'

export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'
export const ADD_SMURF = 'ADD_SMURF'

export const loadData = () => {
  return dispatch => {
    dispatch({ type: LOAD_DATA })
    axios.get('http://localhost:3333/smurfs')
      .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: LOAD_FAIL, err }))
  }
}

export const addSmurf = (input) => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', input)
      .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
      .catch(err => console.log('THERE IS AN ERROR ADDING: ', err))
  }
}
