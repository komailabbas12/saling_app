import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated, ImageBackground } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import NumberMeter from './Component/NumberMeter';



export default function Electric() {
    return (
        <ImageBackground
            source={require('../images/bg2.png')}
            resizeMode='stretch'
            style={{
                flex: 1

            }}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 55,
                backgroundColor: "#363B3C"
            }}>
                <View style={{
                    width: "50%",
                    height: "100%",
                    // alignItems: "center",
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent:"center"
                    }}>
                        <View style={{
                            justifyContent: "center"
                        }}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12

                            }}>
                                <NumberMeter number={123} skill="A" />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: 263,
                            margin: 10
                        }}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12

                            }}>
                                <NumberMeter number={4.5} skill="A" />
                            </View>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12

                            }}>
                                <NumberMeter number={123} skill="A" />
                            </View>

                        </View>
                        <View style={{
                            flexDirection: "column",
                            alignSelf: 'center',
                            marginRight: 12



                        }}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12,
                                marginBottom: 15

                            }}>
                                <NumberMeter number={123} skill="A" />
                            </View>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12

                            }}>
                                <NumberMeter number={123} skill="A" />
                            </View>

                        </View>
                        <View style={{
                            justifyContent: "center"
                        }}>
                            <View style={{
                                marginTop: -40
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: "#B1B1B1",
                                    textAlign: "center",
                                    paddingBottom: 12
                                }}>Solar</Text>
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: '#B1B1B1',
                                    padding: 12,
                                    borderRadius: 12

                                }}>

                                    <NumberMeter number={4.8} skill="A" />
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{
                        width:"30%",
                        height:270,
                        // backgroundColor:"red",
                        marginVertical:32,
                        marginHorizontal:32,
                        justifyContent:"flex-end"
                    }}>

                    </View>

                </View>

























                {/* Second column */}
                <View style={{
                    width: "50%",
                    height: "100%",
                    backgroundColor: "red",

                }}>

                </View>
            </View>
        </ImageBackground>
    )
}