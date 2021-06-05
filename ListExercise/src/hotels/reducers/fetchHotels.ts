import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from '../actions'
export type State = {
    isLoading: boolean
    products: any;
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