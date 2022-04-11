import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet, StatusBar, FlatList, Animated } from 'react-native';

import { Shadow, Neomorph } from 'react-native-neomorph-shadows';

export default function ScaleComparing(props) {
    return (
        <View style={{ width: 130, alignItems: "center" }}>
            <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 35,

                    color: "#92FD31",
                    marginLeft: 16
                }}>{props.fill}</Text>

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
                    <View style={{ width: "100%", height: props.fill, backgroundColor: "#D66717", borderRadius: 12 }} />

                </View>

            </Neomorph>
            <View style={{ marginTop: 12 }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>{props.title}</Text>

            </View>
        </View>
    )
}