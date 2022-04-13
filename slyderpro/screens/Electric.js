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
                // backgroundColor: "#363B3C"
            }}>
                <View style={{
                    width: "50%",
                    height: "100%",
                    // alignItems: "center",
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center"
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
                        flex: 1,
                       marginVertical:32,
                       marginRight:90
                    }}>
                        <View style={{
                            width:"40%",
                            height:'53%',
                            // backgroundColor:"red",
                           alignSelf:"flex-end",
                           padding:14
                        }}>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                marginTop:"4%"
                            }}>
                                 <NumberMeter number={123} skill="A" />
                                 <NumberMeter number={123} skill="A" />

                            </View>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                marginTop:"4%"
                            }}>
                                 <NumberMeter number={123} skill="A" />
                                 <NumberMeter number={123} skill="A" />

                            </View>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                marginTop:"8%"
                            }}>
                                 <NumberMeter number={123} skill="A" />
                                 <NumberMeter number={123} skill="A" />

                            </View>

                        </View>
                        <View style={{ flex:1 , marginTop:'3%' , marginLeft:"17%" , backgroundColor:"rgba(255,255,255,0.4)" , marginRight:'9%' , flexDirection:"row" , justifyContent:"space-between"}}>
                            <View style={{
                                height:"100%",
                                width:"35%",
                                
                                borderRadius:100
                            }}>

                            </View>

                        </View>

                    </View>

                </View>

























                {/* Second column */}
                <View style={{
                    width: "50%",
                    height: "100%",
                   

                }}>

                </View>
            </View>
        </ImageBackground>
    )
}