import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScaleComparing from './Component/ScaleComparing';


const data = [
    {
        warning: 'anchor alarm / 03:00 UTC / check position / reset alarm',
        p: 1
    },
    {
        warning: 'check: time zone switch / system',
        p: 0
    },
    {
        warning: 'check: diesel filter / interval pending in 10 engine hours',
        p: 0
    },
    {
        warning: 'anchor alarm / 03:00 UTC / check position / reset alarm',
        p: 1
    },
    {
        warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
        p: 1
    },
    {
        warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
        p: 0
    },
    {
        warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
        p: 1
    },
    {
        warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
        p: 0
    },
    {
        warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
        p: 0
    },
]

export default function Status() {
    const [indicator, setindicator] = useState(new Animated.Value(0))
    const [wholeHeight, setwholeHeight] = useState(1)
    const [visibleHeight, setvisibleHeight] = useState(0)
    const indicatorSize = wholeHeight > visibleHeight ? visibleHeight * visibleHeight / wholeHeight : visibleHeight
    const difference = visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1

    return (
        <View style={{
            backgroundColor: "#242424",
            flex: 1,
            flexDirection: "row"
        }}>
            <View style={{
                width: "70%",
                height: "100%",
                paddingVertical: 60,
                marginLeft: 138
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#000",
                    marginBottom: 6,
                }}>EVENTS</Text>
                <View style={{
                    height: 260,
                    borderBottomWidth: 3,
                    borderColor: "#000",
                    paddingBottom: 34
                }}>
                    <Neomorph
                        inner // <- enable inner shadow
                        darkShadowColor="#141414" // <- set this
                        lightShadowColor="#2e2e2e"

                        style={{
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 1,
                            shadowColor: "#464646",
                            shadowRadius: 3,
                            borderRadius: 150,
                            backgroundColor: '#141414',
                            width: 12,
                            height: 231,
                            overflow: "visible",
                            position: "absolute",
                            right: 0,
                            paddingBottom: 34,

                            // ...include most of View/Layout styles
                        }}
                    ></Neomorph>
                    {/* <View
                        style={{
                            height: "100%",
                            width: 12,
                            backgroundColor: "#464646",

                            position: "absolute",
                            borderRadius: 12,
                            right: 0,
                            overflow: "visible",

                        }}
                    /> */}
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        onContentSizeChange={(width, height) => {
                            setwholeHeight(height)
                        }}
                        onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => setvisibleHeight(height)}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: indicator } } }],
                            { useNativeDriver: false }
                        )}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ flexDirection: "row", marginTop: 13 }}>
                                    <View style={{ justifyContent: "center" }}>
                                        <Ionicons name='warning' size={40} color={item.p == 0 ? '#FF3926' : '#F2E900'} />
                                    </View>

                                    <View style={{ marginLeft: 18, justifyContent: "center" }}>
                                        <Text style={{ fontSize: 23, color: "#AAAAAA" }}>{item.warning}</Text>
                                    </View>

                                </View>
                            )
                        }}

                        keyExtractor={(item, index) => index}
                    />
                    <View style={styles.indicatorWrapper} />
                    <Animated.View style={[
                        styles.indicator, {
                            height: indicatorSize,
                            transform: [{
                                translateY: Animated.multiply(indicator, visibleHeight / wholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }]} />


                </View>
                <View style={{
                    flex: 1,
                    marginVertical: 32,
                    flexDirection: "row",
                    justifyContent: "space-evenly"

                }}>
                    <ScaleComparing title='fresh water sb' fill='80%' />
                    <ScaleComparing title='fresh water sb' fill='20%' />
                    <ScaleComparing title='fresh water sb' fill='30%' />
                    <ScaleComparing title='fresh water sb' fill='40%' />
                    <ScaleComparing title='Diseil' fill='90%' />
                    {/* <View style={{ width: 130, alignItems: "center" }}>
                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 35,

                                color: "#92FD31",
                                marginLeft: 16
                            }}>82%</Text>

                        </View>

                        <Neomorph
                            inner // <- enable inner shadow
                            darkShadowColor="#4B4B4B" // <- set this
                            lightShadowColor="#4B4B4B"
                            style={{
                                shadowOffset: { width: 0.5, height: 4 },
                                shadowOpacity: 1,
                                shadowColor: "#4B4B4B",
                                shadowRadius: 3,
                                borderRadius: 12,
                                backgroundColor: '#2D2D2D',
                                width: 40,
                                height: 390,
                                alignItems: "center",
                                flexDirection: "column-reverse",
                                paddingBottom: 5,


                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ height: "99%", width: "70%", backgroundColor: '#2D2C2C', borderRadius: 12, justifyContent: "flex-end" }}>
                                <View style={{ width: "100%", height: "50%", backgroundColor: "#D66717", borderRadius: 12 }} />

                            </View>

                        </Neomorph>
                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>fresh water sb</Text>

                        </View>
                    </View>
                    <View style={{ width: 130, alignItems: "center" }}>
                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 35,

                                color: "#92FD31",
                                marginLeft: 16
                            }}>82%</Text>

                        </View>

                        <Neomorph
                            inner // <- enable inner shadow
                            darkShadowColor="#4B4B4B" // <- set this
                            lightShadowColor="#4B4B4B"
                            style={{
                                shadowOffset: { width: 0.5, height: 4 },
                                shadowOpacity: 1,
                                shadowColor: "#4B4B4B",
                                shadowRadius: 3,
                                borderRadius: 12,
                                backgroundColor: '#2D2D2D',
                                width: 40,
                                height: 390,
                                alignItems: "center",
                                flexDirection: "column-reverse",
                                paddingBottom: 5,


                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ height: "99%", width: "70%", backgroundColor: '#2D2C2C', borderRadius: 12, justifyContent: "flex-end" }}>
                                <View style={{ width: "100%", height: "50%", backgroundColor: "#D66717", borderRadius: 12 }} />

                            </View>

                        </Neomorph>
                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>fresh water sb</Text>

                        </View>
                    </View> */}

                </View>

            </View>














            <View style={{
                width: "30%",
                height: "100%",
            }}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    indicator: { position: "absolute", width: 10, top: 1, right: 0, backgroundColor: "#fff", borderRadius: 12 },
    container: {
        flex: 1,

    },

})
