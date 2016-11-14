import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Devloper Infos</h2>
        </div>
        <p className="App-intro">
          개발자 기술공유 프로젝트
        </p>
      </div>
    );
  }
}

export default App;
