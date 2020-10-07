import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }); }}>Up!</button>
        <button disabled={this.state.count === 0} onClick={() => { this.setState({ count: this.state.count - 1 }); }}>Down!</button>
        <button onClick={() => { this.setState({ count: 0 }); }}>Reset!</button>
      </div>
    );
  }
}

export default App;
