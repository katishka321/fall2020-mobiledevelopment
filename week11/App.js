import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default function App() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title>Katishka Walton</Card.Title>

          <Text style={styles.paragraph}>
            My two favorite foods are:
          </Text>
          <Card.Divider />

          <Text>
            Mozzerlla Sticks
          </Text>
          <Card.Divider />

          <Text>
            French Fries
          </Text>
          <Card.Divider />

          <Button title="SUBMIT"></Button>
        </Card>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paragraph: {
      margin: "1em"
    }
  });