import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import ShowCount from './components/ShowCount';
import DecreaseCount from './components/DecreaseCount';

function App() {

  // Create a 'currentState' object and 'dispatch' function
  //
  // These work like useState(), but on more global values using a reducer.
  //
  // Once created, they are 'global' and can be passed to other components.
  //
  // In this example, ShowCount uses the currentState object and
  //  DecreaseCount uses the dispatch() function.
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { dispatch({"type": "increment"}) } }>Click me to increase count!</button>
        <ShowCount currentState={currentState} />
        <DecreaseCount dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;