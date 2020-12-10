import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-elements';

// Divider (https://reactnativeelements.com/docs/divider)

// Button (https://reactnativeelements.com/docs/button)

const ButtonExample = (props) => {

  return (
    <View>
      <Text style={props.styles.header}>Which Game System is the Best</Text>

      <Divider style= {styles.divider}/>
      <Button title="PlayStation" onPress={ () => Alert.alert('You selected PlayStation') } />

      <Divider style= {styles.divider}/>
      <Button style={styles.Button} title="Xbox" onPress={ () => Alert.alert('You selected PlayStation') } />

      <Divider style= {styles.divider}/>
      <Button title="Nintendo" onPress={ () => Alert.alert('You selected PlayStation') } />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    margin: 10
  }
});

export default ButtonExample;