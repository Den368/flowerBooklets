import { takeLatest } from 'redux-saga/effects'
import BookletAPI from '../Services/BookletAPI'

/* ------------- Types ------------- */

import { BookletTypes } from '../Redux/BookletRedux'

/* ------------- Sagas ------------- */

import { getAllFlowers, getTranlations } from './BookletSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const BookletApi = BookletAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action

    // some sagas receive extra parameters in addition to an action
    takeLatest(BookletTypes.FLOWERS_REQUEST, getAllFlowers, BookletApi),
    takeLatest(BookletTypes.TRANLATION_REQUEST, getTranlations, BookletApi)
  ]
}
