import * as React from 'react';
import { Button, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import UnderEngine from './screens/UnderEngine';
import Status from './screens/Status';
import Electric from './screens/Electric';


const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#242424',
            height: 70,
            borderTopColor: '#4B4B4B'

          },
          tabBarIconStyle: { display: "none" },
          tabBarLabel: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    color: focused ? '#777777' : '#777777',
                    fontFamily: focused ? 'GTWalsheimProBold' : 'GTWalsheimProRegular',
                    fontSize: focused ? 28 : 18,
                    fontWeight: 'bold'
                  }}>
                  {route.name}
                </Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Under Engine" component={UnderEngine} options={{ headerShown: false }} />
        <Tab.Screen name="Status" component={Status} options={{ headerShown: false }} />
        <Tab.Screen name="Electric" component={Electric} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
