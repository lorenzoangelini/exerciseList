import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions'
import selectors from '../selectors'

const HotelsScreen: React.FC = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(selectors.isLoading);

    useEffect(()=> {
        dispatch(actions.fetchHotels())
    },[])

    return (
        <View></View>
    )
}


HotelsScreen.displayName = 'HotelsScreen';
export default HotelsScreen;