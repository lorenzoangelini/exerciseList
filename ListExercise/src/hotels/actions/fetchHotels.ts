import { createAction } from "typesafe-actions";

export const fetchHotels = createAction(
 'hotels/FETCH_HOTELES'
)();
export const fetchHotelsSuccess = createAction(
 'hotels/FETCH_HOTELES_SUCCESS'
)<any>();

export const fetchHotelsLoading = createAction(
    'hotels/FETCH_HOTELES_LOADING'
)();