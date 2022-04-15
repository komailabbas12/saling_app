import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScaleComparing from './Component/ScaleComparing';
import NeumorphismButton from '../src/neumorphism-button'
import { Switch } from 'react-native-switch';
import Resetbtn from '../src/resetbtn';
import LinearGradient from 'react-native-linear-gradient';

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
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [myText1, setMyText1] = useState("11.5");
    const [myText2, setMyText2] = useState("13.5");
    const [bgColor1, setBgColor1] = useState('#3e3e3e');
    const [bgColor2, setBgColor2] = useState('#3e3e3e');

    const setBoth1 = () => {
        setBgColor1('red');
        setBgColor2('#3e3e3e');
    };

    const setBoth2 = () => {
        setBgColor1('#3e3e3e');
        setBgColor2('red');
    };

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <LinearGradient
            colors={["#202427","#3E4345","#131617"]}
        style={{
           
            flex: 1,
            flexDirection: "row",

        }}>
            <View style={{
                width: "60%",
                height: "100%",
                paddingVertical: 60,
                paddingLeft: 138
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


                }}>
                    <ScaleComparing title='fresh water sb' fill='82%' />
                    <View style={{ marginLeft: '6%' }}>
                        <ScaleComparing title='fresh water sb' fill='47%' />
                    </View>
                    <View style={{ marginLeft: '9%' }}>
                        <ScaleComparing title='fresh water sb' fill='16%' />
                    </View>
                    <View style={{ marginLeft: '6%' }}>
                        <ScaleComparing title='fresh water sb' fill='48%' />
                    </View>
                    <View style={{ marginLeft: '12%' }}>
                        <ScaleComparing title='Diseil' fill='87%' />
                    </View>


                </View>

            </View>














            <View style={{
                width: "40%",
                height: "100%",
                marginRight: 100
            }}>
                <View style={{
                    width: "100%",
                    height: "37%",
                    flexDirection: "row"
                }}>
                    <View style={{
                        height: "100%",
                        width: '60%',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ fontSize: 20, color: '#AAAAAA', marginBottom: 16 }}>total log</Text>
                        <Neomorph
                            inner={true} // <- enable inner shadow
                            darkShadowColor="#141414" // <- set this
                            lightShadowColor="#2e2e2e"
                            style={{
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 250,
                                height: 65,
                                justifyContent: "center",
                                alignItems: "center"

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: 230, backgroundColor: '#101010', borderRadius: 26, height: 50 }}>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",
                                    borderRightWidth: 2,
                                    borderColor: "#AAAAAA",

                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 24, textAlign: "center" }}>0</Text>

                                </View>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",
                                    borderRightWidth: 2,
                                    borderColor: "#AAAAAA",

                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 24, textAlign: "center" }}>9</Text>

                                </View>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",
                                    borderRightWidth: 2,
                                    borderColor: "#AAAAAA",

                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 24, textAlign: "center" }}>9</Text>

                                </View>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",
                                    borderRightWidth: 2,
                                    borderColor: "#AAAAAA",

                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 24, textAlign: "center" }}>9</Text>

                                </View>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",
                                    borderRightWidth: 2,
                                    borderColor: "#AAAAAA",

                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 24, textAlign: "center" }}>9</Text>

                                </View>
                                <View style={{
                                    width: "16%",
                                    flexDirection: "row",
                                    height: 30,
                                    alignSelf: "center",


                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Text style={{ color: '#AAAAAA', fontSize: 18, textAlign: "center" }}>nm</Text>

                                </View>



                            </View>
                        </Neomorph>


                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        marginVertical: 45

                    }}>
                        <NeumorphismButton style={{ padding: 25, borderColor: '#7b0000', borderWidth: 5, borderRadius: 40, height: 120 }}>
                            <Text style={{ color: 'white', fontSize: 30, alignSelf: 'center', top: 5 }} >MOB</Text>
                        </NeumorphismButton>

                    </View>


                </View>










                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    marginTop: 24
                }}>
                    <View style={{
                        width: "60%",
                        alignItems: "center",
                        borderLeftWidth: 2,
                        borderColor: "#4A4D4E",
                        marginBottom: 24

                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 25,
                            color: "#000",
                            marginBottom: 6,
                            textAlign: "center",
                        }}>Generator</Text>
                        <View style={{ alignSelf: 'center', marginTop: 16 }}>
                            <Neomorph
                                inner // <- enable inner shadow
                                darkShadowColor="#141414" // <- set this
                                lightShadowColor="#2e2e2e"
                                style={{
                                    shadowOffset: { width: 10, height: 10 },
                                    shadowOpacity: 1,
                                    shadowColor: "white",
                                    shadowRadius: 3,
                                    borderRadius: 150,
                                    backgroundColor: '#141414',
                                    width: 158,
                                    height: 62,

                                    // ...include most of View/Layout styles
                                }}
                            >
                                <View style={{ top: 8, left: 9 }}>
                                    <Switch
                                        onValueChange={toggleSwitch1}
                                        value={isEnabled1}
                                        disabled={false}
                                        activeText={'ON'}
                                        inActiveText={'OFF'}
                                        circleSize={35}
                                        barHeight={45}
                                        circleBorderWidth={25}
                                        circleBorderInactiveColor={'#181818'}
                                        circleBorderActiveColor={'#181818'}
                                        backgroundActive={'#141414'}
                                        backgroundInactive={'#141414'}
                                        circleActiveColor={'green'}
                                        circleInActiveColor={'gray'}
                                        // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                        innerCircleStyle={{ width: 75, height: 57, alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                                        renderActiveText={true}
                                        renderInActiveText={true}
                                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                        switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                        switchBorderRadius={26}
                                    />
                                </View>
                            </Neomorph>

                        </View>



                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            marginTop: 12
                        }}>
                            <Resetbtn style={{ padding: 12, width: 80, borderRadius: 40, borderColor: bgColor1, borderWidth: 5 }}>
                                <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', fontWeight: 'bold' }}
                                    onPress={() => setBoth1()}>start</Text>
                            </Resetbtn>
                            <View style={{ justifyContent: "center" }}>
                                <Neomorph
                                    inner={true}// <- enable inner shadow
                                    darkShadowColor="#141414" // <- set this
                                    lightShadowColor="#2e2e2e"
                                    style={{
                                        shadowOffset: { width: 10, height: 10 },
                                        shadowOpacity: 1,
                                        shadowColor: "white",
                                        shadowRadius: 3,
                                        borderRadius: 145,
                                        backgroundColor: '#141414',
                                        width: 155,
                                        height: 65,

                                        // ...include most of View/Layout styles
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', width: 138, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>135</Text>
                                        <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                        <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>°C</Text>
                                    </View>
                                </Neomorph>

                            </View>

                            <Resetbtn style={{ padding: 12, width: 80, borderRadius: 40, borderColor: bgColor2, borderWidth: 5 }}>
                                <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', fontWeight: 'bold' }}
                                    onPress={() => setBoth2()}>Stop</Text>
                            </Resetbtn>

                        </View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",
                            marginBottom: 6,
                            textAlign: "center",
                            marginTop: 12
                        }}>starter battery</Text>
                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#141414" // <- set this
                            lightShadowColor="#2e2e2e"
                            style={{
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 180,
                                height: 65,
                                marginTop: 32

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: 160, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>1250</Text>
                                <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>rpm</Text>
                            </View>
                        </Neomorph>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            marginTop: 12
                        }}>
                            <Resetbtn style={{ padding: 12, width: 65, borderRadius: 40, borderColor: '#3e3e3e', borderWidth: 5 }}>
                                <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', fontWeight: 'bold' }}
                                >-</Text>
                            </Resetbtn>
                            <View style={{ justifyContent: "center" }}>
                                <Neomorph
                                    inner={true}// <- enable inner shadow
                                    darkShadowColor="#141414" // <- set this
                                    lightShadowColor="#2e2e2e"
                                    style={{
                                        shadowOffset: { width: 10, height: 10 },
                                        shadowOpacity: 1,
                                        shadowColor: "white",
                                        shadowRadius: 3,
                                        borderRadius: 145,
                                        backgroundColor: '#141414',
                                        width: 155,
                                        height: 65,

                                        // ...include most of View/Layout styles
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', width: 138, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>135</Text>
                                        <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                        <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>KW</Text>
                                    </View>
                                </Neomorph>

                            </View>

                            <Resetbtn style={{ padding: 12, width: 65, borderRadius: 40, borderColor: '#3e3e3e', borderWidth: 5 }}>
                                <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', fontWeight: 'bold' }}
                                >+</Text>
                            </Resetbtn>

                        </View>
                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#141414" // <- set this
                            lightShadowColor="#2e2e2e"
                            style={{
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 200,
                                height: 65,
                                marginTop: 32

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: 180, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>12505</Text>
                                <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>hrs</Text>
                            </View>
                        </Neomorph>

                    </View>



                    <View style={{
                        width: "40%",

                        alignItems: "center",
                        borderLeftWidth: 2,
                        borderColor: "#4A4D4E",
                        marginBottom: 24

                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 25,
                            color: "#000",
                            marginBottom: 16,
                            textAlign: "center",
                        }}>Power</Text>
                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#141414" // <- set this
                            lightShadowColor="#2e2e2e"
                            style={{
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 155,
                                height: 65,

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: 138, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>100</Text>
                                <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>%</Text>
                            </View>
                        </Neomorph>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",
                            marginBottom: 6,
                            textAlign: "center",
                            marginTop: 12
                        }}>24 V battery</Text>
                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#141414" // <- set this
                            lightShadowColor="#2e2e2e"
                            style={{
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 155,
                                height: 65,
                                marginTop: 32

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{ flexDirection: 'row', width: 138, backgroundColor: '#101010', borderRadius: 26, top: 8, left: 9 }}>
                                <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 30, color: 'white' }}>100</Text>
                                <View style={{ height: '80%', marginTop: 5, width: 2, backgroundColor: 'gray', marginLeft: 20 }}></View>
                                <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 20, color: 'white' }}>%</Text>
                            </View>
                        </Neomorph>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",
                            marginBottom: 6,
                            textAlign: "center",
                            marginTop: 12
                        }}>HV batties</Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",
                            marginBottom: 6,
                            textAlign: "center",
                            marginTop: 32
                        }}>Shore Power</Text>

                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#191919" // <- set this
                            lightShadowColor="#444444"
                            style={{
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 90,
                                height: 40,
                                marginTop: 32,
                                justifyContent: "center",
                                alignItems: 'center'

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{
                                width: 70, height: 25, backgroundColor: "#19FF13", borderRadius: 100, elevation: 10, opacity: 100,

                            }} />
                        </Neomorph>

                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",

                            textAlign: "center",
                            marginTop: 12
                        }}>Part 1</Text>
                        <Neomorph
                            inner={true}// <- enable inner shadow
                            darkShadowColor="#191919" // <- set this
                            lightShadowColor="#444444"
                            style={{
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 1,
                                shadowColor: "white",
                                shadowRadius: 3,
                                borderRadius: 145,
                                backgroundColor: '#141414',
                                width: 90,
                                height: 40,
                                marginTop: 18,
                                justifyContent: "center",
                                alignItems: 'center'

                                // ...include most of View/Layout styles
                            }}
                        >
                            <View style={{
                                width: 70, height: 25, backgroundColor: "#444444", borderRadius: 100, elevation: 10, opacity: 100,

                            }} />
                        </Neomorph>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#AAAAAA",

                            textAlign: "center",
                            marginTop: 12
                        }}>Part 2</Text>



                    </View>

                </View>

            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    indicator: { position: "absolute", width: 10, top: 1, right: 0, backgroundColor: "#fff", borderRadius: 12 },
    container: {
        flex: 1,

    },

})
