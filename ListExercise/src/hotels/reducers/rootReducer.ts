import {combineReducers} from 'redux'
import hotelsReducer, {State as HotelState} from './fetchHotels'


export default combineReducers({
    hotelsData: hotelsReducer
})

export type HotelsReducerState = {
    hotelsData: HotelState;
};