import {StyleSheet, View} from 'react-native';
import React from 'react';
import Typography from '../Typography';
import CheckBox from 'react-native-check-box';

const UserCard = ({item, checkBoxDisabled, isChecked, onCheckChange}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.info}>
        <Typography>
          {item?.legal_first_name} {item?.legal_last_name}
        </Typography>
        <Typography>{item?.email}</Typography>
      </View>
      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={() => onCheckChange(item?.id)}
        disabled={checkBoxDisabled}
        isChecked={isChecked}
      />
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 4,
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  info: {
    flex: 1,
  },
});
