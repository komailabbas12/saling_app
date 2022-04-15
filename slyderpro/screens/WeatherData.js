import {
    Dimensions,
    Image,
    LogBox,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, {useEffect} from 'react';
//   import Orientation from 'react-native-orientation-locker';
  import LinearGradient from 'react-native-linear-gradient';
  import NeumorphismButton from '../screens/Component/NeumorphismsButton';
  import {Neomorph} from 'react-native-neomorph-shadows';
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';
  
  LogBox.ignoreAllLogs();
  
  export default function App() {
    // useEffect(() => {
    //   Orientation.lockToLandscape();
    // }, []);
  
    return (
      <LinearGradient
        colors={['#0F0F0F', '#3E4345', '#202427']}
        style={styles.linearGradient}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  transform: [{rotate: '-90deg'}],
                  fontSize: 20,
                  color: 'silver',
                }}>
                wind Speed
              </Text>
              <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 1,
                  shadowColor: 'white',
                  shadowRadius: 3,
                  borderRadius: 10,
                  backgroundColor: '#252525',
                  width: Dimensions.get('window').width / 1.9,
                  height: 220,
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width / 1.932,
                    height: 180,
                    backgroundColor: '#252525',
                    borderRadius: 10,
                    top: 8,
                    left: 9,
                  }}>
                  <BarChart
                    data={{
                      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width / 2}
                    height={200}
                    yAxisLabel={''}
                    yAxisSuffix=" "
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundGradientFrom: '#000',
                      backgroundGradientFromOpacity: 0,
                      backgroundGradientTo: 'silver',
                      backgroundGradientToOpacity: 0,
                      fillShadowGradientFrom: '#777777',
                      fillShadowGradientFromOpacity: 1,
                      fillShadowGradientTo: '#50D210',
                      fillShadowGradientToOpacity: 0.5,
                      color: (opacity = 1) => `#B1622C`,
                      labelColor: (opacity = 1) => `silver`,
                      strokeWidth: 10,
                      useShadowColorFromDataset: false,
                      decimalPlaces: 0,
                      style: {
                        borderRadius: 10,
                      },
                      propsForDots: {
                        r: '0',
                        strokeWidth: '10',
                        stroke: 'transparent',
                      },
                      propsForBackgroundLines: {
                        stroke: '#777777',
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </Neomorph>
            </View>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  transform: [{rotate: '-90deg'}],
                  fontSize: 18,
                  color: 'silver',
                }}>
                wind direction
              </Text>
              <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 1,
                  shadowColor: 'white',
                  shadowRadius: 3,
                  borderRadius: 10,
                  backgroundColor: '#252525',
                  width: Dimensions.get('window').width / 1.9,
                  height: 220,
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width / 1.932,
                    height: 180,
                    backgroundColor: '#252525',
                    borderRadius: 10,
                    top: 8,
                    left: 9,
                  }}>
                  <LineChart
                    data={{
                      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                          // barColors: ['white', 'black', 'white'],
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width / 2}
                    height={200}
                    yAxisLabel={''}
                    yAxisSuffix=" "
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundGradientFrom: '#000',
                      backgroundGradientFromOpacity: 0,
                      backgroundGradientTo: '#000',
                      backgroundGradientToOpacity: 0,
                      fillShadowGradientFrom: '#000',
                      fillShadowGradientFromOpacity: 0,
                      fillShadowGradientTo: '#000',
                      fillShadowGradientToOpacity: 0,
                      color: (opacity = 1) => `#640D02`,
                      labelColor: (opacity = 1) => `silver`,
                      strokeWidth: 5,
                      useShadowColorFromDataset: false,
                      decimalPlaces: 0,
                      // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 10,
                      },
                      propsForDots: {
                        r: '0',
                        strokeWidth: '10',
                        stroke: '#fff',
                      },
                      propsForBackgroundLines: {
                        stroke: '#777777',
                      },
                    }}
                    bezier
                    withShadow={true}
                    style={{
                      marginVertical: 8,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </Neomorph>
            </View>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  transform: [{rotate: '-90deg'}],
                  fontSize: 20,
                  color: 'silver',
                }}>
                temperature
              </Text>
              <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 1,
                  shadowColor: 'white',
                  shadowRadius: 3,
                  borderRadius: 10,
                  backgroundColor: '#252525',
                  width: Dimensions.get('window').width / 1.9,
                  height: 220,
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width / 1.932,
                    height: 180,
                    backgroundColor: '#252525',
                    borderRadius: 10,
                    top: 8,
                    left: 9,
                  }}>
                  <LineChart
                    data={{
                      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                          // barColors: ['white', 'black', 'white'],
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width / 2}
                    height={200}
                    yAxisLabel={''}
                    yAxisSuffix=" "
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundGradientFrom: '#000',
                      backgroundGradientFromOpacity: 0,
                      backgroundGradientTo: '#000',
                      backgroundGradientToOpacity: 0,
                      fillShadowGradientFrom: '#000',
                      fillShadowGradientFromOpacity: 0,
                      fillShadowGradientTo: '#000',
                      fillShadowGradientToOpacity: 0,
                      color: (opacity = 1) => `#B18D2C`,
                      labelColor: (opacity = 1) => `silver`,
                      strokeWidth: 5,
                      useShadowColorFromDataset: false,
                      decimalPlaces: 0,
                      // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 10,
                      },
                      propsForDots: {
                        r: '0',
                        strokeWidth: '10',
                        stroke: 'transparent',
                      },
                      propsForBackgroundLines: {
                        stroke: '#777777',
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </Neomorph>
            </View>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  transform: [{rotate: '-90deg'}],
                  fontSize: 18,
                  color: 'silver',
                }}>
                wind direction
              </Text>
              <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 1,
                  shadowColor: 'white',
                  shadowRadius: 3,
                  borderRadius: 10,
                  backgroundColor: '#252525',
                  width: Dimensions.get('window').width / 1.9,
                  height: 220,
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width / 1.932,
                    height: 200,
                    backgroundColor: '#252525',
                    borderRadius: 10,
                    top: 8,
                    left: 9,
                  }}>
                  <LineChart
                    data={{
                      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                          ],
                          // barColors: ['white', 'black', 'white'],
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width / 2}
                    height={200}
                    yAxisLabel={''}
                    yAxisSuffix=" "
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundGradientFrom: '#000',
                      backgroundGradientFromOpacity: 0,
                      backgroundGradientTo: '#000',
                      backgroundGradientToOpacity: 0,
                      fillShadowGradientFrom: '#000',
                      fillShadowGradientFromOpacity: 0,
                      fillShadowGradientTo: '#000',
                      fillShadowGradientToOpacity: 0,
                      color: (opacity = 1) => `#2D8DB6`,
                      labelColor: (opacity = 1) => `silver`,
                      strokeWidth: 5,
                      useShadowColorFromDataset: false,
                      decimalPlaces: 0,
                      // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 10,
                      },
                      propsForDots: {
                        r: '0',
                        strokeWidth: '10',
                        stroke: 'transparent',
                      },
                      propsForBackgroundLines: {
                        stroke: '#777777',
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </Neomorph>
            </View>
          </View>
  
          {/**************************** right side **************************** */}
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <NeumorphismButton circlebutton>
                  <View
                    style={{
                      borderWidth: 2,
                      width: 13,
                      borderColor: '#AAAAAA',
                    }}
                  />
                </NeumorphismButton>
  
                <View
                  style={{
                    alignItems: 'center',
                    marginHorizontal: 50,
                    marginTop: 40,
                    justifyContent: 'center',
                  }}>
                  <Neomorph
                    inner
                    darkShadowColor="#141414"
                    lightShadowColor="#2e2e2e"
                    style={{
                      shadowOffset: {width: 10, height: 10},
                      shadowOpacity: 1,
                      shadowColor: 'white',
                      shadowRadius: 3,
                      borderRadius: 145,
                      backgroundColor: '#222222',
                      width: 155,
                      height: 74,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 130,
                        height: 55,
                        backgroundColor: '#141414',
                        borderRadius: 26,
                        top: 15,
                        left: 15,
                      }}>
                      <Text
                        style={{
                          marginLeft: 20,
                          marginVertical: 2,
                          fontSize: 30,
                          color: 'white',
                        }}>
                        48
                      </Text>
                      <View
                        style={{
                          width: 2,
                          backgroundColor: 'gray',
                          marginHorizontal: 10,
                        }}></View>
                      <Text
                        style={{
                          marginVertical: 7,
                          fontSize: 24,
                          fontStyle: 'italic',
                          color: 'white',
                        }}>
                        h
                      </Text>
                    </View>
                  </Neomorph>
                  <Text style={{...styles.text, fontSize: 22, marginTop: 20}}>
                    timescale
                  </Text>
                </View>
  
                <NeumorphismButton circlebutton plus>
                  {/* <View
                  style={{
                    borderWidth: 2,
                    width: 13,
                    borderColor: '#AAAAAA',
                  }}></View> */}
                  <Text style={{color: 'white', fontSize: 24}}>{'+'}</Text>
                </NeumorphismButton>
              </View>
  
              <NeumorphismButton MOB>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 22,
                  }}>
                  MOB
                </Text>
              </NeumorphismButton>
            </View>
  
            <Image
              source={require('../images/Layer2.png')}
              style={{
                alignSelf: 'center',
                height: Dimensions.get('window').height / 2.2,
                width: Dimensions.get('window').height / 2.2,
              }}
            />
  
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                borderColor: 'silver',
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <View
                style={{
                  width: '30%',
                  padding: 20,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 22, color: '#AAAAAA'}}>AIR TEMP</Text>
                  <Text style={{fontSize: 20, color: '#AAAAAA', marginLeft: 30}}>
                    °C
                  </Text>
                </View>
  
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 50,
                    fontSize: 66,
                    color: '#AAAAAA',
                  }}>
                  28.6
                </Text>
              </View>
  
              <View
                style={{
                  borderColor: 'silver',
                  borderWidth: 0.5,
                  marginVertical: 10,
                }}
              />
  
              <View
                style={{
                  width: '30%',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 22, color: '#AAAAAA'}}>HUMIDITY</Text>
                  <Text style={{fontSize: 20, color: '#AAAAAA', marginLeft: 30}}>
                    %
                  </Text>
                </View>
  
                <Text
                  style={{textAlign: 'center', fontSize: 66, color: '#AAAAAA'}}>
                  80.4
                </Text>
              </View>
            </View>
  
            <View
              style={{
                width: '35%',
                borderColor: 'silver',
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignSelf: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 22, color: '#AAAAAA'}}>AIR PRESSURE</Text>
                <Text style={{fontSize: 20, color: '#AAAAAA', marginLeft: 30}}>
                  hPa
                </Text>
              </View>
  
              <Text
                style={{
                  textAlign: 'center',
                  marginLeft: 20,
                  fontSize: 62,
                  color: '#AAAAAA',
                }}>
                1015.7
              </Text>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            height: 70,
            marginVertical: 10,
            backgroundColor: 'red',
            width: Dimensions.get('screen').width,
          }}></View> */}
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      paddingHorizontal: 30,
    },
    container: {
      flex: 1,
      // marginHorizontal: 30,
    },
    text: {
      color: '#AAAAAA',
    },
  });
  