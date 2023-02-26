import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import './components/Counter/bootstrap.css';
import './components/Counter/counter1';

class App extends Component {
  render() {
    return (
      <div className="App">
             <Counter></Counter>
      
      </div>
    
      
    );
  }
}
export default App