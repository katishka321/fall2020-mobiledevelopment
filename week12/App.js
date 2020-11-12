import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

// Divider (https://reactnativeelements.com/docs/divider)

import ButtonExample from './components/ButtonExample';

export default function App() {
  return (
    <View style={styles.container}>
        <ButtonExample styles={styles} />
        <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  divider: {
    margin: 10
  }
});