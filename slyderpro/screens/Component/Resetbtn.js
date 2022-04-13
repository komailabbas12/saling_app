import * as React from 'react';
import PropTypes from 'prop-types';
import {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const Resetbtn = props => {
  const {size = 12} = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#616161', '#616161'] : ['#616161', '#000000'];
  const buttonCommonStyle = {
    borderRadius: size * 2,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: {width: size, height: size},
    marginTop: size,
    marginBottom: size,
  };
  const buttonInnerStyle = {
    shadowOffset: {width: -size, height: -size},
  };
  const buttonFaceStyle = {
    borderRadius: size * 2,
    paddingHorizontal: size * 1.2,
    paddingVertical: size * 0.5,
    borderColor: 'black',
    borderWidth: 2,
  };

  return (
    <View
      style={[
        styles.buttonOuter,
        buttonCommonStyle,
        buttonOuterStyle,
        {position: 'absolute', left: -30, top: props.reset1 ? 40 : 160},
      ]}>
      <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
        <LinearGradient
          colors={gradColors}
          useAngle={true}
          angle={145}
          angleCenter={{x: 0.5, y: 0.5}}
          style={[styles.buttonFace, buttonFaceStyle, props.style]}>
          {props.children}
        </LinearGradient>
      </View>
    </View>
  );
};

Resetbtn.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowOffset: {width: 12, height: 12},
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 12,
    padding: 1,
    marginBottom: 12,
  },
  buttonInner: {
    shadowOffset: {width: -12, height: -12},
    shadowColor: '#8b0000',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    padding: 12,
  },
});

export default Resetbtn;
