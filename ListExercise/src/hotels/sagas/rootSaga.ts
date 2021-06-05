import { all, fork } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { fetchHotelsSaga } from "./fetchHotels";

const allSagas: any[] = [
    fetchHotelsSaga
]


export function* rootSaga(): SagaIterator{
    yield all(allSagas.map(s => fork(s)))
}