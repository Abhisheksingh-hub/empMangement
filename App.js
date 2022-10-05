import { StyleSheet, Text, Button, typ } from 'react-native';

import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>

    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
