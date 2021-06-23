import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
export function* fetchItems() {
  try {
      console.log('');
    //take every fetch items, call a fetch items function. 
    }

   catch (error) {
    console.log('User get request failed', error);
  }
}



// export default itemSaga;