import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  flowersRequest: null,
  flowersSuccess: ['payload'],
  flowersFailure: null,
  tranlationRequest: null,
  tranlationSuccess: ['payload'],
  tranlationFailure: null
})

export const BookletTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: false,
  translations: null,
  translationError: false
})

/* ------------- Reducers ------------- */

// request the flower booklet
export const request = (state) =>
  state.merge({ fetching: true, error: false })

// successfuly got the booklet
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: false, data: payload })
}

// failed to get the booklet
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

// request the translations
export const translationRequest = (state) =>
  state.merge({ fetching: true, translationError: false })

// successfuly got the translations
export const translationSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, translationError: false, translations: payload })
}

// failed to get the translations
export const translationFailure = (state) =>
  state.merge({ fetching: false, translationError: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FLOWERS_REQUEST]: request,
  [Types.FLOWERS_SUCCESS]: success,
  [Types.FLOWERS_FAILURE]: failure,
  [Types.TRANLATION_REQUEST]: translationRequest,
  [Types.TRANLATION_SUCCESS]: translationSuccess,
  [Types.TRANLATION_FAILURE]: translationFailure
})
