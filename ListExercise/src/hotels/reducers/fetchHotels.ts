import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from '../actions'
export type State = {
    isLoading: boolean
    products: HotelsObject[];
}
const initialState: State = {
    isLoading: false,
    products:[]
}

type Types = ActionType<typeof actions>;

const reducer = createReducer<State, Types>(initialState).handleAction(
    actions.fetchHotelsSuccess,
    (state, actions) => ({
        ...state,
        products: actions.payload
    }),
).handleAction(
    actions.fetchHotelsLoading,
    (state, actions) => ({
        ...state,
        isLoading: actions.payload
    }),
)

export default reducer;


export type HotelsObject = {
    id: number;
    name: string;
    location: Location;
    stars: number;
    checkIn: Hours;
    checkOut: Hours;
    contact: Contact;
    gallery: string[];
    userRating: number;
    price: number;
    currency: string;

}

export type Location = {
    city: string;
    address: string;
    latitude: number;
    longitude: number;
}

export type Hours = {
    from: string;
    to: string;
}

export type Contact = {
    phoneNumber: string;
    email: string;
}