import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';

export default function ScaleComparing(props) {
    return (
        <View style={{ width: 130, alignItems: "center" }}>
            <View style={{ marginBottom: 12, width: "100%" }}>
                <Text style={{
                    fontSize: 35,

                    color: props.fill == '47%' ? "#F8E81E" : "#92FD31",
                    marginLeft: 16,
                    textAlign: "center"
                }}>{props.fill}</Text>

            </View>
            <View style={{
                flexDirection: "row",
                width: "100%"
            }}>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingVertical: 16,
                    marginRight: 16,

                }}>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    height: 5.5,
                                    width: 30,
                                    flexDirection: "row-reverse"
                                }}>
                                <Neomorph

                                    inner // <- enable inner shadow
                                    darkShadowColor="#4C4C4C" // <- set this
                                    lightShadowColor="#4C4C4C"
                                    style={{
                                        shadowOffset: { width: 0, height: 10 },
                                        shadowOpacity: 1,
                                        shadowColor: "#141414",
                                        shadowRadius: 3,
                                        borderRadius: 150,
                                        backgroundColor: '#000',
                                        width: index == 0 || index == 10 || index == 5 ? 30 : 26,
                                        height: 5.5,
                                    }}
                                >
                                    <View style={{ width: index == 0 || index == 10 || index == 5 ? 30 : 26, height: 3.5, backgroundColor: '#000', borderRadius: 100, }} />
                                </Neomorph>
                            </View>

                        )
                    })}
                </View>
                <Neomorph
                    inner={true} // <- enable inner shadow
                    darkShadowColor="#242424" // <- set this
                    lightShadowColor="#222222"
                    style={{
                        shadowOffset: { width: 1, height: 5 },
                        shadowOpacity: 9,
                        shadowColor: "#00000029",
                        shadowRadius: 3,
                        borderRadius: 200,
                        backgroundColor: '#504D4A',
                        width: 55,
                        height: 420,
                        justifyContent: "center"

                        // ...include most of View/Layout styles
                    }}
                >
                <View style={{ flexDirection: 'row', width: 35, backgroundColor: '#2E2D2D', borderRadius: 100, height: 400, alignSelf: 'center', elevation: 30 }}>
                    <View style={{ width: "100%", height: props.fill, backgroundColor: "#D66717", borderRadius: 12, alignSelf: "flex-end" }} />

                </View>

                </Neomorph>

            </View>


            <View style={{ marginTop: 12 }}>
                <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>{props.title}</Text>

            </View>
        </View>
    )
}