//The following line HAS to be used first
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen (props){
    return (
        <View 
            style= {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'red',
        }}>
            <Text 
                style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    fontFamily: 'Courier-Bold',
                }}>Home Screen</Text>

            <Button title="About Creator" onPress={ () => props.navigation.navigate('About')}/>

            <Button title="Contact the Creator" onPress={ () => props.navigation.navigate('Contact')}/>

            <Button title="View Creations" onPress={ () => props.navigation.navigate('Creation')}/>
        </View>
    );
}

function AboutScreen (props) {
    return (
        <View 
            style= {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
            }}>
            <Text
              style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    fontFamily: 'Courier-Bold',
              }}>About Me!</Text>

                <Button title="Back to Home" onPress={ () => props.navigation.navigate('Home')}/>

                <Button title="Contact the Creator" onPress={ () => props.navigation.navigate('Contact')}/>

                <Button title="View Creations" onPress={ () => props.navigation.navigate('Creation')}/>
        </View>
    );
}

function CreationScreen (props) {
    return (
        <View 
            style= {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'brown',
            }}>
            <Text
              style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    fontFamily: 'Courier-Bold',
              }}>Katishkas Creations!</Text>

                <Button title="Back to Home" onPress={ () => props.navigation.navigate('Home')}/>

                <Button title="Back to About Me Page" onPress={ () => props.navigation.navigate('About')}/>

                <Button title="Contact the Creator" onPress={ () => props.navigation.navigate('Contact')}/>
        </View>
    );
}

function ContactScreen (props) {
    return (
        <View 
            style= {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'yellow',
            }}>
            <Text
              style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    fontFamily: 'Courier-Bold',
              }}>Contact Me!</Text>

                <Button title="Back to Home" onPress={ () => props.navigation.navigate('Home')}/>

                <Button title="Back to About Me Page" onPress={ () => props.navigation.navigate('About')}/>

                <Button title="Back to View Creations" onPress={ () => props.navigation.navigate('Creation')}/>
        </View>
    );
}

const Stack = createStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />

                <Stack.Screen name="About" component={AboutScreen} />

                <Stack.Screen name="Contact" component={ContactScreen} />

                <Stack.Screen name="Creation" component={CreationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;