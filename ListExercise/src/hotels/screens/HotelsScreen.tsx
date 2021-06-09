import React, { useEffect, useRef } from "react";
import { Animated, FlatList, Image, SafeAreaView, StatusBar, StatusBarIOS, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions'
import selectors from '../selectors'

const AVATAR_SIZE = 100;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const HotelsScreen: React.FC = () => {

    const scrollY = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch()
    const isLoading = useSelector(selectors.isLoading);
    const products = useSelector(selectors.products);

    useEffect(() => {
        dispatch(actions.fetchHotels())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/4622769/pexels-photo-4622769.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4622769.jpg&fm=jpg' }}
                blurRadius={30}
                style={StyleSheet.absoluteFill}></Image>

                
            <Animated.FlatList
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: true}
            )}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                keyExtractor={item => item?.id?.toString()}
                renderItem={({ index, item }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]
                    const scale =  scrollY.interpolate({
                        inputRange,
                        outputRange: [1,1,1,0]
                    })

                    const opacity =  scrollY.interpolate({
                        inputRange,
                        outputRange: [1,1,1,0]
                    })


                    return <Animated.View style={{
                        flexDirection: 'row', padding: SPACING,
                        marginBottom: SPACING, backgroundColor: 'white', borderRadius: 30,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height:10
                        },
                        shadowOpacity: .3,
                        shadowRadius: 20,
                        transform:[{scale}],
                        opacity
                    }}>
                        <Image
                            source={{ uri: item?.gallery[0] }}
                            style={{ height: AVATAR_SIZE, width: AVATAR_SIZE, borderRadius: AVATAR_SIZE }}></Image>
                        <View style={{marginLeft: SPACING,  width: "65%"}}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>{item.name}</Text>
                            <View style={{flexDirection: 'row', paddingTop:30, justifyContent: 'space-between'}}>
                            <Text style={{ fontSize: 20 }}>{item.price + ' '+ item.currency}</Text>
                            <Text style={{ fontSize: 20,  }}>{item.stars +'*'}</Text>
                            </View>
                        </View>
                    </Animated.View>
                }}
                data={products}
            ></Animated.FlatList>
        </View>
    )
}


HotelsScreen.displayName = 'HotelsScreen';
export default HotelsScreen;