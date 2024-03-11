import React from 'react';
import { TodoProvider } from './Modules/TodoModule/Components/TodoProvider/TodoProvider';
import TodoScreen from './Screens/Todo/TodoScreen';
import { SafeAreaView } from 'react-native';

const App: React.FC = () => (
  <SafeAreaView style ={{flex:1}}>
    <TodoProvider>
      <TodoScreen />
    </TodoProvider>
  </SafeAreaView>
);

export default App;
