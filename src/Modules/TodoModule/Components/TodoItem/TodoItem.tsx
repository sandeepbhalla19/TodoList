
import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoContext} from '../TodoProvider/TodoProvider';
import {Todo} from '../../Types/Types';
import scaler from '../../../../Utils/scaler';
import CheckBox from '../CheckBox/CheckBox';

export const TodoItem: React.FC<{item: Todo; index: number}> = ({
  item,
  index,
}) => {
  const {dispatch} = useContext(TodoContext)!;

  return (
    <View style={styles.todoItem}>
      {/* <CheckBox
        onCheckColor={'blue'}
        value={item?.completed}
        onValueChange={() => dispatch({type: 'TOGGLE_TODO', payload: index})}
        style={styles.checkbox}
      /> */}
      <CheckBox
        onPress={() => dispatch({type: 'TOGGLE_TODO', payload: index})}
        title={item?.title}
        isChecked={item?.completed}
      />
      {/* <Text style={[styles.todoText, item.completed && styles.completedText]}>
        {item?.title}
      </Text> */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch({type: 'REMOVE_TODO', payload: index})}>
        <Text style={styles.deleteText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scaler(10),
    borderBottomWidth: scaler(1),
    borderBottomColor: '#ccc',
  },
  
  deleteText: {
    fontSize: scaler(16),
    color: 'black',
   alignSelf:'center'
  },
  deleteButton: {
    backgroundColor: '#D3D3D3',
    width: scaler(25),
    height: scaler(25),
    alignItems: 'center',
    justifyContent:'center'
  },
  checkbox: {
    height: scaler(9),
    width: scaler(19),
    marginRight: scaler(15),
    padding: scaler(10),
  },
});
