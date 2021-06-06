import { call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions'
import { apiFetchHotels } from '../apis';

function* fetchHotelsRequestSaga(
    action: ReturnType<typeof  actions.fetchHotels>
): SagaIterator {
    try{
        yield put(actions.fetchHotelsLoading(true))
        const response: any = yield call(apiFetchHotels)
        yield put(actions.fetchHotelsSuccess(response))
        yield put(actions.fetchHotelsLoading(false))
    }catch(e){
        yield put(actions.fetchHotelsError(e))
        yield put(actions.fetchHotelsLoading(false))
    }
   
}

export function* fetchHotelsSaga() {
    yield takeEvery(actions.fetchHotels, fetchHotelsRequestSaga);
  }
  