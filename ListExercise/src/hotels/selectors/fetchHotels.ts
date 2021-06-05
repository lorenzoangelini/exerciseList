import { createSelector } from "reselect";
import { HotelsReducerState } from "../reducers";

const selectState = (state: {hotels: HotelsReducerState}) => state;

export const isLoading = createSelector(
    selectState,
    slice => slice.hotels?.hotelsData?.isLoading
);

export const products = createSelector(
    selectState,
    slice => slice.hotels.hotelsData.products
);