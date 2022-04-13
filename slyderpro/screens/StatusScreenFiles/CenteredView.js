import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class CenteredView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            borderColor: 'silver',
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, color: '#AAAAAA'}}>POS</Text>
            <Text style={{fontSize: 24, color: '#AAAAAA'}}>GPS</Text>
          </View>

          <Text style={{fontSize: 40, color: '#AAAAAA', textAlign: 'center'}}>
            N 36°54’51.4’’ | W 006°51’50.0’’
          </Text>
        </View>

        <Image
          source={require('../../images/Layer.png')}
          style={{
            height: Dimensions.get('window').height / 1.7,
            width: Dimensions.get('window').height / 1.7,
            margin: 20,
            bottom:20,
            marginVertical: 50,
          }}
        />

        <View style={{bottom:40,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              marginHorizontal: 10,
              width: Dimensions.get('window').width / 7.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#AAAAAA'}}>WATER TEMP</Text>
              <Text style={{fontSize: 18, color: '#AAAAAA', marginLeft: 30}}>
                °C
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginLeft: 50,
                fontSize: 55,
                color: '#AAAAAA',
              }}>
              28.3
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              marginHorizontal: 10,
              width: Dimensions.get('window').width / 7.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#AAAAAA'}}>DEPTH</Text>
              <Text style={{fontSize: 18, color: '#AAAAAA', marginLeft: 30}}>
                m
              </Text>
            </View>

            <Text style={{textAlign: 'center', fontSize: 55, color: '#AAAAAA'}}>
              36.5
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
