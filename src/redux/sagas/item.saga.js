import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
export function* fetchItems() {
  try {
      console.log('');
    //take every fetch items, call a fetch items function. 
    const response = yield axios.get('/api/shelf')

    yield put({type: 'SET_ITEMS', payload: response.data});

    }

   catch (error) {
    console.log('User get request failed', error);
  }
}


export function* itemSaga() {
  yield takeEvery('FETCH_ITEMS', fetchItems);
}

