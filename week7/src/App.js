import React, {Component} from 'react';
import logo from './Lovepik_com-400254962-calculator.png';
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
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
            <h1>Calculator: {this.state.counter}</h1>
              <div> 
                <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Add!</button>
              </div>
              <div> 
                <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>Subtract!</button>
              </div>
              <div> 
              <button onClick={() => {this.setState({counter: this.state.counter * 2})}}>Multiply by 2!</button>
              </div>
              <div> 
              <button onClick={() => {this.setState({counter: this.state.counter / 2})}}>Divide by 2!</button>
              </div>
              <div>
                <button onClick={() => {this.setState({counter: 0})}}>Clear!</button>
              </div>
        </header>
      <div>
        <Example />
      </div>

      </div>
    );
  }
}

export default App;