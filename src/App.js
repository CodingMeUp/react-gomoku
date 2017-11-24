import React, { Component } from 'react';
// import logo from './logo.svg';
import gomoku from './gomoku.jpg'
import './App.css';
import Panel from './panel'



class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={gomoku} className="App-logo" alt="五子棋" />
          <h1 className="App-title">五子棋</h1>
        </header>

        <div className="App-intro">
          使用React全家桶做的五子棋
        </div>

        <Panel  />

      </div>
    );
  }
}

export default App;
