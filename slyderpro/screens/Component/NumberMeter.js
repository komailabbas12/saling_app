
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated } from 'react-native';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';



export default function NumberMeter({ number, skill, width }) {
    return (
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
                width: width,
                height: 65,
                justifyContent: 'center',
                alignItems: "center"


                // ...include most of View/Layout styles
            }}
        >
            <View style={{ flexDirection: 'row', width: width - 20, backgroundColor: '#101010', height: 50, borderRadius: 100 }}>
                <View style={{
                    width: "70%",

                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    height: 40,
                    borderRightWidth: 1,
                    borderColor: "#B1B1B"

                }}>
                    <Text numberOfLines={1} style={{ fontSize: 24, color: '#B1B1B1' }}>{number}</Text>
                </View>


                <View style={{
                    width: '30%',
                    justifyContent: "center",
                    alignItems: "center"


                }}>
                    <Text style={{ fontSize: 16, color: '#B1B1B1' }}>{skill}</Text>
                </View>

            </View>
        </Neomorph>

    )
}