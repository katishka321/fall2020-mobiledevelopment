import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/example';

class App extends Component {

  constructor(props){
    super();
      this.state = {
        counter: 0,
      };
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>Count: {this.state.counter}</p>
            <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Increase!</button>
            <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>Decrease!</button>
            <button onClick={() => {this.setState({counter: 0})}}>Reset!</button>
        </header>
      <div>
        <Example />
      </div>

      </div>
    );
  }
}

export default App;