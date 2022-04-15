import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated, ImageBackground } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import NumberMeter from './Component/NumberMeter';
import NeumorphismButton from '../src/neumorphism-button';



export default function Electric() {
    return (
        <ImageBackground
            source={require('../images/bg4.jpeg')}
            resizeMode='stretch'
            style={{
                flex: 1,
                backgroundColor:'#262A2D'

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
                                borderRadius: 12,

                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
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
                                <NumberMeter number={4.5} skill="A" width={140} />
                            </View>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12,

                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
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
                                <NumberMeter number={123} skill="A" width={140} />
                            </View>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#B1B1B1',
                                padding: 12,
                                borderRadius: 12

                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
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

                                    <NumberMeter number={4.8} skill="A" width={140} />
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{
                        flex: 1,
                        marginVertical: 32,
                        marginRight: 90
                    }}>
                        <View style={{
                            width: "40%",
                            height: '53%',
                            // backgroundColor:"red",
                            alignSelf: "flex-end",
                            padding: 14
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: "14%"
                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
                                <NumberMeter number={123} skill="A" width={140} />

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: "4%"
                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
                                <NumberMeter number={123} skill="A" width={140} />

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: "8%"
                            }}>
                                <NumberMeter number={123} skill="A" width={140} />
                                <NumberMeter number={123} skill="A" width={140} />

                            </View>

                        </View>
                        <View style={{
                            flex: 1,
                            marginTop: '4%',
                            marginLeft: "17%",
                            marginRight: '9%',
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <View style={{
                                height: "100%",
                                width: "35%",
                                justifyContent: "space-between",
                                padding: 20


                            }}>
                                <View style={{ marginLeft: '28%' }}>
                                    <NumberMeter number={123} skill="kvm" width={140} />
                                </View>
                                <NumberMeter number={1234} skill="rpm" width={200} />

                            </View>
                            <View style={{
                                width: "30%",
                                height: "100%",
                                alignItems: "center"
                            }}>
                                <View style={{ marginTop: "3%" }}>
                                    <Neomorph
                                        inner={true}// <- enable inner shadow
                                        darkShadowColor="#141414" // <- set this
                                        lightShadowColor="#2e2e2e"
                                        style={{
                                            shadowOffset: { width: 10, height: 8 },
                                            shadowOpacity: 1,
                                            shadowColor: "white",
                                            shadowRadius: 3,
                                            borderRadius: 145,
                                            backgroundColor: '#141414',
                                            width: 170,
                                            height: 65,
                                            justifyContent: 'center',
                                            alignItems: "center"


                                            // ...include most of View/Layout styles
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', width: 150, backgroundColor: '#101010', height: 50, borderRadius: 100 }}>
                                            <View style={{
                                                width: "33.33%",

                                                justifyContent: "center",
                                                alignItems: "center",
                                                alignSelf: "center",
                                                height: 40,
                                                borderRightWidth: 1,
                                                borderColor: "#B1B1B"

                                            }}>
                                                <Text numberOfLines={1} style={{ fontSize: 24, color: '#B1B1B1' }}>2,3</Text>
                                            </View>
                                            <View style={{
                                                width: "33.33%",

                                                justifyContent: "center",
                                                alignItems: "center",
                                                alignSelf: "center",
                                                height: 40,
                                                borderRightWidth: 1,
                                                borderColor: "#B1B1B"

                                            }}>
                                                <Text numberOfLines={1} style={{ fontSize: 24, color: '#B1B1B1' }}>kW</Text>
                                            </View>


                                            <View style={{
                                                width: '33.33%',
                                                justifyContent: "center",
                                                alignItems: "center"


                                            }}>
                                                <Text numberOfLines={1} style={{ fontSize: 24, color: '#B1B1B1' }}>4,6</Text>
                                            </View>

                                        </View>
                                    </Neomorph>
                                </View>

                            </View>

                        </View>

                    </View>

                </View>


                {/* Second column */}
                <View style={{
                    width: "50%",
                    height: "100%",



                }}>
                    <View style={{
                        flexDirection: "row-reverse",
                        marginHorizontal: 60
                    }}>
                        <NeumorphismButton style={{ padding: 25, borderColor: '#7b0000', borderWidth: 5, borderRadius: 40, height: 120 }}>
                            <Text style={{ color: 'white', fontSize: 30, alignSelf: 'center', top: 5 }} >MOB</Text>
                        </NeumorphismButton>

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: '37%',
                        height: "20%",
                        marginRight: 36
                    }}>
                        <View style={{
                            flexDirection: "row",
                            marginTop: -5




                        }}>
                            <View style={{ width: "48%", alignItems: "center" }}>
                                <NumberMeter number={123} skill="kwm" width={140} />
                            </View>
                            <View style={{ width: '52%', alignItems: "center" }}>
                                <NumberMeter number={123} skill="kwm" width={140} />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginTop: '3%'




                        }}>
                            <View style={{ width: "48%", alignItems: "center" }}>
                                <NumberMeter number={123} skill="kwm" width={140} />
                            </View>
                            <View style={{ width: '52%', alignItems: "center" }}>
                                <NumberMeter number={123} skill="kwm" width={140} />
                            </View>
                        </View>

                    </View>
                    <View style={{
                        flex: 1,

                        justifyContent: "flex-end"
                    }}>
                        <View style={{
                            width: "82%",
                            height: "25%",

                            alignSelf: "center"

                        }}>
                            <View style={{

                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: '#B1B1B1',
                                    padding: 12,
                                    borderRadius: 12

                                }}>
                                    <NumberMeter number={123} skill="A" width={140} />
                                </View>
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: '#B1B1B1',
                                    padding: 12,
                                    borderRadius: 12,
                                    marginRight:'1%'

                                }}>
                                    <NumberMeter number={123} skill="A" width={140} />
                                </View>
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: '#B1B1B1',
                                    padding: 12,
                                    borderRadius: 12,
                                    marginRight:"3%"

                                }}>
                                    <NumberMeter number={123} skill="A" width={140} />
                                </View>

                            </View>

                        </View>

                    </View>

                </View>
            </View>
        </ImageBackground>
    )
}