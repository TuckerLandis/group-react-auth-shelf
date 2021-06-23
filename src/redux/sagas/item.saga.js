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

// Saga Worker to start on "ADD_ITEM"
function* addItem(action) {
  console.log('Info coming from client', action.payload);

  try{
    yield axios.post('/api/shelf', action.payload);
    // reset state to update from dom
    yield put({type: "FETCH_ITEMS"});
  }

  catch (error) {
    console.log('User POST request failed', error);
  }
}

function* removeItem (action) {
    console.log('deleting item', action.payload);

    try {
        yield axios.delete(`/api/shelf/${action.payload.id}`)
        yield put({type: 'FETCH_ITEMS'})
    } catch(error) {
        console.log('error deleting item', error)
    }
}


export function* itemSaga() {
  yield takeEvery('FETCH_ITEMS', fetchItems);
  yield takeLatest('ADD_ITEM', addItem);
  yield takeEvery('DELETE_ITEM', removeItem)
}


  export default itemSaga;
