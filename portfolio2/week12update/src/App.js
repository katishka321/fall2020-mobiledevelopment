import React, {Component} from 'react';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Divider (https://reactnativeelements.com/docs/divider)
import { Divider } from 'react-native-elements';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      seasons: [
        {
          name: "Winter", votes: 0
        },
        {
          name: "Summer", votes: 0
        },
        {
          name: "Spring", votes: 0
        },
        {
          name: "Fall", votes: 0
        },
      ]
      }
    }
    vote (i){
      let newSeasons = [...this.state.seasons];
      newSeasons[i].votes++;
      function swap (array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      this.setState({seasons: newSeasons});
    }
    render(){
      return(
        <>
        <h1> What's your favorite season? </h1>
        <div className="seasons">
          {
            this.state.seasons.map((lang, i) => 
            <div key={i} className="seasons">
              <div className="voteCount">
                {seas.votes}
              </div>
              <div className= "seasonName">
                {seas.name}
              </div>
              <button onClick={this.vote.bind(this, i)}> Click Here! </button>
            </div>
            )
          }
        </div>
        </>
      );
    }
  }
export default App;

/*
// Divider (https://reactnativeelements.com/docs/divider)

import ButtonExample from '../components/ButtonExample';

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
*/