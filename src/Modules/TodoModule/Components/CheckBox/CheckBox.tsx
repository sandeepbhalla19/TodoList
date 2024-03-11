import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import scaler from '../../../../Utils/scaler';

const CheckBox = (props: any) => {
  const {isChecked, onPress, title} = props;
  const iconName = isChecked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={24} color="#000" />
      </Pressable>
      <Text style={[styles.todoText, props?.isChecked && styles.completedText]}>
        {title}
      </Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,

    marginHorizontal: 5,
  },
  todoText: {
    flex: scaler(1),
    fontSize: scaler(18),
    marginLeft: scaler(8),
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
 
});
