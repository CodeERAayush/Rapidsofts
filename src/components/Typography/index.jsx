import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const Typography = ({children, style}) => {
  return (
    <Text allowFontScaling={false} style={[{color:Colors?.black},style]}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({});
