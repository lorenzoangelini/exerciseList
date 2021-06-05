import { API_FETCH_HOTELS } from "./paths";

export function apiFetchHotels(){
    return fetch(API_FETCH_HOTELS, {
        method: 'GET',
    }).then(res => res.json());
}