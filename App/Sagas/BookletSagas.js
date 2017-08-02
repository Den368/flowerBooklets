import { call, put } from 'redux-saga/effects'
import BookletActions from '../Redux/BookletRedux'

export function * getAllFlowers (api, action) {
  // make the call to the api
  const response = yield call(api.getAllFlowers)
  if (response.ok) {
    yield put(BookletActions.flowersSuccess(response.data.data))
  } else {
    yield put(BookletActions.flowersFailure())
  }
}

export function * getTranlations (api, action) {
  // make the call to the api
  const response = yield call(api.getTranlations)
  if (response.ok) {
    yield put(BookletActions.tranlationSuccess(response.data.data))
  } else {
    yield put(BookletActions.tranlationFailure())
  }
}
