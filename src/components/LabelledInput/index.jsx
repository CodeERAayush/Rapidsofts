import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Typography from '../Typography'
import { Colors } from '../../constants/Colors'

const LabelledInput = ({customInputStyle, placeholderText, onChangeText, value, label}) => {
  return (
    <View style={styles.container}>
        <Typography style={styles.label}>
            {label}
        </Typography>
    <TextInput
    placeholder={placeholderText}
    style={[styles?.inputStyle,{...customInputStyle}]}
    value={value}
    onChangeText={onChangeText}
    />
    </View>
  )
}

export default LabelledInput

const styles = StyleSheet.create({
    container:{width:'60%'},
    inputStyle:{paddingVertical:5, borderWidth:1, width:'100%', borderRadius:10},
    label:{fontSize:14, color:Colors?.gray, marginBottom:2, marginTop:10, marginHorizontal:5}
})