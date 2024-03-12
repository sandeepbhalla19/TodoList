import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TodoContext} from '../../Modules/TodoModule/Components/TodoProvider/TodoProvider';
import {TodoItem} from '../../Modules/TodoModule/Components/TodoItem/TodoItem';
import SnackbarHandler from '../../Utils/SnackbarHandler';
import scaler from '../../Utils/scaler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Main screen component for the to-do list
const TodoListScreen: React.FC = () => {
  const {state, dispatch} = useContext(TodoContext)!;
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input !== '') {
      dispatch({type: 'ADD_TODO', payload: input});
    } else {
      SnackbarHandler.errorToast('Please Enter Valid Value')
    }
    setInput('');
  };

  const completedCount = state?.todos?.filter(todo => todo?.completed)?.length;

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={"handled"}
      enableOnAndroid={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <Text style={styles.header}>THINGS TO DO:</Text>
      <FlatList
        data={state?.todos ?? []}
        renderItem={({ item, index }) => <TodoItem item={item} index={index} />}
        keyExtractor={(_, index) => index?.toString()}
        scrollEnabled={false}
      />
      <Text style={styles.doneCount}>DONE: {completedCount}</Text>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          returnKeyType={"done"}
          placeholder="Enter new task"
          maxLength={20}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={{ color: "white", fontWeight: "bold" }}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: scaler(1),
    padding: scaler(10),
    margin: scaler(10),
  },
  header: {
    fontSize: scaler(22),
    fontWeight: 'bold',
    marginBottom: scaler(10),
  },
  addButton: {
    backgroundColor: '#007AFF',
    //width: scaler(100),
    height: scaler(39),
    borderRadius: scaler(3),
    alignItems: 'center',
    justifyContent: 'center',
    padding:scaler(10)
  },

  input: {
    borderWidth: scaler(1),
    borderColor: '#ccc',
    padding: scaler(8),
    marginVertical: scaler(15),
    borderRadius: scaler(5),
    flex: scaler(1),
    marginRight: scaler(8),
    height: scaler(40),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doneCount: {
    fontSize: scaler(18),
    textAlign: 'center',
    marginTop: scaler(15),
  },
});

export default TodoListScreen;
