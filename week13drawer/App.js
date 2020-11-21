// The following line HAS to be used first!
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily:'Courier-Bold', color: 'white' }}>Home Screen</Text>
      <Button
        title="About Creator"
        onPress={() => props.navigation.navigate('About')}
      />
      <Button
        title="View Creations"
        onPress={() => props.navigation.navigate('Creation')}
      />
      <Button
        title="Contact Creator"
        onPress={() => props.navigation.navigate('Contact')}
      />
    </View>
  );
}

function AboutScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily:'Courier-Bold', color: 'white' }}>About the Creator!</Text>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="View Creations"
        onPress={() => props.navigation.navigate('Creation')}
      />
      <Button
        title="Contact the Creator"
        onPress={() => props.navigation.navigate('Contact')}
      />
    </View>
  );
}

function CreationScreen(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily:'Courier-Bold', color: 'white' }}>Katishkas Creations!</Text>
        <Button
          title="Back to Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title="Back to About Creator"
          onPress={() => props.navigation.navigate('About')}
        />
        <Button
          title="Contact the Creator"
          onPress={() => props.navigation.navigate('Contact')}
        />
      </View>
    );
}

function ContactScreen(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily:'Courier-Bold', color: 'white' }}>Contact the Creator</Text>
        <Button
          title="Back to Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title="Back to About Creator"
          onPress={() => props.navigation.navigate('About')}
        />
        <Button
          title="Back to View Creations"
          onPress={() => props.navigation.navigate('Creation')}
        />
      </View>
    );
  }

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="About" component={AboutScreen} />

        <Drawer.Screen name="Creation" component={CreationScreen} />

        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;